import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  currentRoles,
  pastRoles,
  education,
  certifications,
  testimonials,
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
            I build AI products from the first conversation to production. At
            Skilladder AI, I lead product and I am the primary engineer on the
            assessment platform, from AI grading and retrieval to the client API
            and the operations around them. It has served 32+ enterprise
            clients, including six recurring clients.
          </p>
          <p data-enter style={enter(7)}>
            On my own, I built Orderflow, a WhatsApp commerce platform with live
            payments, ledger-based settlement and a fleet of receipt printers
            and scanners. It went from first commit to daily production traffic
            in under five months.
          </p>
          <p data-enter style={enter(8)}>
            Product is where I started, and it is still part of every week.
            User interviews, roadmaps, sprint planning and getting a room of
            stakeholders to agree on what ships next. At Tellerpoint, I owned
            product delivery for UnionDirect, Union Bank of Nigeria’s agency
            banking platform, without writing code.
          </p>
          <p data-enter style={enter(9)}>
            That mix is the point. I can decide what is worth building and then
            build it, working with Claude Code, Cursor, Codex and Gemini
            alongside the engineering decisions that keep a product useful after
            its first demo.
          </p>
          <p data-enter style={enter(10)}>
            Outside that work, my builds span learning, logistics, legal
            services, fashion and community operations. Different contexts keep
            the questions interesting.
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
      {testimonials.length > 0 && (
        <section
          className="testimonials section-shell"
          aria-labelledby="testimonials-title"
        >
          <Split id="testimonials-title">
            In their
            <br />
            words.
          </Split>
          <div>
            {testimonials.map((t) => (
              <figure key={t.name} data-reveal="rise rule">
                <blockquote>
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
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
          <Link
            href="/cv"
            className="action-link"
            data-reveal="rise"
            data-track="cv"
          >
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
