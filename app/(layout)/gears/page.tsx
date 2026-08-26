import Link from "next/link";

import type { Metadata } from "next";
import { GoArrowUpRight } from "react-icons/go";

import FadeUp from "@/components/animation/FadeUp";
import config from "@/data/newConfig.json";

export const metadata: Metadata = {
  title: "Gears",
  description:
    "The tools, hardware, and software that Ruturaj Chaubey uses daily.",
};

function GearList({ items }: { items: (typeof config.gears)[number][] }) {
  return (
    <ul className="space-y-3">
      {items.map((gear) => (
        <li key={gear.name}>
          <Link
            href={gear.link}
            target="_blank"
            className="text-muted-foreground hover:text-pine group flex items-center justify-between text-sm transition-colors"
          >
            <span>
              <span className="text-foreground font-medium">{gear.name}</span>
              {gear.description && (
                <span className="ml-2">&mdash; {gear.description}</span>
              )}
            </span>
            <GoArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function GearsPage() {
  const hardware = config.gears.filter((g) => g.category === "hardware");
  const software = config.gears.filter((g) => g.category === "software");

  return (
    <FadeUp>
      <section className="bg-background pt-20">
        <p className="eyebrow">{"// gears"}</p>
        <h1 className="page-title mt-1">Gears</h1>
        <p className="para">The tools and hardware I use daily.</p>

        <div className="mt-8 space-y-8">
          <div>
            <h2 className="eyebrow mb-3">{"// hardware"}</h2>
            <GearList items={hardware} />
          </div>

          <div>
            <h2 className="eyebrow mb-3">{"// software"}</h2>
            <GearList items={software} />
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
