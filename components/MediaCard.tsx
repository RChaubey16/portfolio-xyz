import Image from "next/image";
import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";

interface MediaCardProps {
  title: string;
  href: string;
  image: string;
}

const MediaCard = ({ title, href, image }: MediaCardProps) => {
  return (
    <Link href={href} target="_blank" className="group block">
      <div className="border-border overflow-hidden rounded-lg border transition-all duration-200 group-hover:shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 672px) 50vw, 336px"
          />
        </div>
        <div className="flex items-center justify-between px-3 py-2.5">
          <span className="text-foreground line-clamp-1 text-sm font-medium">
            {title}
          </span>
          <GoArrowUpRight className="text-muted-foreground ml-2 h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
