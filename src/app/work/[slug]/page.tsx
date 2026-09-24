import ProjectLogo from "@/components/ProjectLogo";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, builtProjects, siteConfig } from "@/data/content";
import AssessmentWalkthrough from "@/components/engine/AssessmentWalkthrough";
import OnboardingWalkthrough from "@/components/engine/OnboardingWalkthrough";
import CommerceWalkthrough from "@/components/engine/CommerceWalkthrough";
import { ArrowRight } from "@/components/icons";
import CopyEmail from "@/components/CopyEmail";
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
      <div className="case-back section-shell">
        <Link href="/work">
          <ArrowRight size={16} />
          All work
        </Link>
      </div>
      <header className="case-heading section-shell">
        {(slug === "skilladder" || slug === "orderflow") && <div className="case-brand"><ProjectLogo project={slug} /></div>}
        <h1>{cs.title}</h1>
        <div className="case-introduction">
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
        <div className="case-actions">
          <a href="#project-story" className="action-link">
            Read the story
            <ArrowRight size={18} />
          </a>
          {cs.url && (
            <a href={cs.url} target="_blank" rel="noopener noreferrer">
              Visit the platform
              <ArrowRight size={17} />
            </a>
          )}
        </div>
      </header>
      {cs.metrics.length > 0 && (
        <section className="case-metrics section-shell" aria-label="Key figures">
          <dl>
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      {slug === "skilladder" && <AssessmentWalkthrough showCaseLink={false} />}
      {slug === "onboarding-engine" && <OnboardingWalkthrough />}
      {slug === "orderflow" && <CommerceWalkthrough />}
      <div className="case-story section-shell" id="project-story">
        <nav aria-label="Case study sections">
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
            >
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </section>
          ))}
          {slug === "skilladder" && (
            <div className="confirmed-outcome">
              <h3>From a platform to a business.</h3>
              <p>
                32 enterprise clients in total, including six recurring clients.
              </p>
              <span>
                Business outcomes confirmed by Ayodeji, September 2026.
              </span>
            </div>
          )}
        </div>
      </div>
      {image && (
        <figure className="product-capture section-shell">
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
        <div>
          <p>Keep exploring</p>
          <Link href={`/work/${next.slug}`}>
            {next.title}
            <ArrowRight size={35} />
          </Link>
        </div>
        <p className="case-contact">
          <a href={`mailto:${siteConfig.email}`}>
            Talk about the work
            <ArrowRight size={17} />
          </a>
          <CopyEmail />
        </p>
      </section>
    </article>
  );
}
