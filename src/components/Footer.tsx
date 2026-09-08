import Link from "next/link";
import { siteConfig } from "@/data/content";
export default function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-name">
        Ayodeji Eluwande
      </Link>
      <div>
        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer">
          X
        </a>
        <Link href="/privacy">Privacy</Link>
      </div>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
