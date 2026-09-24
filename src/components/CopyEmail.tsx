"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/content";

/* Mail links do nothing for visitors without a mail client, so every email
   call to action gets a copy button. If the clipboard is unavailable, the
   address itself is shown instead. */
export default function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  useEffect(() => {
    if (status !== "copied") return;
    const timer = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [status]);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };
  return (
    <button type="button" className="copy-email" onClick={copy}>
      <span aria-live="polite">
        {status === "copied"
          ? "Email copied"
          : status === "failed"
            ? siteConfig.email
            : "Copy email address"}
      </span>
    </button>
  );
}
