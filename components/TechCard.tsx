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
      <Badge variant="outline" className="tech-badge">
        <Image
          src={isDark ? imageUrl.dark : imageUrl.light}
          alt={imageAltText}
          width={20}
          height={20}
        />
        <span>{tech}</span>
      </Badge>
    </Link>
  );
};

export default TechCard;
