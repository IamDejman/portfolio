import type { Metadata } from "next";
import { currentRoles } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product manager based in Berlin with roots in Lagos and Manchester. Building fintech, EdTech, and SaaS across Africa.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      <PageHeader
        label="About"
        heading="The PM who also writes the SQL, drafts the SLA, and ships the sprint."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-16">
        {/* Bio */}
        <ScrollReveal>
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>
              I&apos;m Ayodeji — a product manager based in Berlin, Germany with
              roots in Lagos, Nigeria and Manchester, UK. I work across fintech,
              EdTech, and enterprise SaaS, leading products from zero-to-one and
              scaling them through messy, real-world constraints.
            </p>
            <p>
              My superpower is operating at the intersection of product strategy,
              technical execution, and commercial delivery. I write PRDs and
              database schemas in the same week. I negotiate NDAs in the morning
              and review VAPT findings in the afternoon.
            </p>
            <p>
              Currently, I&apos;m Product Lead at Skilladder AI, an assessment
              platform reshaping how African companies evaluate talent. I&apos;m
              also Product Manager at Tellerpoint (Branchless Innovation
              Limited), building agency banking platforms for institutions like
              Union Bank and MoMo PSB.
            </p>
            <p>
              Outside work, I serve in church leadership at Harvesters Global and
              play too much Fantasy Premier League.
            </p>
          </div>
        </ScrollReveal>

        {/* Sidebar card */}
        <ScrollReveal delay={150}>
          <div className="bg-card rounded-2xl p-8 space-y-8">
            <div>
              <p className="section-label mb-4">Currently</p>
              <div className="space-y-4">
                {currentRoles.map((role) => (
                  <div key={role.org}>
                    <p className="text-sm font-medium">{role.title}</p>
                    <p className="text-sm text-muted">{role.org}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="section-label mb-3">Based in</p>
              <p className="text-sm">Berlin, Germany 🇩🇪</p>
              <p className="text-sm text-muted">
                From Lagos 🇳🇬 &amp; Manchester 🇬🇧
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
