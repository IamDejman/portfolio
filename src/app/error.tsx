"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-[1120px] mx-auto text-center">
        <p className="section-label mb-4">Error</p>
        <h1 className="font-serif text-5xl md:text-6xl text-text mb-6">
          Something went wrong.
        </h1>
        <p className="text-muted max-w-md mx-auto mb-10">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
