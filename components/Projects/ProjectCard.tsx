"use client";

import Image from "next/image";
import Link from "next/link";

import { GithubIcon, Globe } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectCardProps } from "@/types/project";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { image, title, description, links, status, techStack } = project;
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const liveLink = links.find((l) => l.icon === "Globe");
  const codeLink = links.find((l) => l.icon === "GithubIcon");

  return (
    <Card className="overflow-hidden border p-0">
      <div className="flex flex-row">
        {/* Content - left */}
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="text-muted-foreground mt-1.5 line-clamp-3 text-sm">
              {description}
            </p>

            {techStack && techStack.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {techStack.map((tech) => (
                  <Tooltip key={tech.id}>
                    <TooltipTrigger asChild>
                      <div className="bg-accent/60 rounded-md p-1.5">
                        <Image
                          src={
                            isDark ? tech.imageUrl.dark : tech.imageUrl.light
                          }
                          alt={tech.imageAltText}
                          width={16}
                          height={16}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{tech.tech}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>

          {/* Links + Status */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {codeLink && (
                <Link href={codeLink.href} target="_blank">
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    <GithubIcon className="mr-1 h-4 w-4" />
                    Code
                  </Button>
                </Link>
              )}
              {liveLink && (
                <Link href={liveLink.href} target="_blank">
                  <Button
                    variant="default"
                    size="sm"
                    className="cursor-pointer"
                  >
                    <Globe className="mr-1 h-4 w-4" />
                    Live
                  </Button>
                </Link>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                {status.className === "status-live" && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${status.className === "status-live" ? "bg-green-500" : "bg-yellow-500"}`}
                />
              </span>
              <span className="text-muted-foreground text-sm tracking-wide">
                {status.text}
              </span>
            </div>
          </div>
        </div>

        {/* Image - right */}
        <div className="relative w-36 shrink-0 sm:w-48">
          <Image
            src={image.src}
            fill
            alt={image.alt}
            className="object-cover object-top"
          />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
