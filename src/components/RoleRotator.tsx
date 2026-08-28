"use client";

import { useEffect, useState } from "react";

/* Renders the first role on the server so the line reads without JS;
   rotation starts after mount and is skipped under reduced motion. */
export default function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 300);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span
      className="italic text-accent transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-live="polite"
    >
      {roles[index]}
    </span>
  );
}
