import type { MetadataRoute } from "next";
import { siteConfig, caseStudies } from "@/data/content";
import { notes } from "@/data/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/work",
    "/skills",
    "/notes",
    "/contact",
    "/cv",
    "/privacy",
    ...caseStudies.map((study) => `/work/${study.slug}`),
    ...notes.map((note) => `/notes/${note.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
