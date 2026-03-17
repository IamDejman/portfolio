import type { Metadata } from "next";
import { projects } from "@/data/content";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products I've shaped — fintech, EdTech, GovTech, and more.",
};

export default function WorkPage() {
  return (
    <div className="max-w-[1120px] mx-auto px-6 pb-20">
      <PageHeader label="Selected Work" heading="Products I've shaped." />

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
  );
}
