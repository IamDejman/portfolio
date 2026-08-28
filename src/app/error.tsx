"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="px-5 pt-28 pb-20">
      <div className="mx-auto max-w-[1280px] text-center">
        <p className="label mb-4">Error</p>
        <h1 className="mb-6 font-serif text-5xl md:text-6xl">
          Something went wrong.
        </h1>
        <p className="mx-auto mb-10 max-w-md text-ink-2">
          An unexpected error occurred. Please try again.
        </p>
        <button onClick={reset} className="btn btn-primary">
          Try again
        </button>
      </div>
    </section>
  );
}
