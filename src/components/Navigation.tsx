"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/content";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowDown } from "@/components/icons";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    menu?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menu) return;
      const focusables = menu.querySelectorAll<HTMLElement>("a, button");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const links = navLinks.filter((l) => l.href !== "/");

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="border-b border-line bg-bg">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:h-[76px] md:px-12">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="hidden h-5 w-px bg-line-2 md:block" />
            <span className="label hidden md:block">{siteConfig.fullName}</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b-2 pb-0.5 text-[15px] transition-colors ${
                    active
                      ? "border-accent text-ink"
                      : "border-transparent text-ink-2 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <span className="h-5 w-px bg-line-2" />
            <a href={siteConfig.cv} download className="btn btn-ghost btn-sm">
              CV <ArrowDown size={14} />
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle className="h-11 w-11" />
            <button
              ref={triggerRef}
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu: removed from the tree when closed, so its
          links never sit in the tab order behind the page. */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-0 top-16 z-40 bg-bg md:hidden"
        >
          <nav
            className="flex h-full flex-col items-center justify-center gap-8"
            aria-label="Main"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-4xl text-ink hover:text-ink-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={siteConfig.cv} download className="btn btn-ghost mt-4">
              Download CV <ArrowDown size={14} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
