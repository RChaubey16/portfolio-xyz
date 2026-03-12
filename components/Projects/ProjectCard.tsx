"use client";

import Image from "next/image";
import Link from "next/link";

import { GithubIcon, Globe } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="gap-0 overflow-hidden border p-0">
      {/* Image */}
      <CardHeader className="p-0">
        <div className="relative h-44 w-full">
          <Image
            src={image.src}
            fill
            alt={image.alt}
            className="object-cover object-top"
          />
        </div>
      </CardHeader>

      {/* Title & Description */}
      <CardContent className="flex-1 px-4 pt-4 pb-0">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        <p className="text-muted-foreground mt-1.5 line-clamp-3 text-sm">
          {description}
        </p>
      </CardContent>

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 px-4 pt-3">
          {techStack.map((tech) => (
            <Tooltip key={tech.id}>
              <TooltipTrigger asChild>
                <div className="bg-accent/60 rounded-md p-1.5">
                  <Image
                    src={isDark ? tech.imageUrl.dark : tech.imageUrl.light}
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

      {/* Links */}
      <CardFooter className="mt-6 ml-auto flex items-center gap-2 px-4 pt-3 pb-4">
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
            <Button variant="default" size="sm" className="cursor-pointer">
              <Globe className="mr-1 h-4 w-4" />
              Live
            </Button>
          </Link>
        )}
      </CardFooter>

      {/* Status */}
      <div className="bg-muted/40 border-t px-4 py-2">
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
    </Card>
  );
};

export default ProjectCard;
