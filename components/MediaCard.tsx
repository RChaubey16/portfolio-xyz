import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

interface MediaCardProps {
  title: string;
  href: string;
  image: string;
}

const MediaCard = ({ title, href, image }: MediaCardProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card hover:border-foreground/15 block overflow-hidden rounded-xl border transition-colors"
    >
      <div className="bg-muted relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 ease-(--ease-out-quint) group-hover:scale-[1.04]"
          sizes="(max-width: 672px) 50vw, 224px"
        />
      </div>
      <div className="flex items-center justify-between gap-2 px-3 py-2.5">
        <span className="line-clamp-1 text-sm font-medium">{title}</span>
        <ArrowUpRight className="text-muted-foreground size-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </div>
    </Link>
  );
};

export default MediaCard;
