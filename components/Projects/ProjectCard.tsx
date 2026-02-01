import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import TechIcon from "../TechIcon";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@sanity/icons";
// Types
import { ProjectCardProps } from "@/types/project";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { image, title, description, techStack, status, blogCategories, links, type } =
    project;

  return (
    <div className="w-full h-full">
      <div className="relative overflow-hidden rounded-xl p-px h-full bg-card">
        <Card className="project-card group-hover:bg-card/90 border-none p-0 gap-2.5">
          <CardHeader className="relative p-0">
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={image.src}
                fill
                alt={image.alt}
                className="object-cover rounded-md"
              />
            </div>

            {/* Title */}
            <CardTitle className="py-2 px-4 title rounded-t-xl">
              {title}
            </CardTitle>
          </CardHeader>

          <CardContent className="card-content p-0 px-4 pb-4">
            <p className="para-text leading-6 line-clamp-4">{description}</p>

            {/* Tech Stack */}
            {type === "tech" && (
              <div className="mt-4">
                <p className="mb-1 tech-stack-label">Tech Stack:</p>
                <div className="flex gap-2">
                  <TechIcon size={8} tech={techStack} />
                </div>
              </div>
            )}
            {/* Tech Stack */}
            {type === "blogs" && (
              <div className="mt-4 flex gap-2">
                <div className="flex gap-2 flex-wrap">
                  {blogCategories?.map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-gray-500 dark:text-gray-400"
                    >
                      {item.category}
                    </Badge>
                  ))}
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
                    <Button variant={link.variant} className="cursor-pointer">
                      {link.icon === "GithubIcon" ? (
                        <>
                          {link.label}
                          <GithubIcon />
                        </>
                      ) : (
                        <>
                          {link.label}
                          {link.icon === "Read" ? <ArrowRight /> : <Globe />}
                        </>
                      )}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
