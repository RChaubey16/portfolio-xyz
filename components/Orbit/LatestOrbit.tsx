"use client";

import Link from "next/link";

import { GoArrowRight } from "react-icons/go";

import { FireworksButton } from "@/components/fireworks-button";

const LATEST_COMPONENT = {
  name: "Fireworks Button",
  description:
    "A button that launches a full-screen fireworks show on click — rockets with glowing trails, burst particles, and glitter effects, all on a canvas overlay.",
  href: "https://orbit.ruturaj.xyz",
  isNew: true,
};

const LatestOrbit = () => {
  return (
    <section id="orbit">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-bold">Latest from Orbit</h2>
        <Link
          href="https://orbit.ruturaj.xyz"
          target="_blank"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          View library →
        </Link>
      </div>

      <div className="border-ring/50 dark:bg-muted/40 mt-4 rounded-md border p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{LATEST_COMPONENT.name}</h3>
              {LATEST_COMPONENT.isNew && (
                <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
                  New
                </span>
              )}
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              {LATEST_COMPONENT.description}
            </p>
          </div>
          <Link
            href={LATEST_COMPONENT.href}
            target="_blank"
            className="text-muted-foreground hover:text-foreground flex shrink-0 items-center gap-1 text-sm transition-colors"
          >
            View <GoArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="bg-muted/50 mt-4 flex items-center justify-center rounded-md py-8">
          <FireworksButton count={5}>Launch Fireworks</FireworksButton>
        </div>
      </div>
    </section>
  );
};

export default LatestOrbit;
