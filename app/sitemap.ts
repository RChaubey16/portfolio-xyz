import { MetadataRoute } from "next";

import { getAllCaseStudies } from "@/lib/work";

const BASE_URL = "https://ruturaj.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1 },
    { url: `${BASE_URL}/work`, priority: 0.9 },
  ];

  const workRoutes: MetadataRoute.Sitemap = getAllCaseStudies().map((cs) => ({
    url: `${BASE_URL}/work/${cs.slug}`,
    priority: 0.8,
  }));

  return [...staticRoutes, ...workRoutes];
}
