import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/skills", "/contact", "/privacy"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
