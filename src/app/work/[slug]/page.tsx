import ProjectLogo from "@/components/ProjectLogo";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, builtProjects, siteConfig } from "@/data/content";
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
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();
  const image = builtProjects.find((p) => p.caseStudy === slug)?.image;
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
      {slug === "skilladder" && (
        <>
          <AssessmentWalkthrough showCaseLink={false} />
          <LiveGrader />
        </>
      )}
      {slug === "onboarding-engine" && <OnboardingWalkthrough />}
      {slug === "orderflow" && <CommerceWalkthrough />}
      <div className="case-story section-shell" id="project-story">
        <nav aria-label="Case study sections" data-reveal="stagger">
          {cs.sections.map((section) => (
            <a
              key={section.heading}
              href={`#${section.heading.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {section.heading}
            </a>
          ))}
        </nav>
        <div className="case-prose">
          {cs.sections.map((section) => (
            <section
              key={section.heading}
              id={section.heading.toLowerCase().replace(/\s+/g, "-")}
              data-reveal="rise"
            >
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}
          {slug === "skilladder" && (
            <div className="confirmed-outcome" data-reveal="wipe">
              <h3>From a platform to a business.</h3>
              <p>
                32+ enterprise clients, including six recurring clients.
              </p>
              <span>
                Business outcomes confirmed by Ayodeji, October 2026.
              </span>
            </div>
          )}
        </div>
      </div>
      {cs.system && <SystemMap system={cs.system} />}
      {image && (
        <figure className="product-capture section-shell" data-reveal="image">
          <Image
            src={image}
            alt={`${cs.title} product interface`}
            width={1600}
            height={1000}
            sizes="(max-width: 1280px) 90vw, 1152px"
          />
          <figcaption>
            A view of the product interface. The interactive examples above are
            explanatory illustrations.
          </figcaption>
        </figure>
      )}
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
