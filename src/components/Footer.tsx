import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Built with
          intention.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-text transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href={siteConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-text transition-colors"
          >
            Twitter
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-text transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
