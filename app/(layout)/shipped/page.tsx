import Link from "next/link";
import type { Metadata } from "next";

import FadeUp from "@/components/animation/FadeUp";
import { Badge } from "@/components/ui/badge";
import { getAllShipped, type ShippedEntry } from "@/lib/shipped";

export const metadata: Metadata = {
  title: "Shipped",
  description: "A running log of things I've built and shipped.",
};

function ShippedEntryCard({ entry }: { entry: ShippedEntry }) {
  const [year, month, day] = entry.date.split("-").map(Number);
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
    "en-US",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <div className="relative">
      <div className="absolute -left-[39px] top-2 h-3 w-3 rounded-full bg-foreground" />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-muted-foreground text-sm">{formattedDate}</span>
        <span className="text-muted-foreground text-sm">·</span>
        <span className="font-medium">{entry.title}</span>
        <div className="flex flex-wrap gap-1">
          {entry.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <ul className="space-y-1.5">
        {entry.items.map((item, i) => (
          <li
            key={i}
            className="text-muted-foreground flex items-start gap-2 text-sm"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
            {item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                {item.text}
                <span className="ml-1 text-xs opacity-60">↗</span>
              </Link>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ShippedPage() {
  const entries = getAllShipped();

  return (
    <section className="bg-background py-20">
      <FadeUp>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Shipped</h1>
          <p className="para">A running log of things I&apos;ve built and shipped.</p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="relative ml-4 mt-8 space-y-10 border-l-2 border-border pl-8">
          {entries.map((entry) => (
            <ShippedEntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
