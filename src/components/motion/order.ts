import type { CSSProperties } from "react";

/* Entrance order for [data-enter] content: each step starts 110ms later. */
export const enter = (step: number) => ({ "--enter": step }) as CSSProperties;
