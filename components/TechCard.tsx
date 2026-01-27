"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type TechItem = {
  name: string;
  href: string;
  logoSrc: string;
};

const TechCard = ({
  name,
  logoSrc,
  href = "#",
}: TechItem) => {

  return (
    <Link key={name} href={href} target="_blank">
      <Badge variant="outline" className="tech-badge">
        <Image src={logoSrc} alt={name} width={20} height={20} />
        <span>{name}</span>
      </Badge>
    </Link>
  );
};

export default TechCard;
