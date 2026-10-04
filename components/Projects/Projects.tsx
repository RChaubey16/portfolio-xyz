import SectionHeading from "@/components/SectionHeading";
import config from "@/data/newConfig.json";
import { ProjectData } from "@/types/project";

import ProjectCard from "./ProjectCard";

export const projects: ProjectData[] =
  config.projects as unknown as ProjectData[];

// Only these projects are shown; others stay in config but are hidden
const FEATURED_PROJECT_IDS = [
  "neuron",
  "echo",
  "roast-my-drupal",
  "what-the-hex",
];

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
