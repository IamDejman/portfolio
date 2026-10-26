import type { Metadata } from "next";
import Link from "next/link";
import Split from "@/components/motion/Split";
import { enter } from "@/components/motion/order";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="px-5 pt-28 pb-20">
      <div className="mx-auto max-w-[1280px] text-center">

        <Split as="h1" className="mb-6 font-serif text-5xl md:text-6xl" enter>
          Page not found.
        </Split>
        <p className="mx-auto mb-10 max-w-md text-ink-2" data-enter style={enter(2)}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3" data-enter style={enter(3)}>
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/work" className="btn btn-ghost">
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}
