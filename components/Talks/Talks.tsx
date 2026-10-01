import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import config from "@/data/newConfig.json";
import { cn } from "@/lib/utils";

interface Talk {
  id: string;
  title: string;
  event: string;
  date: string;
  description?: string;
  link?: string;
}

const talks: Talk[] = (config as unknown as { talks: Talk[] }).talks;

const Talks = ({ slice = true }: { slice?: boolean }) => {
  const useSlice = slice && talks.length > 3;
  const visibleTalks = useSlice ? talks.slice(0, 3) : talks;
  return (
    <section id="talks">
      {slice && (
        <SectionHeading title="Talks" href={useSlice ? "/talks" : undefined} />
      )}
      {/* Timeline rail: the border is the line, each item pins a dot onto it */}
      <ul className="border-border mt-5 ml-1 flex flex-col gap-7 border-l">
        {visibleTalks.map((talk) => {
          const formattedDate = new Date(talk.date).toLocaleDateString(
            "en-US",
            { month: "short", year: "numeric" },
          );

          const body = (
            <>
              <span
                aria-hidden="true"
                className="bg-border ring-background group-hover:bg-foreground absolute top-1.5 -left-[4.5px] size-2 rounded-full ring-4 transition-[background-color,scale] duration-200 group-hover:scale-125"
              />
              <p className="text-muted-foreground text-[13px]">
                {talk.event} ·{" "}
                <time dateTime={talk.date} className="tabular-nums">
                  {formattedDate}
                </time>
              </p>
              <h3 className="mt-1 text-sm leading-snug font-medium text-balance">
                {talk.title}
                {talk.link && (
                  <ArrowUpRight className="text-muted-foreground group-hover:text-foreground ml-1 inline size-3.5 align-[-2px] transition-[color,translate] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </h3>
              {talk.description && (
                <p
                  className={cn(
                    "text-muted-foreground mt-1.5 text-sm leading-relaxed text-pretty",
                    slice && "line-clamp-2",
                  )}
                >
                  {talk.description}
                </p>
              )}
            </>
          );

          return (
            <li key={talk.id} className="relative pl-6">
              {talk.link ? (
                <Link
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-md"
                >
                  {body}
                </Link>
              ) : (
                <div className="group">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Talks;
