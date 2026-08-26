import type { Metadata } from "next";
import Link from "next/link";
import { projects, builtProjects, howIWork, toolGroups } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products I've managed and platforms I've built - FinTech, HRTech, EdTech, marketplaces, and more.",
};

export default function WorkPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      {/* Built Projects */}
      <PageHeader
        label="Built by Me"
        heading="Platforms I've shipped."
      />

      <ScrollReveal>
        <p className="mt-4 text-[15px] text-muted max-w-2xl leading-relaxed">
          Live websites and applications I&apos;ve built using Next.js, React, and
          AI tools like Cursor, Claude Code, Lovable, and Replit.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {builtProjects.map((project, i) => {
          const cardClass =
            "card-lift group block h-full bg-card rounded-2xl p-8 border border-border";
          const inner = (
            <>
              {project.image && (
                <div className="mb-6 -mt-2 overflow-hidden rounded-xl border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-serif text-xl md:text-2xl group-hover:text-muted transition-colors">
                  {project.title}
                </h2>
                {project.url && (
                  <span className="shrink-0 text-xs opacity-0 group-hover:opacity-100 transition-opacity text-muted">
                    Visit &rarr;
                  </span>
                )}
              </div>

              <p className="text-[15px] text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="meta text-[11px] text-muted bg-bg px-2 py-0.5 rounded-full border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="meta text-[11px] text-accent bg-accent-soft px-2.5 py-1 rounded-full border border-accent/30">
                  {project.highlight}
                </span>
              </div>
            </>
          );

          return (
            <ScrollReveal
              key={project.title}
              delay={i * 80}
              className={project.flagship ? "md:col-span-2" : ""}
            >
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              ) : (
                <div className={cardClass}>{inner}</div>
              )}
            </ScrollReveal>
          );
        })}
      </div>

      {/* Product Management Work */}
      <div className="mt-24">
        <ScrollReveal>
          <p className="section-label mb-4">Product Management</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Products I&apos;ve managed.
          </h2>
        </ScrollReveal>

        <div className="mt-12 project-list">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <article className="project-item py-10 border-b border-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="font-serif text-2xl md:text-3xl">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-sm text-muted">
                      {project.client} · {project.role}
                    </p>
                  </div>
                  <span className="meta shrink-0 text-xs bg-card text-text px-3 py-1.5 rounded-full border border-border">
                    {project.highlight}
                  </span>
                </div>

                <p className="mt-4 text-[15px] text-muted-light leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="meta text-xs text-muted px-2.5 py-1 rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.caseStudy && (
                  <Link
                    href={`/work/${project.caseStudy}`}
                    className="mt-5 inline-flex items-center text-sm font-medium underline hover:text-muted transition-colors"
                  >
                    Read the case study &rarr;
                  </Link>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* How I build */}
      <div className="mt-24">
        <ScrollReveal>
          <p className="section-label mb-4">How I build</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            PRD to production, one person.
          </h2>
          <p className="mt-6 text-muted max-w-3xl leading-relaxed">{howIWork}</p>
          <div className="mt-8 flex flex-col gap-3">
            {toolGroups.map((group) => (
              <div key={group.label} className="flex flex-wrap items-center gap-2">
                <span className="section-label w-24 shrink-0">{group.label}</span>
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="meta rounded-full border border-border bg-card px-3 py-1 text-text"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
