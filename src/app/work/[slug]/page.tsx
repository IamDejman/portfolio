import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, builtProjects } from "@/data/content";
import Reveal from "@/components/Reveal";
import RailHead from "@/components/RailHead";
import { ArrowRight } from "@/components/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} Case Study`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const image = builtProjects.find((p) => p.caseStudy === slug)?.image;
  const next =
    caseStudies[(caseStudies.findIndex((c) => c.slug === slug) + 1) % caseStudies.length];

  return (
    <div>
      <div className="mx-auto max-w-[1280px] px-5 pt-8 md:px-12">
        <Link
          href="/work"
          className="meta inline-flex items-center gap-2 hover:text-ink transition-colors"
        >
          <span className="rotate-180">
            <ArrowRight size={13} />
          </span>
          Back to work
        </Link>
      </div>

      {/* Head */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-5 pt-10 pb-10 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pb-14">
        <RailHead index="01" label="Case study" top />
        <div className="flex flex-col gap-6 md:col-span-7 md:col-start-3">
          <h1 className="font-serif text-4xl leading-[1.04] tracking-[-0.018em] md:text-6xl">
            {cs.title}
          </h1>
          <p className="max-w-[560px] text-lg leading-relaxed text-ink-2 md:text-xl">
            {cs.summary}
          </p>
        </div>
        <div className="flex flex-col gap-3.5 md:col-span-2 md:col-start-11">
          {[
            ["Role", cs.role],
            ["Organisation", cs.org],
            ["Period", cs.period],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="label">{label}</span>
              <span className="text-sm text-ink-2">{value}</span>
            </div>
          ))}
          {cs.url && (
            <a
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              className="meta mt-1 flex items-center gap-1.5 text-accent"
            >
              Visit the platform <ArrowRight size={13} />
            </a>
          )}
        </div>
      </section>

      {/* Framed hero image */}
      {image && (
        <section className="mx-auto max-w-[1280px] px-5 pb-14 md:px-12 md:pb-20">
          <div className="overflow-hidden rounded-[18px] border border-line bg-surface">
            <div className="flex h-9 items-center gap-1.5 border-b border-line px-4">
              <span className="h-2 w-2 rounded-full bg-line-2" />
              <span className="h-2 w-2 rounded-full bg-line-2" />
              <span className="h-2 w-2 rounded-full bg-line-2" />
              {cs.url && (
                <span className="meta ml-3">
                  {cs.url.replace("https://", "")}
                </span>
              )}
            </div>
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <Image
                src={image}
                alt={`${cs.title} interface`}
                fill
                sizes="(max-width: 1280px) 100vw, 1184px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Metric band */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 px-5 md:grid-cols-4 md:px-12">
          {cs.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex flex-col gap-2 py-7 md:py-11 ${
                i % 2 === 1 ? "border-l border-line pl-5 md:pl-8" : ""
              } ${i >= 2 ? "border-t border-line md:border-t-0 md:border-l md:pl-8" : ""} ${
                i % 2 === 0 ? "pr-5 md:pr-8" : ""
              }`}
            >
              <span className="font-serif text-3xl md:text-5xl">
                {metric.value}
              </span>
              <span className="label leading-normal">{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Body: index rail, prose, pull column */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 pt-14 pb-16 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-22 md:pb-24">
        <nav
          aria-label="Sections"
          className="hidden flex-col gap-3.5 md:sticky md:top-8 md:col-span-2 md:flex"
        >
          <span className="label">On this page</span>
          <div className="h-px w-7 bg-line-2" />
          {cs.sections.map((s, i) => (
            <a
              key={s.heading}
              href={`#${s.heading.toLowerCase().replace(/\s+/g, "-")}`}
              className="meta flex gap-2.5 hover:text-ink transition-colors"
            >
              <span>{String(i + 1).padStart(2, "0")}</span> {s.heading}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-12 md:col-span-6 md:col-start-4">
          {cs.sections.map((section) => (
            <Reveal key={section.heading}>
              <section
                id={section.heading.toLowerCase().replace(/\s+/g, "-")}
                className="flex flex-col gap-4 scroll-mt-8"
              >
                <h2 className="font-serif text-3xl md:text-[38px]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-[17px] leading-[1.75] text-ink-2 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            </Reveal>
          ))}
        </div>

        <aside className="flex flex-col gap-4 border-t-2 border-ink pt-5 md:col-span-2 md:col-start-11">
          <span className="font-serif text-5xl md:text-6xl">
            {cs.metrics[0].value}
          </span>
          <p className="text-sm leading-relaxed text-ink-3">
            {cs.metrics[0].label}, on the platform&apos;s largest single
            engagement.
          </p>
        </aside>
      </section>

      {/* Next case study */}
      {next.slug !== slug && (
        <section className="bg-sink">
          <Link
            href={`/work/${next.slug}`}
            className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 py-14 md:grid-cols-12 md:items-center md:gap-6 md:px-12 md:py-18"
          >
            <span className="idx text-sink-ink-3">Next</span>
            <div className="flex flex-col gap-2 md:col-span-6 md:col-start-3">
              <h2 className="font-serif text-3xl text-sink-ink md:text-5xl">
                {next.title}
              </h2>
              <p className="text-sm leading-relaxed text-sink-ink-2">
                {next.summary}
              </p>
            </div>
            <span className="meta flex items-center gap-2 text-sink-ink md:col-span-2 md:col-start-11 md:justify-end">
              Read it <ArrowRight size={13} />
            </span>
          </Link>
        </section>
      )}
    </div>
  );
}
