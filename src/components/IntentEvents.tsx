"use client";
import { track } from "@vercel/analytics";
import { useEffect } from "react";

/* Records clicks on anything marked data-track (email, CV, social, booking
   and project links) as Vercel Analytics events, with the page they came
   from and an optional data-track-label. One listener keeps the tagged
   links themselves free to stay server components. */
export default function IntentEvents() {
  useEffect(() => {
    const record = (event: MouseEvent) => {
      const target = (event.target as Element).closest?.<HTMLElement>("[data-track]");
      if (!target?.dataset.track) return;
      track(target.dataset.track, {
        page: location.pathname,
        ...(target.dataset.trackLabel ? { label: target.dataset.trackLabel } : {}),
      });
    };
    document.addEventListener("click", record);
    return () => document.removeEventListener("click", record);
  }, []);
  return null;
}
