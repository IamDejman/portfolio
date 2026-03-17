import type { Metadata } from "next";
import { currentRoles, education, certifications } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product Manager based in Berlin with experience in product strategy across startups and companies in fintech, EdTech, and more.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      <PageHeader
        label="About"
        heading="Product strategy meets execution — that's where I operate."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-[1fr_0.6fr] gap-16">
        {/* Bio */}
        <ScrollReveal>
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>
              I&apos;m Ayodeji Eluwande — a Product Manager based in Berlin,
              Germany with roots in Lagos, Nigeria. I have experience in product
              strategy and user experiences across startups and companies, with a
              proven track record of delivering measurable results.
            </p>
            <p>
              I&apos;m skilled in product lifecycle management, research, agile
              methodologies, automation tools and cross-functional collaboration.
              I&apos;ve shipped products across fintech, EdTech, waste
              management, logistics, automotive, and healthtech — always focused
              on turning user needs into working software.
            </p>
            <p>
              Currently, I&apos;m Product Lead at Skilladder AI, building the
              future of skills-based hiring across Africa through AI-powered
              talent workflows and verified skills assessments. Previously,
              I&apos;ve led products at Tellerpoint, Devlabs Africa, and Switch
              Recycling.
            </p>
            <p>
              I leverage AI tools pragmatically — including Cursor and Claude
              Code — for product demos, validation, and stakeholder alignment.
              Not as a replacement for thinking, but as an accelerator for
              execution.
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
