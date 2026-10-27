import Link from "next/link";
import MotionToggle from "@/components/motion/MotionToggle";
import { siteConfig } from "@/data/content";
export default function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="footer-name">
        Ayodeji Eluwande
      </Link>
      <div>
        <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" data-track="social" data-track-label="LinkedIn">
          LinkedIn
        </a>
        <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" data-track="social" data-track-label="GitHub">
          GitHub
        </a>
        <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" data-track="social" data-track-label="X">
          X
        </a>
        <Link href="/privacy">Privacy</Link>
        <MotionToggle />
      </div>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
