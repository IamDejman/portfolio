import type { Metadata } from "next";
import { siteConfig, openTo } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch - open to PM roles, consulting, and partnerships.",
};

export default function ContactPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      <ScrollReveal>
        <div className="pt-32 pb-16">
          <p className="section-label mb-4">Contact</p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] gap-12 md:gap-16">
        <ScrollReveal>
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Let&apos;s build something together.
            </h1>
            <p className="mt-6 text-muted text-[15px] leading-relaxed max-w-lg">
              Whether you need a product manager for your solution or product
              or just want to talk shop - I&apos;m always open to good conversations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center px-6 py-3 rounded-full bg-dark text-white text-sm font-medium hover:bg-dark/85 transition-colors"
              >
                Send an email &rarr;
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full border border-text text-text text-sm font-medium hover:bg-text hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.cv}
                download
                className="inline-flex items-center px-6 py-3 rounded-full border border-text text-text text-sm font-medium hover:bg-text hover:text-white transition-colors"
              >
                Download CV &darr;
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="bg-dark text-white rounded-2xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-6">
              Open to
            </p>
            <ul className="space-y-4">
              {openTo.map((item) => (
                <li
                  key={item}
                  className="text-[15px] leading-snug text-white/85 flex items-start gap-3"
                >
                  <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
