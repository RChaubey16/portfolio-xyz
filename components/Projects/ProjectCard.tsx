import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import TechIcon from "../TechIcon";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
// Types
import { ProjectCardProps } from "@/types/project";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { image, title, description, techStack, status, links, type } = project;

  return (
    <Card className="group-hover:bg-card/90 border-none p-0 gap-2.5 project-card">
      <CardHeader className="relative p-0">
        {/* Image */}
        <div className="relative w-full h-48">
          <Image
            src={image.src}
            fill
            alt={image.alt}
            className="object-cover object-top rounded-md"
          />
        </div>

        {/* Title */}
        <CardTitle className="py-2 px-4 title rounded-t-xl">{title}</CardTitle>
      </CardHeader>

      <CardContent className="card-content p-0 px-4 pb-4">
        <p className="para line-clamp-4">{description}</p>

        {/* Tech Stack */}
        {type === "tech" && (
          <div className="mt-4">
            <p className="mb-1 tech-stack-label">Tech Stack:</p>
            <div className="flex gap-2">
              <TechIcon size={8} tech={techStack} />
            </div>
          </div>
        )}

        {/* Links */}
        <div className="mt-5 flex gap-2.5 justify-between items-center">
          <div className={`status ${status.className}`}>
            <div className="circle"></div>
            {status.text}
          </div>

          <div className="flex gap-2.5 items-center">
            {links.map((link) => (
              <Link key={link.label} href={link.href} target="_blank">
                <Button
                  variant={link.variant}
                  title={link.label}
                  className="cursor-pointer"
                >
                  {link.icon === "GithubIcon" ? (
                    <>
                      <Github />
                    </>
                  ) : (
                    <>
                      <Globe />
                    </>
                  )}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
