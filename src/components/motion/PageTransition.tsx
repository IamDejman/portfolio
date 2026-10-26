"use client";
import { usePathname } from "next/navigation";
import { ViewTransition } from "react";

/* Route changes run as view transitions: the old page lifts away while the
   new one rises in, and a clicked project's logo travels to its case study
   (ProjectLogo `travel`). Keyed by pathname, so moving between nested routes,
   such as one case study to the next, transitions too. Animations live in
   styles/motion.css and are skipped with reduced or paused motion. */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ViewTransition key={pathname} enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
