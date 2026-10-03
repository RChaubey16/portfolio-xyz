import { MetadataRoute } from "next";

import { SITE_URL as BASE_URL } from "@/lib/site";
import { getAllCaseStudies } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1 },
    { url: `${BASE_URL}/work`, priority: 0.9 },
    { url: `${BASE_URL}/projects`, priority: 0.8 },
    { url: `${BASE_URL}/talks`, priority: 0.7 },
    { url: `${BASE_URL}/gears`, priority: 0.5 },
    { url: `${BASE_URL}/movies`, priority: 0.5 },
    { url: `${BASE_URL}/resume`, priority: 0.5 },
  ];

  const workRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map((cs) => ({
    url: `${BASE_URL}/work/${cs.slug}`,
    priority: 0.8,
  }));

  return [...staticRoutes, ...workRoutes];
}
