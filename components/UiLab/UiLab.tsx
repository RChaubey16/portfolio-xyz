import Link from "next/link";

import { GoArrowLeft } from "react-icons/go";

import { UiLabListItem } from "@/components/UiLab/UiLabListItem";
import { labEntries } from "@/components/UiLab/registry";

export default function UiLab() {
  return (
    <section className="mt-20 flex flex-col gap-10">
      <Link
        href="/v2"
        className="flex w-fit items-center gap-1.5 text-sm text-gray-500 underline underline-offset-2 transition-colors hover:text-black"
      >
        <GoArrowLeft className="h-4 w-4" />
        home
      </Link>

      <div>
        <h2 className="mb-2 text-xs font-medium tracking-wide text-gray-400 uppercase">
          Components
        </h2>
        <div className="flex flex-col">
          {labEntries.map((entry) => (
            <UiLabListItem
              key={entry.slug}
              slug={entry.slug}
              name={entry.name}
              description={entry.description}
              icon={entry.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
