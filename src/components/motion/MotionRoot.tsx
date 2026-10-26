"use client";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import { motionOn, onMotionChange, syncMotion } from "./state";

/* Reveals [data-reveal] content as it scrolls into view (styles in
   styles/motion.css). Content is only hidden ("armed") here, once it can be
   revealed again, so it stays visible without JavaScript, with reduced
   motion or with motion paused. On first load anything already painted on
   screen is left alone; after a client navigation the new page has not
   been painted yet, so all of it is armed and the visible part rises in. */
export default function MotionRoot() {
  const pathname = usePathname();
  const seen = useRef<string | null>(null);

  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    media.addEventListener("change", syncMotion);
    // A plain click on a project card names its logo just before the page
    // transition starts, so the logo travels to the case study.
    const travel = (event: MouseEvent) => {
      if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const mark = (event.target as Element).closest?.("a")?.querySelector<HTMLElement>("[data-travel]");
      if (mark) mark.style.viewTransitionName = `brand-${mark.dataset.travel}`;
    };
    document.addEventListener("click", travel, true);
    return () => {
      media.removeEventListener("change", syncMotion);
      document.removeEventListener("click", travel, true);
    };
  }, []);

  useLayoutEffect(() => {
    const navigated = seen.current !== null && seen.current !== pathname;
    seen.current = pathname;
    if (!motionOn()) return;

    const pending = new Set<Element>();
    const show = (element: Element, delay: number) => {
      pending.delete(element);
      early.unobserve(element);
      whole.unobserve(element);
      (element as HTMLElement).style.setProperty("--reveal-delay", `${delay}ms`);
      element.classList.add("is-revealed");
    };
    const reveal = (entries: IntersectionObserverEntry[]) => {
      // Content arriving together is revealed top to bottom, left to right.
      entries
        .filter((entry) => entry.isIntersecting && pending.has(entry.target))
        .sort(
          (a, b) =>
            a.boundingClientRect.top - b.boundingClientRect.top ||
            a.boundingClientRect.left - b.boundingClientRect.left,
        )
        .forEach(({ target }, i) => {
          if (!pending.has(target)) return;
          const delay = Math.min(i, 6) * 90;
          show(target, delay);
          // Content inside a revealing panel follows it in. Waiting for its
          // own intersection would fail while the panel is still clipped.
          target
            .querySelectorAll(".is-armed:not(.is-revealed)")
            .forEach((inner, k) => show(inner, delay + 150 + k * 90));
        });
    };
    // Most content reveals once it is a little way into the viewport. The
    // root extends far above the viewport, so content a fast scroll carried
    // past between two frames still counts and is never left hidden. The
    // second observer catches short content at the very end of a page,
    // which can never scroll that far up.
    const early = new IntersectionObserver(reveal, {
      rootMargin: "100000px 0px -10% 0px",
    });
    const whole = new IntersectionObserver(reveal, { threshold: 1 });

    const scanned = new WeakSet<Element>();
    const arm = (fresh: boolean) =>
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")
        .forEach((element) => {
          if (scanned.has(element)) return;
          scanned.add(element);
          const painted =
            !fresh &&
            !element.classList.contains("is-armed") &&
            element.getBoundingClientRect().top < innerHeight;
          if (painted) return;
          element.classList.add("is-armed");
          if (element.dataset.reveal?.split(" ").includes("stagger")) {
            Array.from(element.children).forEach((child, i) =>
              (child as HTMLElement).style.setProperty("--reveal-i", String(i)),
            );
          }
          pending.add(element);
          early.observe(element);
          whole.observe(element);
        });
    arm(navigated);
    // Content that renders later, such as the live grader once it knows it
    // can run, announces itself before it paints, so all of it is armed.
    const late = () => {
      if (motionOn()) arm(true);
    };
    document.addEventListener("motion:content", late);

    // Pausing motion shows everything still waiting to be revealed.
    const stop = onMotionChange(() => {
      if (motionOn()) return;
      early.disconnect();
      whole.disconnect();
      pending.forEach((element) => element.classList.remove("is-armed"));
      pending.clear();
    });
    return () => {
      stop();
      document.removeEventListener("motion:content", late);
      early.disconnect();
      whole.disconnect();
    };
  }, [pathname]);

  return null;
}
