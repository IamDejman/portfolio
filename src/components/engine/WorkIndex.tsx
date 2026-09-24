"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { builtProjects, projects } from "@/data/content";
import { ArrowRight } from "@/components/icons";
const categories = ["All work", "Built", "Product leadership"] as const;
export default function WorkIndex() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All work");
  const builds = filter !== "Product leadership";
  const managed = filter !== "Built";
  return (
    <section
      className="work-index section-shell"
      aria-labelledby="index-heading"
    >
      <div className="index-heading">
        <h2 id="index-heading">The wider collection.</h2>
        <div className="index-filters" aria-label="Filter work">
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
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
      <div className="work-index-list">
        {builds &&
          builtProjects
            // Skilladder also appears under product leadership; list it once.
            .filter((p) => !(managed && p.caseStudy === "skilladder"))
            .map((p) => (
              <article key={p.title}>
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
          projects.map((p) => (
            <article key={p.title}>
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
