import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectData } from "@/types/project";
import ProjectCard from "./ProjectCard";
import config from "@/data/newConfig.json";

export const projects: ProjectData[] = (config.projects as unknown) as ProjectData[];

const Projects = ({ useSlice = true }) => {
  const visibleProjects = useSlice ? projects.slice(0, 4) : projects;
  return (
    <section id="builds" className="mt-20">
      <h1 className="section-title">Projects</h1>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      {useSlice && (
        <div className="mt-8 flex justify-center">
          <Link href={"/projects"} className="">
            <Button
              variant="outline"
              size={"lg"}
              className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-200 hover:gap-4"
            >
              More Projects
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
