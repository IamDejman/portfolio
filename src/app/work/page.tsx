import type { Metadata } from "next";
import Link from "next/link";
import { projects, builtProjects } from "@/data/content";
import Reveal from "@/components/Reveal";
import RailHead from "@/components/RailHead";
import WorkCard from "@/components/WorkCard";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products I've managed and platforms I've built. FinTech, HRTech, EdTech, marketplaces, and more.",
};

export default function WorkPage() {
  return (
    <div>
      {/* Page head */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-5 pt-14 pb-10 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-24 md:pb-14">
          <RailHead index="01" label="Work" top />
          <div className="flex flex-col gap-5 md:col-span-7 md:col-start-3">
            <h1 className="font-serif text-4xl leading-[1.04] tracking-[-0.018em] md:text-7xl">
              Everything I&apos;ve shipped.
            </h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-ink-2 md:text-xl">
              Twelve products I built end to end and six I managed. Platforms,
              WhatsApp commerce, client sites, and the assessment engine behind
              a national talent cohort.
            </p>
          </div>
        </div>
      </section>

      {/* Built grid */}
      <section>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 pt-12 pb-7 md:grid-cols-12 md:items-end md:gap-6 md:px-12 md:pt-18">
          <RailHead index="02" label="Built by me" />
          <h2 className="font-serif text-3xl leading-tight md:col-span-6 md:text-[46px]">
            Platforms, apps, and client work.
          </h2>
          <span className="meta md:col-span-2 md:col-start-11 md:text-right">
            12 projects
          </span>
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 gap-y-8 px-5 pb-16 md:grid-cols-3 md:px-12 md:pb-22">
          {builtProjects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
              <WorkCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Managed ledger */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 pt-12 pb-7 md:grid-cols-12 md:items-end md:gap-6 md:px-12 md:pt-20">
          <RailHead index="03" label="Product management" />
          <h2 className="font-serif text-3xl leading-tight md:col-span-6 md:text-[46px]">
            Products I&apos;ve managed.
          </h2>
          <span className="meta md:col-span-2 md:col-start-11 md:text-right">
            6 products
          </span>
        </div>
        <div className="mx-auto max-w-[1280px] px-5 pb-16 md:px-12 md:pb-22">
          <div className="h-px bg-line-2" />
          {projects.map((project, i) => (
            <Reveal key={project.title}>
              <article className="grid grid-cols-1 gap-4 border-b border-line py-7 md:grid-cols-12 md:items-start md:gap-6">
                <span className="idx hidden pt-2 md:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5 md:col-span-4 md:col-start-2">
                  <h3 className="font-serif text-2xl md:text-[28px]">
                    {project.title}
                  </h3>
                  <p className="meta">
                    {project.client} · {project.role}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink-3 md:col-span-4 md:col-start-6">
                  {project.description}
                </p>
                <div className="flex flex-row items-center gap-3 md:col-span-3 md:col-start-10 md:flex-col md:items-end md:text-right">
                  <span className="chip chip-acc chip-wrap">
                    {project.highlight}
                  </span>
                  {project.caseStudy && (
                    <Link
                      href={`/work/${project.caseStudy}`}
                      className="meta flex items-center gap-1.5 text-accent"
                    >
                      Case study <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
