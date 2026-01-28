"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type SocialItem = {
  name: string;
  href: string;
  logoSrc: string;
};

import { useState } from "react";

const SocialCard = ({
  name,
  logoSrc,
  href = "#",
}: SocialItem) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link key={name} href={href} target="_blank">
        <Badge variant="outline" className="social-badge">
          <Image src={logoSrc} alt={name} width={20} height={20} className="rounded-sm" />
          <span>{name}</span>
        </Badge>
      </Link>
      
      {isHovered && (
        <div className="absolute top-full left-0 w-fit mt-1 px-2 py-1 bg-muted/80 backdrop-blur-sm border border-border rounded-md text-xs text-center animate-in fade-in slide-in-from-top-1 duration-200 z-10 pointer-events-none">
          {name}
        </div>
      )}
    </div>
  );
};

export default SocialCard;
