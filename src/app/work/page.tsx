import ProjectLogo from "@/components/ProjectLogo";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WorkIndex from "@/components/engine/WorkIndex";
import { ArrowRight } from "@/components/icons";
import { builtProjects, caseStudies, earlierRoles } from "@/data/content";
import Split from "@/components/motion/Split";
import { enter } from "@/components/motion/order";
export const metadata: Metadata = {
  title: "Work",
  description:
    "Products built by Ayodeji Eluwande, from an AI assessment platform to WhatsApp commerce and an iOS app, followed by case studies and earlier product roles.",
};
// The two engineering case studies lead; the other products follow as cards.
const products = builtProjects.filter((p) => p.featured && !p.caseStudy);
const studies = caseStudies.filter((cs) =>
  ["onboarding-engine", "tellerpoint"].includes(cs.slug),
);
export default function WorkPage() {
  return (
    <div>
      <header className="route-heading section-shell">
        <Split as="h1" enter>
          Ideas,
          <br />
          <em>made real.</em>
        </Split>
        <p data-enter style={enter(3)}>
          Sometimes the work is a product strategy. Sometimes it’s the system
          itself. Here’s what happens when I connect the two.
        </p>
      </header>
      <section className="work-leads section-shell" aria-labelledby="built-title">
        <Split
          id="built-title"
          className="work-group-title"
          enter
          style={{ "--enter-at": "0.4s" } as CSSProperties}
        >
          Products I built.
        </Split>
        <Link
          href="/work/skilladder"
          className="work-lead lead-assess"
          data-enter="wipe"
          style={enter(4)}
        >
          <div>
            <h3><ProjectLogo project="skilladder" dark travel="from" /></h3>
            <p>Primary engineer on an AI assessment platform.</p>
          </div>
          <span>
            Engineering case study
            <ArrowRight size={30} />
          </span>
          <div className="lead-mechanism" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </Link>
        <Link
          href="/work/orderflow"
          className="work-lead lead-commerce"
          data-reveal="wipe"
        >
          <div>
            <h3><ProjectLogo project="orderflow" dark={false} travel="from" /></h3>
            <p>Sole engineer on Kotlin and Spring Boot.</p>
          </div>
          <span>
            Engineering case study
            <ArrowRight size={30} />
          </span>
          <div className="lead-mechanism" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </Link>
        <div className="work-products">
          {products.map((p) => (
            <article key={p.title} data-reveal="rise rule">
              {p.image && (
                <Image
                  src={p.image}
                  alt=""
                  width={1200}
                  height={750}
                  sizes="(max-width: 1000px) 90vw, 30vw"
                />
              )}
              <h3>{p.title}</h3>
              <span>{p.highlight}</span>
              <p>{p.description}</p>
              <span>{p.tech.join(" / ")}</span>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="visit-project"
                  data-track-label={p.title}
                  aria-label={`Visit ${p.title}`}
                >
                  Visit
                  <ArrowRight size={17} />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
      <section className="work-studies section-shell" aria-labelledby="studies-title">
        <Split id="studies-title" className="work-group-title">
          More case studies.
        </Split>
        <div className="work-leads-more" data-reveal="stagger">
          {studies.map((cs) => (
            <Link key={cs.slug} href={`/work/${cs.slug}`}>
              <h3>{cs.title}</h3>
              <p>{cs.summary}</p>
              <span>
                {cs.slug === "tellerpoint"
                  ? "Product delivery case study"
                  : "Agent workflow prototype"}
                <ArrowRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section
        className="earlier-roles section-shell"
        id="earlier-roles"
        aria-labelledby="roles-title"
      >
        <Split id="roles-title" className="work-group-title">
          Earlier product roles.
        </Split>
        <ul>
          {earlierRoles.map((role) => (
            <li key={role.name} data-reveal="rise rule">
              <h3>{role.name}</h3>
              <span>
                {role.role} · {role.org} · {role.period}
              </span>
              <p>{role.summary}</p>
            </li>
          ))}
        </ul>
      </section>
      <WorkIndex />
    </div>
  );
}
