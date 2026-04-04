import Link from "next/link";
import { siteConfig, stats } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="max-w-[1120px] mx-auto px-6">
      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-20">
        <ScrollReveal>
          <p className="section-label mb-6">
            Product Manager &amp; Builder - Berlin, Germany
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl">
            I manage products.{" "}
            <span className="italic">I build them too.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="mt-8 text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            Product manager with 5+ years shipping across fintech, EdTech, and
            SaaS. I also build - I&apos;ve shipped production websites and platforms
            using Next.js, React, and AI-assisted development. Based in Berlin.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 rounded-full bg-dark text-white text-sm font-medium hover:bg-dark/85 transition-colors"
            >
              View my work &darr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-text text-text text-sm font-medium hover:bg-text hover:text-white transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={400}>
          <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
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
            5+ years managing products across fintech, EdTech, and SaaS - plus
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
              className="inline-flex items-center px-6 py-3 rounded-full bg-dark text-white text-sm font-medium hover:bg-dark/85 transition-colors"
            >
              Send an email &rarr;
            </a>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full border border-text text-text text-sm font-medium hover:bg-text hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
