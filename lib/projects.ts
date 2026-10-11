import config from "@/data/config.json";
import { ProjectData } from "@/types/project";

export const projects: ProjectData[] =
  config.projects as unknown as ProjectData[];

// Only these projects are shown; others stay in config but are hidden
const FEATURED_PROJECT_IDS = [
  "neuron",
  "echo",
  "roast-my-drupal",
  "what-the-hex",
];

export const featuredProjects = projects.filter((proj) =>
  FEATURED_PROJECT_IDS.includes(proj.id),
);
