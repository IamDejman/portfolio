import type { Metadata } from "next";
import { siteConfig, openTo } from "@/data/content";
import Reveal from "@/components/Reveal";
import RailHead from "@/components/RailHead";
import { ArrowRight, ArrowDown } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch. Open to PM roles, consulting, and partnerships.",
};

const routes = [
  {
    label: "Email",
    value: "ayodejieluwande@gmail.com",
    note: "Direct",
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ayodejieluwande",
    note: "Profile and network",
    href: siteConfig.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/IamDejman",
    note: "Repositories and side projects",
    href: siteConfig.github,
  },
  {
    label: "X",
    value: "x.com/aeluwande",
    note: "Socials",
    href: siteConfig.twitter,
  },
  {
    label: "Curriculum vitae",
    value: "Ayodeji_Eluwande_CV.pdf",
    note: "PDF",
    href: siteConfig.cv,
    download: true,
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 pt-14 pb-14 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-24 md:pb-20">
          <RailHead index="01" label="Contact" top />
          <div className="flex flex-col gap-7 md:col-span-6 md:col-start-3">
            <h1 className="font-serif text-5xl leading-[1.0] tracking-[-0.02em] md:text-[88px] md:leading-[0.98]">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="italic">together.</span>
            </h1>
            <p className="max-w-[480px] text-lg leading-relaxed text-ink-2 md:text-xl">
              Whether you need a product manager for your platform or just want
              to talk shop, I am always open to a good conversation.
            </p>
          </div>

          <Reveal delay={120} className="md:col-span-3 md:col-start-10">
            <div className="flex flex-col gap-5 rounded-2xl bg-sink p-7">
              <span className="label text-sink-ink-3">Open to</span>
              <div className="flex flex-col">
                {openTo.map((item, i) => (
                  <div
                    key={item}
                    className={`flex gap-3.5 py-3.5 ${
                      i < openTo.length - 1 ? "border-b border-sink-line" : ""
                    }`}
                  >
                    <span className="idx text-sink-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-snug text-sink-ink">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="label text-sink-ink-3">Based in</span>
                <span className="meta text-sink-ink-2">
                  Berlin, Germany. CET.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Routes ledger */}
      <section className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-5 pt-12 pb-16 md:grid-cols-12 md:items-start md:gap-6 md:px-12 md:pt-18 md:pb-24">
        <RailHead index="02" label="Reach me" top />
        <div className="md:col-span-10 md:col-start-3">
          <div className="h-px bg-line-2" />
          {routes.map((r) => (
            <a
              key={r.label}
              href={r.href}
              {...(r.download
                ? { download: true }
                : r.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              className="group flex flex-col gap-1 border-b border-line py-5 md:flex-row md:items-baseline md:gap-8 md:py-6"
            >
              <h2 className="font-serif text-2xl md:w-56 md:shrink-0 md:text-[28px]">
                {r.label}
              </h2>
              <span className="meta flex-1 text-[13px] text-ink-2">
                {r.value}
              </span>
              <span className="hidden text-sm text-ink-3 md:block md:w-56">
                {r.note}
              </span>
              <span className="hidden text-accent md:block">
                {r.download ? <ArrowDown /> : <ArrowRight />}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
