import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

type CompanyBadgeProps = {
  name: string;
  href: string;
  logoSrc: string;
};

const CompanyBadge = ({ name, href, logoSrc }: CompanyBadgeProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="align-middle"
    >
      <Badge
        variant="outline"
        className="bg-gray-100 border-border hover:border-pine/50 hover:bg-accent rounded-full border transition-colors"
      >
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span className="ml-1 text-sm">{name}</span>
      </Badge>
    </Link>
  );
};

export default CompanyBadge;
