import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import FadeUp from "@/components/animation/FadeUp";
import config from "@/data/config.json";

export const metadata: Metadata = {
  title: "Gears",
  description:
    "The tools, hardware, and software that Ruturaj Chaubey uses daily.",
  alternates: { canonical: "/gears" },
};

function GearList({ items }: { items: (typeof config.gears)[number][] }) {
  return (
    <ul className="-mx-3 flex flex-col">
      {items.map((gear) => (
        <li key={gear.name}>
          <Link
            href={gear.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-accent/60 group flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-sm transition-colors"
          >
            <span className="min-w-0">
              <span className="font-medium">{gear.name}</span>
              {gear.description && (
                <span className="text-muted-foreground">
                  {" "}
                  — {gear.description}
                </span>
              )}
            </span>
            <ArrowUpRight className="text-muted-foreground size-3.5 shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
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
    <>
      <FadeUp>
        <PageHeader
          title="Gears"
          description="The tools and hardware I use daily."
        />
      </FadeUp>

      <FadeUp delay={0.08} className="mt-10 space-y-10">
        <section>
          <h2 className="eyebrow mb-2">Hardware</h2>
          <GearList items={hardware} />
        </section>
        <section>
          <h2 className="eyebrow mb-2">Software</h2>
          <GearList items={software} />
        </section>
      </FadeUp>
    </>
  );
}
