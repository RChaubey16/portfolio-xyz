import config from "@/data/newConfig.json";
import { ProjectData } from "@/types/project";

import CtaButton from "../others/CtaButton";
import ProjectCard from "./ProjectCard";

export const projects: ProjectData[] =
  config.projects as unknown as ProjectData[];

const Projects = () => {
  const useSlice = projects.length > 4;
  const visibleProjects = useSlice ? projects.slice(0, 4) : projects;
  return (
    <section id="projects">
      <h1 className="section-title">Projects</h1>
      <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        {visibleProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      {useSlice && (
        <div className="mt-8 flex justify-center">
          <CtaButton text="More Projects" href="/projects" />
        </div>
      )}
    </section>
  );
};

export default Projects;
