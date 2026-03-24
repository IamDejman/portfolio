import type { Metadata } from "next";
import { currentRoles, education, certifications } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product Manager and builder based in Berlin. I manage products and build them too — shipping across fintech, EdTech, and SaaS.",
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
              I&apos;m Ayodeji Eluwande — a product manager and builder based in
              Berlin, Germany with roots in Lagos, Nigeria. I have 5+ years of
              experience shipping products across fintech, EdTech, and SaaS, with
              a proven track record of delivering measurable results.
            </p>
            <p>
              What sets me apart: I don&apos;t just manage products — I build
              them. I&apos;ve shipped production websites and platforms using
              Next.js, React, Tailwind CSS, and PostgreSQL, leveraging AI tools
              like Cursor and Claude Code as force multipliers. I write PRDs and
              push code in the same week.
            </p>
            <p>
              Currently, I&apos;m Product Lead at Skilladder AI, where I built
              the assessment platform (assessments.skilladder.com) and lead
              product strategy. I&apos;m also Product Manager at Tellerpoint,
              shipping agency banking products for financial institutions.
            </p>
            <p>
              On the side, I&apos;ve built and shipped live platforms for clients
              including vrenalaw.com, grwtee.com, and banyanclaims.com — plus
              a church attendance system for my community at Harvesters
              International Christian Centre.
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
