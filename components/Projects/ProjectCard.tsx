import Image from "next/image";
import Link from "next/link";

import { Github, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Types
import { ProjectCardProps } from "@/types/project";

import TechIcon from "../TechIcon";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { image, title, description, techStack, status, links, type } = project;

  return (
    <Card className="group-hover:bg-card/90 project-card gap-2.5 border-none p-0">
      <CardHeader className="relative p-0">
        {/* Image */}
        <div className="relative h-48 w-full">
          <Image
            src={image.src}
            fill
            alt={image.alt}
            className="rounded-md object-cover object-top"
          />
        </div>

        {/* Title */}
        <CardTitle className="title rounded-t-xl px-4 py-2">{title}</CardTitle>
      </CardHeader>

      <CardContent className="card-content p-0 px-4 pb-4">
        <p className="para line-clamp-4">{description}</p>

        {/* Tech Stack */}
        {type === "tech" && (
          <div className="mt-4">
            <p className="tech-stack-label mb-1">Tech Stack:</p>
            <div className="flex gap-2">
              <TechIcon size={8} tech={techStack} />
            </div>
          </div>
        )}

        {/* Links */}
        <div className="mt-5 flex items-center justify-between gap-2.5">
          <div className={`status ${status.className}`}>
            <div className="circle"></div>
            {status.text}
          </div>

          <div className="flex items-center gap-2.5">
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
