import Link from "next/link";
import { siteConfig, stats, toolGroups } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="max-w-[1120px] mx-auto px-6">
      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-20">
        <ScrollReveal>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <p className="section-label">
              AI Product Manager - Berlin, Germany
            </p>
            <span className="meta inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {siteConfig.availability}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl">
            I write the PRD.{" "}
            <span className="italic">I ship the code.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-8 text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            AI Product Manager with 5+ years across FinTech, HRTech, EdTech,
            and marketplaces. At Skilladder I took an AI assessment platform
            from prototype to primary product: deployment cut from weeks to 24
            hours, 6 recurring enterprise clients, an 85,000+ candidate
            national cohort. Alongside, 13 live products built end to end with
            Next.js, React, and AI tooling.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="mt-8 flex flex-col gap-3">
            {toolGroups.map((group) => (
              <div key={group.label} className="flex flex-wrap items-center gap-2">
                <span className="section-label w-24 shrink-0">{group.label}</span>
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="meta rounded-full border border-border bg-card px-3 py-1 text-text"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 rounded-full bg-dark text-bg text-sm font-medium hover:bg-dark/85 transition-colors"
            >
              View my work &darr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-text text-text text-sm font-medium hover:bg-text hover:text-bg transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={400}>
          <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl">{stat.value}</p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Brief about teaser */}
      <section className="py-20 border-t border-border">
        <ScrollReveal>
          <p className="section-label mb-4">About</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-3xl">
            The PM who writes the PRD <span className="italic">and</span> ships the code.
          </h2>
          <p className="mt-6 text-muted max-w-2xl">
            5+ years managing products across FinTech, HRTech, EdTech, and
            marketplace platforms - plus
            hands-on engineering with Next.js, React, and AI-assisted development.
            I bridge the gap between strategy and execution.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center mt-6 text-sm font-medium text-text hover:text-muted transition-colors"
          >
            Read more about me &rarr;
          </Link>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Let&apos;s build something together.
          </h2>
          <p className="mt-4 text-muted max-w-xl">
            Whether you need a product manager for your solution or product or
            just want to talk shop - I&apos;m always open to good conversations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-dark text-bg text-sm font-medium hover:bg-dark/85 transition-colors"
            >
              Send an email &rarr;
            </a>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full border border-text text-text text-sm font-medium hover:bg-text hover:text-bg transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
