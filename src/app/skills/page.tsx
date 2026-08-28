import type { Metadata } from "next";
import { skills, howIWork, toolGroups } from "@/data/content";
import Reveal from "@/components/Reveal";
import RailHead from "@/components/RailHead";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Product management, technical, domain, and commercial capabilities.",
};

export default function SkillsPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-5 pt-14 pb-10 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-24 md:pb-14">
          <RailHead index="01" label="Capabilities" top />
          <div className="flex flex-col gap-5 md:col-span-6 md:col-start-3">
            <h1 className="font-serif text-4xl leading-[1.04] tracking-[-0.018em] md:text-7xl">
              What I bring.
            </h1>
            <p className="max-w-[520px] text-lg leading-relaxed text-ink-2 md:text-xl">
              Four groups, and the overlap between them is the point. I can sit
              with engineers, hold the room with execs, and ship the MVP myself
              if needed.
            </p>
          </div>
        </div>
      </section>

      {/* Four columns */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 pt-12 pb-14 sm:grid-cols-2 md:px-12 md:pt-18 md:pb-20 lg:grid-cols-4 lg:gap-6">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 90}>
            <div className="flex flex-col gap-3 border-t-2 border-ink pt-4">
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-serif text-[26px] leading-snug">{category}</h2>
            </div>
            <ul className="mt-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="border-b border-line py-2.5 text-sm leading-snug text-ink-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      {/* How I work */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-5 py-14 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:py-18">
          <RailHead index="02" label="How I work" top />
          <p className="font-serif text-2xl leading-[1.35] md:col-span-7 md:col-start-3 md:text-[32px]">
            {howIWork}
          </p>
          <div className="flex flex-col gap-1.5 border-l border-line-2 pl-5 md:col-span-2 md:col-start-11">
            <span className="label">In practice</span>
            <p className="text-sm leading-relaxed text-ink-3">
              The PRD and the pull request often land in the same week.
            </p>
          </div>
        </div>
      </section>

      {/* Tooling ledger */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-5 pt-12 pb-16 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-18 md:pb-22">
        <RailHead index="03" label="Tooling" top />
        <div className="md:col-span-10 md:col-start-3">
          {toolGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-3 border-b border-line py-5 md:flex-row md:items-center md:gap-8"
            >
              <h3 className="font-serif text-2xl md:w-52 md:shrink-0">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="chip h-8 px-3.5 text-[12.5px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
