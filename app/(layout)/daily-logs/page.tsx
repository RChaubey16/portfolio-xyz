import Link from "next/link";
import type { Metadata } from "next";
import { Brain, Laptop, Rocket } from "lucide-react";

import FadeUp from "@/components/animation/FadeUp";
import { Badge } from "@/components/ui/badge";
import {
  getAllDailyLogs,
  type DailyLogEntry,
  type DailyLogItemType,
} from "@/lib/daily-logs";

export const metadata: Metadata = {
  title: "Daily Logs",
  description: "A running log of things I've built, shipped, and learned.",
};

const ITEM_ICONS: Record<DailyLogItemType, typeof Rocket> = {
  project: Rocket,
  learning: Brain,
  other: Laptop,
};

function DailyLogEntryCard({ entry }: { entry: DailyLogEntry }) {
  const [year, month, day] = entry.date.split("-").map(Number);
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
    "en-US",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <div className="relative">
      <div className="bg-pine absolute -left-[39px] top-2 h-2.5 w-2.5 rounded-full" />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="text-muted-foreground font-mono text-sm">
          {formattedDate}
        </span>
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
        {entry.items.map((item, i) => {
          const Icon = ITEM_ICONS[item.type ?? "other"];
          return (
            <li
              key={i}
              className="text-muted-foreground flex items-start gap-2 text-sm"
            >
              <Icon className="mt-[3px] h-3.5 w-3.5 shrink-0" />
              {item.link ? (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pine transition-colors"
                >
                  {item.text}
                  <span className="ml-1 text-xs opacity-60">↗</span>
                </Link>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function DailyLogsPage() {
  const entries = getAllDailyLogs();

  return (
    <section className="bg-background py-20">
      <FadeUp>
        <div className="mb-12">
          <p className="eyebrow">{"// daily-logs"}</p>
          <h1 className="page-title mt-1 mb-4">Daily Logs</h1>
          <p className="para">
            A running log of things I&apos;ve built, shipped, and learned.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="border-border relative mt-8 ml-4 space-y-10 border-l-2 pl-8">
          {entries.map((entry) => (
            <DailyLogEntryCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
