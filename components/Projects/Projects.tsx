import { ProjectData } from "@/types/project";
import ProjectCard from "./ProjectCard";
import config from "@/data/newConfig.json";
import CtaButton from "../others/CtaButton";

export const projects: ProjectData[] =
  config.projects as unknown as ProjectData[];

const Projects = ({ useSlice = true }) => {
  const visibleProjects = useSlice ? projects.slice(0, 4) : projects;
  return (
    <section id="projects" className="mt-20">
      <h1 className="section-title">Projects</h1>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
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
