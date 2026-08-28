import Link from "next/link";
import Image from "next/image";
import {
  siteConfig,
  stats,
  toolGroups,
  proofCards,
  currentRoles,
  pastRoles,
  builtProjects,
} from "@/data/content";
import Reveal from "@/components/Reveal";
import RailHead from "@/components/RailHead";
import WorkCard from "@/components/WorkCard";
import { ArrowRight } from "@/components/icons";

const heroFacts = [
  {
    label: "Currently",
    line: currentRoles[0].title,
    meta: `${currentRoles[0].org} · ${currentRoles[0].period}`,
  },
  { label: "Based", line: "Berlin, Germany", meta: "" },
  {
    label: "Open to",
    line: "Product Management, AI Operations, Forward Deployed & AI Engineering, Product Engineer",
    meta: "",
  },
];

export default function Home() {
  const featured = builtProjects.filter((p) => p.image).slice(0, 3);

  return (
    <div>
      {/* Hero: content left, dossier right */}
      <section className="dots border-b border-line">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 pt-16 pb-16 md:grid-cols-12 md:gap-6 md:px-12 md:pt-24 md:pb-24">
          <div className="flex flex-col gap-8 md:col-span-8">
            <h1 className="font-serif text-5xl leading-[1.0] tracking-[-0.02em] md:text-7xl md:leading-[0.96] lg:text-[100px] lg:tracking-[-0.028em]">
              Product manager
              <br />
              <span className="italic">who builds.</span>
            </h1>
            <p className="max-w-[600px] text-lg leading-relaxed text-ink-2 md:text-xl">
              Five years of product across FinTech, HRTech, EdTech, and
              marketplaces. At Skilladder I took an AI assessment platform from
              prototype to primary product. Alongside it, twelve live products
              built end to end.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
              <Link href="/work" className="btn btn-primary">
                See the work <ArrowRight />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
              <Image
                src="/ayodeji.jpg"
                alt="Portrait of Ayodeji Eluwande"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover"
                priority
              />
            </div>
            <div className="border-t-2 border-ink pt-4">
              {heroFacts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col gap-1.5 border-b border-line py-4"
                >
                  <span className="label">{f.label}</span>
                  <p className="text-[15px] leading-snug">{f.line}</p>
                  {f.meta && <p className="meta">{f.meta}</p>}
                </div>
              ))}
              <div className="flex flex-col gap-2.5 py-4">
                <span className="label">Working with</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "React", "Supabase", "Kotlin", "Cursor", "Claude Code"].map(
                    (t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-[1280px] grid-cols-3 px-5 md:px-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-1.5 py-7 md:py-11 ${
                i > 0 ? "border-l border-line pl-5 md:pl-11" : ""
              } ${i < 2 ? "pr-5 md:pr-11" : ""}`}
            >
              <span className="font-serif text-4xl md:text-7xl">{stat.value}</span>
              <span className="label text-[9.5px] leading-normal md:text-[11px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* The receipts */}
      <section>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 pt-14 pb-8 md:grid-cols-12 md:items-end md:gap-6 md:px-12 md:pt-24">
          <RailHead index="01" label="The receipts" />
          <h2 className="font-serif text-3xl leading-tight md:col-span-7 md:text-[46px]">
            Numbers I can point at.
          </h2>
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 pb-14 md:grid-cols-12 md:items-stretch md:gap-6 md:px-12 md:pb-24">
          {proofCards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 90}
              className={i === 0 ? "md:col-span-5" : i === 1 ? "md:col-span-4" : "md:col-span-3"}
            >
              <Link
                href={card.href}
                className="flex h-full flex-col gap-3.5 border-t-2 border-ink pt-5"
              >
                <span
                  className={`font-serif ${
                    i === 0 ? "text-6xl md:text-8xl" : i === 1 ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
                  }`}
                >
                  {card.metric}
                </span>
                <h3 className="text-[17px] font-medium leading-snug">
                  {card.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-ink-3">
                  {card.description}
                </p>
                <span className="meta mt-2 flex items-center gap-1.5 text-accent">
                  {card.cta} <ArrowRight size={13} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Selected builds */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 pt-12 pb-8 md:grid-cols-12 md:items-end md:gap-6 md:px-12 md:pt-20">
          <RailHead index="02" label="Selected builds" />
          <h2 className="font-serif text-3xl leading-tight md:col-span-6 md:text-[46px]">
            Shipped, not planned.
          </h2>
          <Link
            href="/work"
            className="meta flex items-center gap-1.5 text-accent md:col-span-2 md:col-start-11 md:justify-end"
          >
            All 18 projects <ArrowRight size={13} />
          </Link>
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-5 pb-12 md:grid-cols-3 md:px-12 md:pb-20">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 90} className="h-full">
              <WorkCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience ledger */}
      <section>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 pt-14 pb-5 md:grid-cols-12 md:items-end md:gap-6 md:px-12 md:pt-24">
          <RailHead index="03" label="Experience" />
          <h2 className="font-serif text-3xl leading-tight md:col-span-6 md:text-[46px]">
            Five years, five teams.
          </h2>
          <Link
            href="/about"
            className="meta flex items-center gap-1.5 text-accent md:col-span-2 md:col-start-11 md:justify-end"
          >
            Full background <ArrowRight size={13} />
          </Link>
        </div>
        <div className="mx-auto max-w-[1280px] px-5 pb-10 md:px-12">
          <div className="h-px bg-line-2" />
          {[...currentRoles, ...pastRoles].map((role, i) => (
            <div
              key={`${role.org}-${role.title}`}
              className="grid grid-cols-1 gap-1 border-b border-line py-5 md:grid-cols-12 md:items-baseline md:gap-6 md:py-6"
            >
              <span className="idx hidden md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl md:col-span-4 md:col-start-2 md:text-[28px]">
                {role.org}
              </h3>
              <p className="text-[15px] text-ink-2 md:col-span-4 md:col-start-6">
                {role.title}
              </p>
              <span
                className={`meta md:col-span-2 md:col-start-11 md:text-right ${
                  i === 0 ? "text-accent" : ""
                }`}
              >
                {role.period}
              </span>
            </div>
          ))}
        </div>
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-4 px-5 pb-16 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pb-24">
          <RailHead index="04" label="How I build" top />
          <div className="flex flex-col gap-2.5 md:col-span-9 md:col-start-3 md:pt-3.5">
            {toolGroups.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3.5"
              >
                <span className="label md:w-24 md:shrink-0">{group.label}</span>
                <div className="flex flex-wrap gap-1.5">
                  {group.tools.map((tool) => (
                    <span key={tool} className="chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sink">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:items-end md:gap-6 md:px-12 md:py-24">
          <div className="flex flex-col gap-5 md:col-span-7">
            <span className="label text-sink-ink-3">Next</span>
            <h2 className="font-serif text-4xl leading-tight text-sink-ink md:text-6xl">
              Let&apos;s build something together.
            </h2>
            <p className="max-w-[460px] text-lg leading-relaxed text-sink-ink-2">
              Whether you need a product manager for your platform or just want
              to talk shop, I am always open to a good conversation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 md:col-span-4 md:col-start-9">
            <a href={`mailto:${siteConfig.email}`} className="btn btn-inv">
              Send an email <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
