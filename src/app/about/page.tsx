import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  currentRoles,
  pastRoles,
  education,
  certifications,
} from "@/data/content";
import { ArrowRight } from "@/components/icons";
import Split from "@/components/motion/Split";
import { enter } from "@/components/motion/order";
export const metadata: Metadata = {
  title: "About",
  description:
    "Ayodeji Eluwande: AI product engineer. From Lagos to Berlin, from product discovery to working software.",
};
export default function AboutPage() {
  return (
    <div>
      <header className="route-heading section-shell">
        <Split as="h1" enter>
          The person
          <br />
          <em>behind the build.</em>
        </Split>
      </header>
      <section className="about-introduction section-shell">
        <div className="about-portrait" data-enter="wipe" style={enter(3)}>
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
          <Split
            as="h2"
            enter
            style={{ "--enter-at": "0.45s" } as React.CSSProperties}
          >
            I write the PRD.
            <br />I ship the code.
          </Split>
          <p data-enter style={enter(6)}>
            My work starts with the unglamorous middle: user interviews,
            roadmaps, sprint planning and getting a room of stakeholders to
            agree on what should ship next.
          </p>
          <p data-enter style={enter(7)}>
            At Tellerpoint, I owned the product role without writing code,
            helping deliver technology for financial institutions, including
            UnionDirect, Union Bank of Nigeria’s agency banking platform.
          </p>
          <p data-enter style={enter(8)}>
            I also build. At Skilladder AI, I lead product strategy and
            operations and work hands-on on the assessment platform. The
            platform has served 32+ enterprise clients, including six recurring
            clients.
          </p>
          <p data-enter style={enter(9)}>
            AI tools have changed how much of an idea I can carry through
            myself. I work with Cursor, Claude Code, Codex and Gemini, alongside
            the engineering decisions that make a product useful after its first
            demo.
          </p>
          <p data-enter style={enter(10)}>
            Outside that work, my builds span WhatsApp commerce, learning,
            logistics, legal services, fashion and community operations.
            Different contexts keep the questions interesting.
          </p>
          <Link
            href="/work"
            className="action-link"
            data-enter
            style={enter(11)}
          >
            Explore the work
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <section className="experience-section section-shell">
        <Split>
          Where I’ve
          <br />
          put it to work.
        </Split>
        <div>
          {[...currentRoles, ...pastRoles].map((role) => (
            <article key={role.org} data-reveal="rise rule-bottom">
              <h3>{role.org}</h3>
              <p>{role.title}</p>
              <span>{role.period}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="background-section section-shell">
        <div>
          <Split>
            Before product,
            <br />
            there was law.
          </Split>
          <p data-reveal="rise">
            {education.degree}
            <br />
            {education.school}
            <br />
            {education.period}
          </p>
          <Link href="/cv" className="action-link" data-reveal="rise">
            View my CV
            <ArrowRight size={18} />
          </Link>
        </div>
        <div>
          <h3 data-reveal="rise">Continued learning</h3>
          {certifications.map((c) => (
            <article key={c.name} data-reveal="rise rule-bottom">
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
