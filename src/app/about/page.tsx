import type { Metadata } from "next";
import Link from "next/link";
import { currentRoles, pastRoles, education, certifications } from "@/data/content";
import Reveal from "@/components/Reveal";
import RailHead from "@/components/RailHead";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Product Manager based in Berlin. I write the PRD and ship the code. 5+ years across FinTech, HRTech, EdTech, and marketplace platforms.",
};

const ext =
  "underline underline-offset-2 hover:text-ink transition-colors";

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-5 pt-14 pb-10 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-24 md:pb-14">
          <RailHead index="01" label="About" top />
          <h1 className="font-serif text-4xl leading-[1.06] tracking-[-0.018em] md:col-span-8 md:col-start-3 md:text-6xl">
            The PM who writes the PRD
            <br className="hidden md:block" /> and ships the code.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 pt-12 pb-16 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-18 md:pb-22">
        {/* Bio */}
        <Reveal className="md:col-span-5 md:col-start-3">
          <div className="flex flex-col gap-5 text-[17px] leading-[1.75] text-ink-2">
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
              Codex, and Gemini. The PRD and the pull request often land in the
              same week, both written by me.
            </p>
            <p>
              Right now I lead product at Skilladder AI, where I own strategy
              and OKRs across the product organisation. I built the{" "}
              <a href="https://assessments.skilladder.ai" target="_blank" rel="noopener noreferrer" className={ext}>
                assessment platform
              </a>{" "}
              from zero and grew it to 6 recurring enterprise clients, serving a
              national talent cohort of 85,000+ candidates along the way.
            </p>
            <p>
              The building doesn&apos;t stop at work. I&apos;ve shipped 13 sites
              and apps so far, from WhatsApp-native commerce tools for vehicle
              paper renewals and electricity vending to a cohort-based LMS, a
              logistics platform, and client sites for{" "}
              <a href="https://vrenalaw.com" target="_blank" rel="noopener noreferrer" className={ext}>
                Vrena Law
              </a>
              ,{" "}
              <a href="https://grwtee.com" target="_blank" rel="noopener noreferrer" className={ext}>
                GRWTEE
              </a>
              , and{" "}
              <a href="https://banyanclaims.com" target="_blank" rel="noopener noreferrer" className={ext}>
                Banyan Claims
              </a>
              . My church community at Harvesters International Christian Centre
              takes attendance with{" "}
              <a href="https://attendance.hiccgbagada.com" target="_blank" rel="noopener noreferrer" className={ext}>
                a system I built
              </a>
              .
            </p>
            <Link
              href="/work"
              className="meta mt-1 flex items-center gap-1.5 text-accent"
            >
              See the full list of builds <ArrowRight size={13} />
            </Link>
          </div>
        </Reveal>

        {/* Dossier column */}
        <Reveal delay={120} className="md:col-span-4 md:col-start-9">
          <div className="border-t-2 border-ink">
            <div className="flex flex-col gap-1 border-b border-line py-4">
              <span className="label">Based in</span>
              <p className="text-[15px]">Berlin, Germany</p>
            </div>
            <div className="flex flex-col gap-1 border-b border-line py-4">
              <span className="label">Education</span>
              <p className="text-[15px]">{education.degree}</p>
              <p className="meta">
                {education.school} · {education.period}
              </p>
            </div>
            <div className="flex flex-col gap-3 py-4">
              <span className="label">Certifications</span>
              {certifications.map((cert) => (
                <div key={cert.name} className="flex flex-col gap-0.5">
                  <p className="text-sm leading-snug">{cert.name}</p>
                  <p className="meta">
                    {cert.org} · {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Track record */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 pt-12 pb-6 md:grid-cols-12 md:items-end md:gap-6 md:px-12 md:pt-18">
          <RailHead index="02" label="Track record" />
          <h2 className="font-serif text-3xl leading-tight md:col-span-6 md:text-[46px]">
            Where the work happened.
          </h2>
        </div>
        <div className="mx-auto max-w-[1280px] px-5 pb-16 md:px-12 md:pb-20">
          <div className="h-px bg-line-2" />
          {[...currentRoles, ...pastRoles].map((role, i) => (
            <div
              key={`${role.org}-${role.title}`}
              className="grid grid-cols-1 gap-1 border-b border-line py-5 md:grid-cols-12 md:items-baseline md:gap-6 md:py-6"
            >
              <span className="idx hidden md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl md:col-span-4 md:col-start-2 md:text-[28px]">
                {role.org}
              </h3>
              <p className="text-[15px] text-ink-2 md:col-span-4 md:col-start-6">
                {role.title}
              </p>
              <span
                className={`meta md:col-span-2 md:col-start-11 md:text-right ${
                  i === 0 ? "text-accent" : ""
                }`}
              >
                {role.period}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
