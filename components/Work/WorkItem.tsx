import Image from "next/image";
import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";

type WorkItemProps = {
  logo: string;
  name: string;
  role?: string;
  meta: string;
  href: string;
};

export function WorkItem({ logo, name, role, meta, href }: WorkItemProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border flex items-center justify-between gap-4 border-b py-4 first:pt-0 last:border-b-0"
    >
      <div className="flex min-w-0 items-center gap-3">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={32}
          height={32}
          className="border-border h-8 w-8 shrink-0 rounded-full border object-contain"
        />
        <div className="min-w-0">
          <p className="text-foreground group-hover:decoration-rust truncate text-sm font-medium underline decoration-transparent underline-offset-4 transition-colors">
            {name}
          </p>
          {role && (
            <p className="text-muted-foreground truncate text-xs">{role}</p>
          )}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span className="text-muted-foreground font-mono text-xs">{meta}</span>
        <GoArrowUpRight className="text-muted-foreground group-hover:text-rust h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
