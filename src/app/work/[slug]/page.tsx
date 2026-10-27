import ProjectLogo from "@/components/ProjectLogo";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  caseStudies,
  builtProjects,
  siteConfig,
  type CaseStudy,
} from "@/data/content";
import AssessmentWalkthrough from "@/components/engine/AssessmentWalkthrough";
import OnboardingWalkthrough from "@/components/engine/OnboardingWalkthrough";
import CommerceWalkthrough from "@/components/engine/CommerceWalkthrough";
import SystemMap from "@/components/engine/SystemMap";
import LiveGrader from "@/components/engine/LiveGrader";
import { ArrowRight } from "@/components/icons";
import CopyEmail from "@/components/CopyEmail";
import Split from "@/components/motion/Split";
import CountUp from "@/components/motion/CountUp";
import { enter } from "@/components/motion/order";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return cs ? { title: `${cs.title} Case Study`, description: cs.summary } : {};
}

type Part = { id: string; heading: string; body: ReactNode };

// Every case study tells its story in the same order. A part is left out
// only when there is nothing true to put in it.
function story(cs: CaseStudy, image?: string): Part[] {
  const paragraphs = (list: string[]) =>
    list.map((p) => <p key={p.slice(0, 40)}>{p}</p>);
  const parts: (Part | false | undefined)[] = [
    { id: "problem", heading: "The problem", body: paragraphs(cs.problem) },
    {
      id: "built",
      heading: cs.builtHeading ?? "What I built",
      body: paragraphs(cs.built),
    },
    cs.stack && {
      id: "stack",
      heading: "The stack",
      body: (
        <ul className="case-stack">
          {cs.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    cs.challenge && {
      id: cs.challenge.kind === "bug" ? "hard-bug" : "tradeoff",
      heading: cs.challenge.kind === "bug" ? "The hard bug" : "The tradeoff",
      body: (
        <div className="case-challenge">
          <h3>{cs.challenge.title}</h3>
          {paragraphs(cs.challenge.paragraphs)}
        </div>
      ),
    },
    {
      id: "result",
      heading: "The result",
      body: (
        <>
          {paragraphs(cs.result)}
          {cs.slug === "skilladder" && (
            <div className="confirmed-outcome">
              <h3>From a platform to a business.</h3>
              <p>32+ enterprise clients, including six recurring clients.</p>
              <span>Business outcomes confirmed by Ayodeji, October 2026.</span>
            </div>
          )}
        </>
      ),
    },
    Boolean(cs.recording || image || cs.repo || cs.url) && {
      id: "see-it",
      heading: "See it",
      body: (
        <>
          {cs.recording ? (
            <video
              className="case-recording"
              src={cs.recording}
              controls
              muted
              playsInline
              preload="metadata"
              aria-label={`Screen recording of ${cs.title}`}
            />
          ) : (
            image && (
              <figure className="case-capture">
                <Image
                  src={image}
                  alt={`${cs.title} product interface`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 1000px) 90vw, 650px"
                />
              </figure>
            )
          )}
          <p className="case-links">
            {cs.url && (
              <a
                href={cs.url}
                target="_blank"
                rel="noopener noreferrer"
                data-track="visit-project"
                data-track-label={cs.title}
              >
                Visit the platform
                <ArrowRight size={17} />
              </a>
            )}
            {cs.repo && (
              <a
                href={cs.repo}
                target="_blank"
                rel="noopener noreferrer"
                data-track="visit-repo"
                data-track-label={cs.title}
              >
                Read the source
                <ArrowRight size={17} />
              </a>
            )}
          </p>
        </>
      ),
    },
  ];
  return parts.filter((part): part is Part => Boolean(part));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();
  const image = builtProjects.find((p) => p.caseStudy === slug)?.image;
  const parts = story(cs, image);
  const next =
    caseStudies[
      (caseStudies.findIndex((c) => c.slug === slug) + 1) % caseStudies.length
    ];
  return (
    <article className={`case-study case-${slug}`}>
      <div className="reading-progress" aria-hidden="true" />
      <div className="case-back section-shell">
        <Link href="/work" data-enter style={enter(0)}>
          <ArrowRight size={16} />
          All work
        </Link>
      </div>
      <header className="case-heading section-shell">
        {(slug === "skilladder" || slug === "orderflow") && <div className="case-brand"><ProjectLogo project={slug} travel="to" /></div>}
        <Split as="h1" enter>
          {cs.title}
        </Split>
        <div className="case-introduction" data-enter style={enter(4)}>
          <p>{cs.summary}</p>
          <dl>
            <div>
              <dt>Contribution</dt>
              <dd>{cs.role}</dd>
            </div>
            <div>
              <dt>Organisation</dt>
              <dd>{cs.org}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{cs.period}</dd>
            </div>
          </dl>
        </div>
        <div className="case-actions" data-enter style={enter(5)}>
          <a href="#project-story" className="action-link">
            Read the story
            <ArrowRight size={18} />
          </a>
          {cs.url && (
            <a
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              data-track="visit-project"
              data-track-label={cs.title}
            >
              Visit the platform
              <ArrowRight size={17} />
            </a>
          )}
        </div>
      </header>
      {cs.metrics.length > 0 && (
        <section className="case-metrics section-shell" aria-label="Key figures">
          <dl>
            {cs.metrics.map((m, i) => (
              <div key={m.label} data-enter style={enter(6 + i)}>
                <dt>{m.label}</dt>
                <dd>
                  <CountUp value={m.value} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      <div className="case-story section-shell" id="project-story">
        <nav aria-label="Case study sections" data-reveal="stagger">
          {parts.map((part) => (
            <a key={part.id} href={`#${part.id}`}>
              {part.heading}
            </a>
          ))}
        </nav>
        <div className="case-prose">
          {parts.map((part, i) => (
            <section key={part.id} id={part.id} data-reveal="rise">
              <h2>
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                {part.heading}
              </h2>
              {part.body}
            </section>
          ))}
        </div>
      </div>
      {cs.system && <SystemMap system={cs.system} />}
      {slug === "skilladder" && (
        <>
          <AssessmentWalkthrough showCaseLink={false} />
          <LiveGrader />
        </>
      )}
      {slug === "onboarding-engine" && <OnboardingWalkthrough />}
      {slug === "orderflow" && <CommerceWalkthrough />}
      <section className="case-next section-shell">
        <div data-reveal="rise">
          <p>Keep exploring</p>
          <Link href={`/work/${next.slug}`}>
            {next.title}
            <ArrowRight size={35} />
          </Link>
        </div>
        <p className="case-contact" data-reveal="rise">
          <a href={`mailto:${siteConfig.email}`} data-track="email">
            Talk about the work
            <ArrowRight size={17} />
          </a>
          <CopyEmail />
        </p>
      </section>
    </article>
  );
}
