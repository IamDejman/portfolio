"use client";
import { useEffect, useRef } from "react";
import { motionOn } from "./state";

/* Counts a figure such as "~109,000", "85%" or "<5 mo" up from zero as it
   comes into view. The final value is rendered on the server and kept for
   assistive technology, which hears a leading "~" as "about"; counting only
   starts while the figure is still hidden by its entrance or reveal, so a
   visible number never jumps. */
export default function CountUp({ value }: { value: string }) {
  const display = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = display.current;
    const match = /^(\D*)([\d,]+)((?:\+|%)?(?:\s\w+)?)$/.exec(value);
    if (!element || !match || !motionOn()) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    if (target < 3 || !hidden(element)) return;

    const format = (n: number) =>
      prefix + (digits.includes(",") ? n.toLocaleString("en-US") : n) + suffix;
    element.textContent = format(0);
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / 1600);
        const eased = 1 - Math.pow(1 - progress, 4);
        element.textContent = format(Math.round(target * eased));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = value;
    };
  }, [value]);

  return (
    <>
      <span className="sr-only">{value.replace(/^~/, "about ")}</span>
      <span aria-hidden="true" ref={display}>
        {value}
      </span>
    </>
  );
}

// True while an entrance or reveal still holds the figure, or a container
// around it, fully transparent.
function hidden(element: HTMLElement) {
  for (let node: HTMLElement | null = element; node && node !== document.body; node = node.parentElement) {
    if (Number(getComputedStyle(node).opacity) < 0.05) return true;
  }
  return false;
}
