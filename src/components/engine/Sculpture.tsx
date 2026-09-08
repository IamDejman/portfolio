"use client";

import { useEffect, useRef } from "react";

type Vec = [number, number, number];
type Face = { points: Vec[]; color: number[]; edge?: boolean };

// A parametric ribbon surface, projected on a bounded 2D canvas. No external
// renderer, textures, network requests or WebGL dependency are needed.
export default function Sculpture({
  active,
  paused,
}: {
  active: number;
  paused: boolean;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const selection = useRef(active);
  const pointer = useRef({ x: 0, y: 0 });
  const stopped = useRef(paused);
  const wake = useRef<() => void>(() => {});
  useEffect(() => {
    selection.current = active;
    stopped.current = paused;
    wake.current();
  }, [active, paused]);

  useEffect(() => {
    const element = canvas.current;
    const ctx = element?.getContext("2d", { alpha: true });
    if (!element || !ctx) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = media.matches;
    let width = 0,
      height = 0,
      frame = 0,
      time = 0,
      previous = 0;
    let visible = true,
      alive = true;
    let turn = selection.current,
      px = 0,
      py = 0;
    const rotate = ([x, y, z]: Vec, a: number, b: number): Vec => {
      const yy = y * Math.cos(a) - z * Math.sin(a);
      const zz = y * Math.sin(a) + z * Math.cos(a);
      return [
        x * Math.cos(b) + zz * Math.sin(b),
        yy,
        -x * Math.sin(b) + zz * Math.cos(b),
      ];
    };
    const draw = () => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width / 6.1, height / 5.7);
      const project = ([x, y, z]: Vec): [number, number] => {
        const perspective = 7 / (7 + z);
        return [
          width / 2 + x * scale * perspective,
          height / 2 + y * scale * perspective,
        ];
      };
      const faces: Face[] = [];
      const segments = width < 500 ? 110 : 170;
      const palettes = [
        [222, 247, 73],
        [56, 83, 255],
        [212, 224, 234],
      ];
      for (let ring = 0; ring < 3; ring++) {
        const point = (u: number, v: number): Vec => {
          const twist = u * (ring === 0 ? 1.5 : 1) + time * 0.17;
          const radius =
            1.6 + ring * 0.07 + 0.16 * Math.cos(u * 3 + time * 0.22);
          const band = ring === 2 ? 0.12 : 0.34;
          const r = radius + v * band * Math.cos(twist);
          const p: Vec = [
            r * Math.cos(u),
            r * Math.sin(u),
            v * band * Math.sin(twist) + 0.25 * Math.sin(u * 2),
          ];
          const a = 0.7 + ring * 1.08 + turn * 0.32;
          const b = ring * 1.8 + time * 0.09 + turn * 0.55;
          return rotate(rotate(p, a, b), -0.24 + py * 0.2, px * 0.22);
        };
        for (let i = 0; i < segments; i++) {
          const u = (i / segments) * Math.PI * 2;
          const next = ((i + 1) / segments) * Math.PI * 2;
          for (let strip = 0; strip < 3; strip++) {
            const v = -1 + (strip * 2) / 3;
            faces.push({
              points: [
                point(u, v),
                point(next, v),
                point(next, v + 2 / 3),
                point(u, v + 2 / 3),
              ],
              color: palettes[ring],
              edge: ring === 1 && i % 3 === 0,
            });
          }
        }
      }
      // The three mechanisms share a faceted centre. It opens with selection.
      const core: Vec[] = [
        [0, -0.67, 0],
        [0.62, 0, 0],
        [0, 0, 0.62],
        [-0.62, 0, 0],
        [0, 0, -0.62],
        [0, 0.67, 0],
      ];
      const transformed = core.map((p) =>
        rotate(p, time * 0.12 + turn, time * -0.16),
      );
      for (let i = 1; i < 5; i++) {
        const next = i === 4 ? 1 : i + 1;
        faces.push({
          points: [transformed[0], transformed[i], transformed[next]],
          color: [60, 82, 240],
        });
        faces.push({
          points: [transformed[5], transformed[next], transformed[i]],
          color: [160, 179, 255],
        });
      }
      faces.sort(
        (a, b) =>
          b.points.reduce((s, p) => s + p[2], 0) / b.points.length -
          a.points.reduce((s, p) => s + p[2], 0) / a.points.length,
      );
      for (const face of faces) {
        const [a, b, c] = face.points;
        const ux = b[0] - a[0],
          uy = b[1] - a[1],
          uz = b[2] - a[2];
        const vx = c[0] - a[0],
          vy = c[1] - a[1],
          vz = c[2] - a[2];
        const nx = uy * vz - uz * vy,
          ny = uz * vx - ux * vz,
          nz = ux * vy - uy * vx;
        const length = Math.hypot(nx, ny, nz) || 1;
        const light =
          0.38 + 0.62 * Math.abs((nx * -0.3 + ny * -0.55 + nz * 0.78) / length);
        const color = face.color.map((v) => Math.round(v * light));
        ctx.beginPath();
        face.points.forEach((p, i) => {
          const [x, y] = project(p);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();
        ctx.fillStyle = `rgb(${color.join(",")})`;
        ctx.fill();
        ctx.strokeStyle = face.edge ? "rgba(166,188,255,.55)" : ctx.fillStyle;
        ctx.lineWidth = face.edge ? 0.8 : 0.5;
        ctx.stroke();
      }
    };
    const tick = (stamp: number) => {
      frame = 0;
      if (!alive || !visible || document.hidden) return;
      const dt = previous ? Math.min(stamp - previous, 50) : 16;
      previous = stamp;
      if (!stopped.current && !reduced) time += dt / 1000;
      turn +=
        (selection.current - turn) * (stopped.current || reduced ? 1 : 0.075);
      px += (pointer.current.x - px) * 0.06;
      py += (pointer.current.y - py) * 0.06;
      draw();
      if (!stopped.current && !reduced) frame = requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (!frame && alive) {
        previous = 0;
        frame = requestAnimationFrame(tick);
      }
    };
    const resize = () => {
      const rect = element.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(devicePixelRatio || 1, 1.75);
      element.width = Math.round(width * dpr);
      element.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
      schedule();
    };
    const motion = () => {
      reduced = media.matches;
      schedule();
    };
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else schedule();
    };
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) schedule();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(element);
    const resizer = new ResizeObserver(resize);
    resizer.observe(element);
    media.addEventListener("change", motion);
    document.addEventListener("visibilitychange", visibility);
    wake.current = schedule;
    resize();
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizer.disconnect();
      media.removeEventListener("change", motion);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      className="engine-canvas"
      aria-hidden="true"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.current = {
          x: (e.clientX - r.left) / r.width - 0.5,
          y: (e.clientY - r.top) / r.height - 0.5,
        };
      }}
      onPointerLeave={() => {
        pointer.current = { x: 0, y: 0 };
      }}
    />
  );
}
