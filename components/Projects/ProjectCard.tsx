import Image from "next/image";
import Link from "next/link";

import { GithubIcon, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCardProps } from "@/types/project";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { image, title, description, links, status } = project;

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

      {/* Links */}
      <CardFooter className="flex items-center gap-2 px-4 pt-3 pb-4">
        {liveLink && (
          <Link href={liveLink.href} target="_blank">
            <Button variant="default" size="sm" className="cursor-pointer">
              <Globe className="mr-1.5 h-4 w-4" />
              Live
            </Button>
          </Link>
        )}
        {codeLink && (
          <Link href={codeLink.href} target="_blank">
            <Button variant="outline" size="sm" className="cursor-pointer">
              <GithubIcon className="mr-1.5 h-4 w-4" />
              Code
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
