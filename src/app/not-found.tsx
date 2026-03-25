import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-[1120px] mx-auto text-center">
        <p className="section-label mb-4">404</p>
        <h1 className="font-serif text-5xl md:text-6xl text-text mb-6">
          Page not found.
        </h1>
        <p className="text-muted max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
