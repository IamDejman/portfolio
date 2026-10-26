"use client";
import { useSyncExternalStore } from "react";

export type MotionState = "on" | "off" | "reduced";

const EVENT = "motionchange";
const KEY = "motion";
// Remembers a pause for this visit when storage is unavailable.
let pausedOverride: boolean | null = null;

export const motionState = () =>
  (document.documentElement.dataset.motion ?? "reduced") as MotionState;

export const motionOn = () => motionState() === "on";

// Mirrors the head script in ./script.
export function syncMotion() {
  let paused = pausedOverride ?? false;
  try {
    paused = pausedOverride ?? (localStorage.getItem(KEY) === "off");
  } catch {}
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const next: MotionState = reduced ? "reduced" : paused ? "off" : "on";
  if (document.documentElement.dataset.motion === next) return;
  document.documentElement.dataset.motion = next;
  window.dispatchEvent(new Event(EVENT));
}

export function setMotionPaused(paused: boolean) {
  pausedOverride = paused;
  try {
    if (paused) localStorage.setItem(KEY, "off");
    else localStorage.removeItem(KEY);
  } catch {}
  syncMotion();
}

export function onMotionChange(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}

export function useMotionState(): MotionState {
  return useSyncExternalStore(onMotionChange, motionState, () => "on");
}
