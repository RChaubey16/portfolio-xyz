import Link from "next/link";

import { GoArrowRight } from "react-icons/go";

import type { LabEntry } from "@/components/UiLab/registry";

type UiLabListItemProps = Pick<
  LabEntry,
  "slug" | "name" | "description" | "icon"
>;

export function UiLabListItem({
  slug,
  name,
  description,
  icon: Icon,
}: UiLabListItemProps) {
  return (
    <Link
      href={`/ui-lab/${slug}`}
      className="group -mx-3 flex items-center justify-between gap-4 rounded-md px-3 py-3 transition-colors hover:bg-gray-100"
    >
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-700">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-black">{name}</p>
          <p className="truncate text-xs text-gray-500">{description}</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <span className="rounded-full border border-gray-200 bg-gray-100 px-2 py-0.5 text-[10px] tracking-wide text-gray-600">
          live
        </span>
        <GoArrowRight className="h-3.5 w-3.5 -translate-x-1 text-gray-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
