import type { Metadata } from "next";
import { skills, howIWork } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Product management, technical, domain, and commercial capabilities.",
};

export default function SkillsPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      <PageHeader label="Capabilities" heading="What I bring to the table." />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {Object.entries(skills).map(([category, items], i) => (
          <ScrollReveal key={category} delay={i * 100}>
            <div>
              <h3 className="font-serif text-lg mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted leading-snug"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400}>
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-10 border border-border">
          <p className="section-label mb-3">How I work</p>
          <p className="text-[15px] leading-relaxed max-w-3xl">{howIWork}</p>
        </div>
      </ScrollReveal>
    </div>
  );
}
