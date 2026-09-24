import type { MetadataRoute } from "next";
import { siteConfig, caseStudies } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/work",
    "/skills",
    "/contact",
    "/cv",
    "/privacy",
    ...caseStudies.map((study) => `/work/${study.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
