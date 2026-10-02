"use client";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

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
    <Link
      href={techHref}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border text-foreground hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition-colors"
    >
      <Image
        src={isDark ? imageUrl.dark : imageUrl.light}
        alt={imageAltText}
        width={14}
        height={14}
      />
      {tech}
    </Link>
  );
};

export default TechCard;
