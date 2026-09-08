import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope, Unbounded, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/content";
import "./globals.css";

const dmSans = Manrope({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Unbounded({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
    jobTitle: "AI Product Manager",
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
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: Possibility Engine makes product mechanisms explorable through a moving structure.
OWN-WORLD: Ink black, acid yellow, electric blue; Unbounded display, Manrope body, direct links.
STORY: Discover three projects, inspect a mechanism, read the contribution, reach Ayodeji.
FIRST VIEWPORT: Large left-aligned lettering and an intersecting ribbon sculpture at right; project selection below; work and contact immediately accessible. Motion pauses and has a static fallback.
FORM: User-pinned Possibility Engine, code-led implementation of accepted REBUILD-PLAN; seed ef84ddb7 is subordinate to that commitment.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
          }}
        />

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
            <Link href="/contact">Contact</Link>
            <a href={siteConfig.cv}>Download CV</a>
          </nav>
        </noscript>
        <main id="main" tabIndex={-1} className="min-h-screen">
          {children}
        </main>
        <Footer />
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
