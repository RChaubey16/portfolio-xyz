"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, GithubIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ProjectCardProps } from "@/types/project";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { image, title, description, links, status, techStack } = project;
  const isLive = status.className === "status-live";

  const liveLink = links.find((l) => l.icon === "Globe");
  const codeLink = links.find((l) => l.icon === "GithubIcon");

  return (
    <article className="group bg-card hover:border-foreground/15 overflow-hidden rounded-xl border transition-[border-color,box-shadow] duration-300 hover:shadow-sm">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-1 flex-col justify-between gap-4 p-5">
          <div>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-medium tracking-tight">{title}</h3>
              <span className="text-muted-foreground inline-flex shrink-0 items-center gap-1.5 text-[13px]">
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    isLive ? "bg-success" : "bg-amber-500",
                  )}
                />
                {status.text}
              </span>
            </div>
            <p className="text-muted-foreground mt-1.5 line-clamp-3 text-sm leading-relaxed">
              {description}
            </p>

            {techStack && techStack.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-1">
                {techStack.map((tech) => (
                  <Tooltip key={tech.id}>
                    <TooltipTrigger asChild>
                      <span className="hover:bg-accent inline-flex rounded-md p-1.5 transition-colors">
                        <Image
                          src={tech.imageUrl.light}
                          alt={tech.imageAltText}
                          width={16}
                          height={16}
                          className="dark:hidden"
                        />
                        <Image
                          src={tech.imageUrl.dark}
                          alt={tech.imageAltText}
                          width={16}
                          height={16}
                          className="hidden dark:block"
                        />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={4}>{tech.tech}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {liveLink && (
              <Button asChild size="sm" className="group/btn">
                <Link
                  href={liveLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                  <ArrowUpRight className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </Button>
            )}
            {codeLink && (
              <Button asChild variant="outline" size="sm">
                <Link
                  href={codeLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  Source
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="bg-muted relative aspect-video w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-52 sm:border-l">
          <Image
            src={image.src}
            fill
            alt={image.alt}
            sizes="(max-width: 640px) 100vw, 208px"
            className="object-cover object-top transition-transform duration-500 ease-(--ease-out-quint) group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
