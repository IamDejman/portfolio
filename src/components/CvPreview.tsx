"use client";
import { useEffect, useRef, useState } from "react";

/* Renders every page of the CV with pdf.js so the preview looks the same on
   phones, where browsers will not display a PDF inside the page. */
export default function CvPreview({ src }: { src: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "failed">(
    "loading",
  );

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    let cancelled = false;
    let destroy: (() => Promise<void>) | undefined;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();
        const task = pdfjs.getDocument({ url: src });
        destroy = () => task.destroy();
        const pdf = await task.promise;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        const canvases: HTMLCanvasElement[] = [];
        for (let number = 1; number <= pdf.numPages; number++) {
          const page = await pdf.getPage(number);
          const base = page.getViewport({ scale: 1 });
          // Render for the widest the preview gets, then let CSS scale down.
          const viewport = page.getViewport({ scale: (860 / base.width) * ratio });
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(viewport.width);
          canvas.height = Math.round(viewport.height);
          canvas.setAttribute("aria-hidden", "true");
          await page.render({ canvas, viewport }).promise;
          if (cancelled) return;
          canvases.push(canvas);
        }
        element.replaceChildren(...canvases);
        setStatus("ready");
      } catch {
        if (!cancelled) setStatus("failed");
      }
    })();

    return () => {
      cancelled = true;
      void destroy?.();
    };
  }, [src]);

  return (
    <div className="cv-preview">
      <div
        ref={container}
        className="cv-pages"
        role="img"
        aria-label="Preview of Ayodeji Eluwande's CV. Download the PDF to read it with a screen reader or select text."
      />
      {status === "loading" && <p className="cv-status">Loading the CV…</p>}
      {status === "failed" && (
        <p className="cv-status">
          The preview could not load.{" "}
          <a href={src} target="_blank" rel="noopener noreferrer">
            Open the PDF instead
          </a>
          .
        </p>
      )}
    </div>
  );
}
