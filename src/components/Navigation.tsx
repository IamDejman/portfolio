"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  if (previous !== pathname) {
    setPrevious(pathname);
    setOpen(false);
  }
  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector("a")?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      trigger.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
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
        <Link
          className="nav-cv"
          href="/cv"
          aria-current={pathname === "/cv" ? "page" : undefined}
        >
          View CV <ArrowRight size={15} />
        </Link>
        <button
          ref={trigger}
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
          ref={menu}
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
              <ArrowRight />
            </Link>
          ))}
          <Link href="/cv" onClick={() => setOpen(false)}>
            View CV
            <ArrowRight />
          </Link>
        </nav>
      )}
    </>
  );
}
