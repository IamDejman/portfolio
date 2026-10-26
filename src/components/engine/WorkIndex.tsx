"use client";
import { useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { builtProjects, projects } from "@/data/content";
import { ArrowRight } from "@/components/icons";
import Split from "@/components/motion/Split";
const categories = ["All work", "Built", "Product leadership"] as const;
export default function WorkIndex() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All work");
  // Rows only replay once a visitor changes the filter.
  const [filtered, setFiltered] = useState(false);
  const builds = filter !== "Product leadership";
  const managed = filter !== "Built";
  return (
    <section
      className="work-index section-shell"
      aria-labelledby="index-heading"
    >
      <div className="index-heading">
        <Split id="index-heading">The wider collection.</Split>
        <div className="index-filters" aria-label="Filter work" data-reveal="rise">
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              aria-pressed={filter === c}
              onClick={() => {
                setFilter(c);
                setFiltered(true);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <p className="index-note" aria-live="polite">
        {filter === "All work"
          ? "Builds and product leadership contributions."
          : filter === "Built"
            ? "Platforms, client work and independent experiments."
            : "Product strategy, discovery and delivery across teams."}
      </p>
      <div
        className="work-index-list"
        key={filter}
        data-filtered={filtered || undefined}
      >
        {builds &&
          builtProjects
            // Skilladder also appears under product leadership; list it once.
            .filter((p) => !(managed && p.caseStudy === "skilladder"))
            .map((p, i) => (
              <article
                key={p.title}
                data-reveal="rise rule"
                style={{ "--row": i } as CSSProperties}
              >
                <div className="index-project-name">
                  <h3>{p.title}</h3>
                  <span>{p.highlight}</span>
                  {p.image && (
                    <Image
                      className="index-thumb"
                      src={p.image}
                      alt=""
                      width={480}
                      height={300}
                      sizes="(max-width: 700px) 88vw, 240px"
                    />
                  )}
                </div>
                <p>{p.description}</p>
                <div className="index-project-tools">
                  <span>{p.tech.slice(0, 3).join(" / ")}</span>
                  {p.caseStudy ? (
                    <Link href={`/work/${p.caseStudy}`}>
                      Case study
                      <ArrowRight size={17} />
                    </Link>
                  ) : p.url && (
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
                </div>
              </article>
            ))}
        {managed &&
          projects.map((p, i) => (
            <article
              key={p.title}
              data-reveal="rise rule"
              style={{ "--row": i } as CSSProperties}
            >
              <div className="index-project-name">
                <h3>{p.title}</h3>
                <span>
                  {p.role} · {p.client}
                </span>
              </div>
              <p>{p.description}</p>
              <div className="index-project-tools">
                <span>Product leadership</span>
                {p.caseStudy && (
                  <Link href={`/work/${p.caseStudy}`}>
                    Case study
                    <ArrowRight size={17} />
                  </Link>
                )}
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
