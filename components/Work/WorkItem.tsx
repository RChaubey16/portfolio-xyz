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
      className="group -mx-3 flex items-center justify-between gap-4 rounded-md px-3 py-3 transition-colors hover:bg-gray-100"
    >
      <div className="flex min-w-0 items-center gap-3">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 rounded-md object-contain"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-black">{name}</p>
          {role && <p className="truncate text-xs text-gray-500">{role}</p>}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span className="text-xs text-gray-500">{meta}</span>
        <GoArrowUpRight className="h-3.5 w-3.5 -translate-x-1 text-gray-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
