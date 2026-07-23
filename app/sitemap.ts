import type { MetadataRoute } from "next";

import { projects } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const baseUrl = siteConfig.url.replace(/\/$/, "");

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "about", priority: 0.8, changeFrequency: "monthly" },
  { path: "experience", priority: 0.8, changeFrequency: "monthly" },
  { path: "projects", priority: 0.9, changeFrequency: "weekly" },
  { path: "skills", priority: 0.7, changeFrequency: "monthly" },
  { path: "achievements", priority: 0.7, changeFrequency: "monthly" },
  { path: "resume", priority: 0.8, changeFrequency: "monthly" },
  { path: "contact", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: path ? `${baseUrl}/${path}/` : `${baseUrl}/`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...projectEntries];
}
