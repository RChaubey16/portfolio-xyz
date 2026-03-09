"use client";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import { Badge } from "@/components/ui/badge";

type TechItem = {
  tech: string;
  techHref: string;
  imageUrl: {
    light: string;
    dark: string;
  };
  imageAltText: string;
};

const TechCard = ({ tech, techHref, imageUrl, imageAltText }: TechItem) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Link key={tech} href={techHref} target="_blank">
      <Badge
        variant="outline"
        className="bg-accent/80 border-accent/50 hover:bg-accent rounded-sm border-2 border-dashed p-2"
      >
        <Image
          src={isDark ? imageUrl.dark : imageUrl.light}
          alt={imageAltText}
          width={20}
          height={20}
        />
        <span className="ml-1.5 text-sm">{tech}</span>
      </Badge>
    </Link>
  );
};

export default TechCard;
