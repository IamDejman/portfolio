import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/motion/MotionRoot";
import PageTransition from "@/components/motion/PageTransition";
import IntentEvents from "@/components/IntentEvents";
import { motionScript } from "@/components/motion/script";
import { siteConfig } from "@/data/content";
import "./globals.css";

// Self-hosted latin variable fonts (from Fontsource, OFL) so builds never
// fetch from Google Fonts.
const dmSans = localFont({
  src: "../fonts/manrope-latin-wght.woff2",
  variable: "--font-dm-sans",
  weight: "200 800",
  display: "swap",
});

const instrumentSerif = localFont({
  src: "../fonts/unbounded-latin-wght.woff2",
  variable: "--font-instrument-serif",
  weight: "200 900",
  display: "swap",
});

export const viewport = { themeColor: "#101211" };

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  // Title and description are left out so share previews inherit each
  // page's own; "./" resolves og:url to the current page.
  openGraph: {
    url: "./",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    url: siteConfig.url,
    jobTitle: "AI Product Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    sameAs: [siteConfig.linkedin, siteConfig.twitter, siteConfig.github],
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable}`}
      // Lets Next.js jump to the top of a new page instead of smooth-scrolling
      // there; anchor links on a page still scroll smoothly.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body className="antialiased">
        {/*
        THESIS: Possibility Engine makes product mechanisms explorable through a moving structure.
        OWN-WORLD: Ink black, acid yellow, electric blue; Unbounded display, Manrope body, direct links.
        STORY: Discover three projects, inspect a mechanism, read the contribution, reach Ayodeji.
        FIRST VIEWPORT: Large left-aligned lettering and an intersecting ribbon sculpture at right; project selection below; work and contact immediately accessible. Motion pauses and has a static fallback.
        FORM: User-pinned Possibility Engine, code-led implementation of accepted REBUILD-PLAN; seed ef84ddb7 is subordinate to that commitment.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        <noscript>
          <nav className="nojs-navigation" aria-label="Site navigation">
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/notes">Notes</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/cv" data-track="cv">
              CV
            </Link>
          </nav>
        </noscript>
        <main id="main" tabIndex={-1} className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MotionRoot />
        <IntentEvents />
        {process.env.VERCEL === "1" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
