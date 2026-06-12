import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

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

  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      <ScrollReveal>
        <div className="pt-32 pb-4">
          <Link
            href="/work"
            className="text-sm text-muted hover:text-text transition-colors"
          >
            &larr; Back to work
          </Link>
        </div>
        <p className="section-label mb-4">Case Study</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight max-w-3xl">
          {cs.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {cs.role} · {cs.org} · {cs.period}
        </p>
        <p className="mt-6 text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {cs.summary}
        </p>
        {cs.url && (
          <a
            href={cs.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center text-sm underline hover:text-muted transition-colors"
          >
            Visit the live platform &rarr;
          </a>
        )}
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
          {cs.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-serif text-3xl md:text-4xl">{metric.value}</p>
              <p className="mt-1 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-20 max-w-2xl space-y-14">
        {cs.sections.map((section, i) => (
          <ScrollReveal key={section.heading} delay={i * 80}>
            <section>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                {section.heading}
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed text-muted-light">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
