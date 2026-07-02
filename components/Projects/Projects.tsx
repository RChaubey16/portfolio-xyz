import Link from "next/link";

import config from "@/data/newConfig.json";
import { ProjectData } from "@/types/project";

import ProjectCard from "./ProjectCard";

export const projects: ProjectData[] =
  config.projects as unknown as ProjectData[];

const Projects = ({ slice = true }) => {
  const useSlice = slice && projects.length > 4;
  const visibleProjects = useSlice ? projects.slice(0, 4) : projects;
  return (
    <section id="projects">
      {useSlice && (
        <div className="flex items-baseline justify-between">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            View all →
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
