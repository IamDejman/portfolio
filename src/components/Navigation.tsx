"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/content";
import { ArrowRight } from "./icons";
const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];
export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [previous, setPrevious] = useState(pathname);
  if (previous !== pathname) {
    setPrevious(pathname);
    setOpen(false);
  }
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <Link href="/" className="wordmark" aria-label="Ayodeji Eluwande, home">
          ayodeji
        </Link>
        <nav className="desktop-navigation" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname.startsWith(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a className="nav-cv" href={siteConfig.cv} download>
          Download CV <ArrowRight size={15} />
        </a>
        <button
          className="menu-trigger"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>
      {open && (
        <nav
          className="mobile-navigation"
          id="mobile-navigation"
          aria-label="Mobile main"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-trigger")
                ?.focus();
            }
          }}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
              <ArrowRight />
            </Link>
          ))}
          <a href={siteConfig.cv} download>
            Download CV
            <ArrowRight />
          </a>
        </nav>
      )}
    </>
  );
}
