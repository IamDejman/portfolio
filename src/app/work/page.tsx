import type { Metadata } from "next";
import { projects, builtProjects } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products I've managed and platforms I've built — fintech, EdTech, SaaS, and more.",
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
          AI-assisted development tools like Cursor and Claude Code.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {builtProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 80}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card rounded-2xl p-8 border border-border hover:border-text/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-serif text-xl md:text-2xl group-hover:text-muted transition-colors">
                  {project.title}
                </h2>
                <span className="shrink-0 text-xs opacity-0 group-hover:opacity-100 transition-opacity text-muted">
                  Visit &rarr;
                </span>
              </div>

              <p className="text-[15px] text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium text-muted bg-bg px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-medium text-text bg-bg px-2.5 py-1 rounded-full border border-border">
                  {project.highlight}
                </span>
              </div>
            </a>
          </ScrollReveal>
        ))}
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
                  <span className="shrink-0 text-xs font-medium bg-card text-text px-3 py-1.5 rounded-full border border-border">
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
                      className="text-xs text-muted px-2.5 py-1 rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
