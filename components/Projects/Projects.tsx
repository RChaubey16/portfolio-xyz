import Link from "next/link";

import { ChevronRight } from "lucide-react";

import config from "@/data/newConfig.json";
import { ProjectData } from "@/types/project";

import ProjectCard from "./ProjectCard";

export const projects: ProjectData[] =
  config.projects as unknown as ProjectData[];

// Only these projects are shown; others stay in config but are hidden
const FEATURED_PROJECT_IDS = ["neuron", "what-the-hex"];

const featuredProjects = projects.filter((proj) =>
  FEATURED_PROJECT_IDS.includes(proj.id),
);

const Projects = ({ slice = true }) => {
  const useSlice = slice && featuredProjects.length > 4;
  const visibleProjects = useSlice
    ? featuredProjects.slice(0, 4)
    : featuredProjects;
  return (
    <section id="projects">
      {slice && (
        <div className="flex items-baseline justify-between">
          <div>
            <p className="eyebrow">{"// projects"}</p>
            <h2 className="section-title mt-1">Projects</h2>
          </div>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-pine inline-flex items-center gap-0.5 font-mono text-xs transition-colors"
          >
            view all
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
      <div className="mt-4 grid grid-cols-1 gap-4">
        {visibleProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
