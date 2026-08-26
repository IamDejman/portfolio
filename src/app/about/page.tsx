import type { Metadata } from "next";
import Link from "next/link";
import { currentRoles, education, certifications } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Product Manager based in Berlin. I write the PRD and ship the code - 5+ years across FinTech, HRTech, EdTech, and marketplace platforms.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      <PageHeader
        label="About"
        heading="The PM who writes the PRD and ships the code."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-16">
        {/* Bio */}
        <ScrollReveal>
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>
              I&apos;m Ayodeji Eluwande, a product manager who builds. Berlin is
              home now, Lagos is where I&apos;m from. For the past five years
              I&apos;ve shipped products in FinTech, HRTech, EdTech, and
              marketplace platforms.
            </p>
            <p>
              My day job has always been the unglamorous middle of product
              work. User interviews, roadmaps, sprint planning, and getting a
              room of stakeholders to agree on what ships next. At Tellerpoint I
              owned the full product role with no code involved, shipping
              technology for financial institutions including UnionDirect, the
              agency banking platform for Union Bank of Nigeria.
            </p>
            <p>
              What makes me unusual is that I also build. I&apos;ve shipped
              production platforms with Next.js, React, Tailwind CSS, and
              PostgreSQL, working alongside AI tools like Cursor, Claude Code,
              Lovable, and Replit. The PRD and the pull request often land in
              the same week, both written by me.
            </p>
            <p>
              Right now I lead product at Skilladder AI, where I own strategy
              and OKRs across the product organisation. I built
              the <a href="https://assessments.skilladder.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted transition-colors">assessment platform</a> from
              zero and grew it to 6 recurring enterprise clients, serving a
              national talent cohort of 85,000+ candidates along the way.
            </p>
            <p>
              The building doesn&apos;t stop at work. I&apos;ve shipped 13 sites
              and apps so far, from WhatsApp-native commerce tools for vehicle
              paper renewals and electricity vending to a cohort-based LMS, a
              logistics platform, and client sites
              for <a href="https://vrenalaw.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted transition-colors">Vrena Law</a>, <a href="https://grwtee.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted transition-colors">GRWTEE</a>, and <a href="https://banyanclaims.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted transition-colors">Banyan Claims</a>.
              My church community at Harvesters International Christian Centre
              takes attendance
              with <a href="https://attendance.hiccgbagada.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted transition-colors">a system I built</a>.
              The full list lives on the <Link href="/work" className="underline hover:text-muted transition-colors">work page</Link>.
            </p>
          </div>
        </ScrollReveal>

        {/* Sidebar */}
        <div className="space-y-6">
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
                <p className="text-sm text-muted">From Lagos 🇳🇬</p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="section-label mb-3">Education</p>
                <p className="text-sm font-medium">{education.degree}</p>
                <p className="text-sm text-muted">{education.school}</p>
                <p className="text-xs text-muted mt-1">{education.period}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="bg-card rounded-2xl p-8">
              <p className="section-label mb-4">Certifications</p>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name}>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted">
                      {cert.org} · {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
