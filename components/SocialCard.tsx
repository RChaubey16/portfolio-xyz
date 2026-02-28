import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";

type SocialItem = {
  name: string;
  href: string;
  logoSrc: string;
};

const SocialCard = ({ name, logoSrc, href = "#" }: SocialItem) => {
  return (
    <div className="relative">
      <Link
        key={name}
        href={href}
        target="_blank"
        id={`social-${name.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <Badge variant="outline" className="social-badge">
          <Image
            src={logoSrc}
            alt={name}
            width={20}
            height={20}
            className="rounded-sm"
          />
          <span>{name}</span>
        </Badge>
      </Link>
    </div>
  );
};

export default SocialCard;
