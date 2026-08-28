import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 pt-28 pb-20">
      <div className="mx-auto max-w-[1280px] text-center">
        <p className="label mb-4">404</p>
        <h1 className="mb-6 font-serif text-5xl md:text-6xl">
          Page not found.
        </h1>
        <p className="mx-auto mb-10 max-w-md text-ink-2">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
