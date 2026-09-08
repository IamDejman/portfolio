import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  currentRoles,
  pastRoles,
  education,
  certifications,
  siteConfig,
} from "@/data/content";
import { ArrowRight } from "@/components/icons";
export const metadata: Metadata = {
  title: "About",
  description:
    "Ayodeji Eluwande: AI product manager and builder. From Lagos to Berlin, from product discovery to working software.",
};
export default function AboutPage() {
  return (
    <div>
      <header className="route-heading section-shell">
        <h1>
          The person
          <br />
          <em>behind the build.</em>
        </h1>
        <p>
          I’m Ayodeji Eluwande. Berlin is home now. Lagos is where I’m from. The
          space between a difficult question and a useful product is where I do
          my best work.
        </p>
      </header>
      <section className="about-introduction section-shell">
        <div className="about-portrait">
          <Image
            src="/ayodeji.jpg"
            alt="Ayodeji Eluwande"
            width={800}
            height={1000}
            sizes="(max-width:700px) 88vw, 40vw"
            priority
          />
          <span>Ayodeji Eluwande / Berlin</span>
        </div>
        <div className="about-prose">
          <h2>
            I write the PRD.
            <br />I ship the code.
          </h2>
          <p>
            My work starts with the unglamorous middle: user interviews,
            roadmaps, sprint planning and getting a room of stakeholders to
            agree on what should ship next.
          </p>
          <p>
            At Tellerpoint, I owned the product role without writing code,
            helping deliver technology for financial institutions, including
            UnionDirect, Union Bank of Nigeria’s agency banking platform.
          </p>
          <p>
            I also build. At Skilladder AI, I lead product strategy and
            operations and work hands-on on the assessment platform. The
            platform has served 32 enterprise clients in total, including six
            recurring clients.
          </p>
          <p>
            AI tools have changed how much of an idea I can carry through
            myself. I work with Cursor, Claude Code, Codex and Gemini, alongside
            the engineering decisions that make a product useful after its first
            demo.
          </p>
          <p>
            Outside that work, my builds span WhatsApp commerce, learning,
            logistics, legal services, fashion and community operations.
            Different contexts keep the questions interesting.
          </p>
          <Link href="/work" className="action-link">
            Explore the work
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="experience-section section-shell">
        <h2>
          Where I’ve
          <br />
          put it to work.
        </h2>
        <div>
          {[...currentRoles, ...pastRoles].map((role) => (
            <article key={role.org}>
              <h3>{role.org}</h3>
              <p>{role.title}</p>
              <span>{role.period}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="background-section section-shell">
        <div>
          <h2>
            Before product,
            <br />
            there was law.
          </h2>
          <p>
            {education.degree}
            <br />
            {education.school}
            <br />
            {education.period}
          </p>
          <a href={siteConfig.cv} download className="action-link">
            Download my CV
            <ArrowRight size={18} />
          </a>
        </div>
        <div>
          <h3>Continued learning</h3>
          {certifications.map((c) => (
            <article key={c.name}>
              <p>{c.name}</p>
              <span>
                {c.org} · {c.year}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
