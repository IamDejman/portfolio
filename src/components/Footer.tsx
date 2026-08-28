import Link from "next/link";
import { siteConfig, navLinks } from "@/data/content";
import Logo from "@/components/Logo";

const social = [
  { label: "LinkedIn", href: "linkedin", note: "linkedin.com/in/ayodejieluwande" },
  { label: "GitHub", href: "github", note: "github.com/IamDejman" },
  { label: "X", href: "twitter", note: "x.com/aeluwande" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 pt-12 pb-10 sm:grid-cols-3 md:px-12">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-[230px] text-sm leading-relaxed text-ink-3">
            AI Product Manager. Berlin, Germany. Writing the PRD and shipping
            the code.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="label">Pages</p>
          {navLinks
            .filter((l) => l.href !== "/")
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink-2 hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="label">Elsewhere</p>
          {social.map((s) => (
            <a
              key={s.label}
              href={siteConfig[s.href]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-2 hover:text-ink transition-colors"
            >
              {s.label} <span className="meta ml-2">{s.note}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <span className="meta">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}
          </span>
          <span className="meta">Berlin, DE · {siteConfig.email}</span>
        </div>
      </div>
    </footer>
  );
}
