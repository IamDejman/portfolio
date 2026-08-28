import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";
import type { BuiltProject } from "@/data/content";

function monogram(title: string): string {
  const words = title.split(/\s+/).filter(Boolean);
  return words.length > 1
    ? (words[0][0] + words[1][0]).toUpperCase()
    : title.slice(0, 2).toUpperCase();
}

/* One card shape for every project: fixed 3:2 tile (screenshot or monogram),
   clamped description, footer pinned to the bottom so the grid stays even. */
export default function WorkCard({ project }: { project: BuiltProject }) {
  const inner = (
    <div className="flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-bg transition-shadow hover:shadow-[0_6px_24px_var(--shadow)]">
      <div className="relative aspect-[3/2] border-b border-line bg-surface">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="tile-type flex h-full items-center justify-center">
            <span className="font-serif text-6xl text-ink-3 opacity-50">
              {monogram(project.title)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-[21px] leading-snug">{project.title}</h3>
          {project.url && <span className="meta shrink-0 text-accent">Live</span>}
        </div>
        <p className="line-clamp-3 text-sm leading-relaxed text-ink-3">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="chip">+{project.tech.length - 3}</span>
          )}
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-line pt-3.5">
          <span className="chip chip-acc">{project.highlight}</span>
          <span className="meta flex items-center gap-1.5 text-accent">
            {project.caseStudy ? "Case study" : project.url ? "Visit" : "More"}{" "}
            <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </div>
  );

  if (project.caseStudy) {
    return (
      <Link href={`/work/${project.caseStudy}`} className="block h-full">
        {inner}
      </Link>
    );
  }
  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return <div className="h-full">{inner}</div>;
}
