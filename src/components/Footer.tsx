import Link from "next/link";
import { siteConfig, navLinks } from "@/data/content";
import Logo from "@/components/Logo";

const social = [
  {
    label: "LinkedIn",
    href: "linkedin",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "github",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "twitter",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 pt-12 pb-10 sm:grid-cols-3 md:px-12">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-[240px] text-sm leading-relaxed text-ink-3">
            AI Product Manager in Berlin.
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
          <div className="flex items-center gap-2">
            {social.map((s) => (
              <a
                key={s.label}
                href={siteConfig[s.href]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-2 hover:text-ink hover:border-line-2 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-12">
          <span className="meta">
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. Built with
            intention.
          </span>
          <span className="meta">Berlin, DE · {siteConfig.email}</span>
        </div>
      </div>
    </footer>
  );
}
