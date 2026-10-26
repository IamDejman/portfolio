"use client";
import { setMotionPaused, useMotionState } from "./state";

/* Pauses the sculpture and every decorative animation across the site, and
   remembers the choice. Hidden when the operating system already asks for
   reduced motion, which turns the same motion off. */
export default function MotionToggle() {
  const state = useMotionState();
  return (
    <button
      type="button"
      className="motion-toggle"
      onClick={() => setMotionPaused(state === "on")}
    >
      {state === "on" ? "Pause motion" : "Play motion"}
    </button>
  );
}
