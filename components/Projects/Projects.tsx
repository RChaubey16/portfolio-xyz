import SectionHeading from "@/components/SectionHeading";
import { featuredProjects } from "@/lib/projects";

import ProjectCard from "./ProjectCard";

const Projects = ({ slice = true }) => {
  const useSlice = slice && featuredProjects.length > 4;
  const visibleProjects = useSlice
    ? featuredProjects.slice(0, 4)
    : featuredProjects;
  return (
    <section id="projects">
      {slice && <SectionHeading title="Projects" href="/projects" />}
      <div className="mt-4 grid grid-cols-1 gap-3">
        {visibleProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
