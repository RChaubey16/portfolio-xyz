import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import config from "@/data/newConfig.json";

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
        <div className="flex items-baseline justify-between">
          <div>
            <p className="eyebrow">{"// talks"}</p>
            <h2 className="section-title mt-1">Talks</h2>
          </div>
          {useSlice && (
            <Link
              href="/talks"
              className="text-muted-foreground hover:text-pine font-mono text-xs transition-colors"
            >
              view all →
            </Link>
          )}
        </div>
      )}
      <div className="mt-4 flex flex-col gap-4">
        {visibleTalks.map((talk) => {
          const formattedDate = new Date(talk.date).toLocaleDateString(
            "en-US",
            {
              month: "short",
              year: "numeric",
            },
          );

          return (
            <div key={talk.id} className="grid grid-cols-[80px_1fr] gap-4">
              <span className="text-muted-foreground pt-0.5 text-sm tabular-nums">
                {formattedDate}
              </span>
              <div className="border-border border-l pl-4">
                {talk.link ? (
                  <Link
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground text-sm leading-snug font-semibold hover:underline"
                  >
                    {talk.title}
                  </Link>
                ) : (
                  <p className="text-foreground text-sm leading-snug font-semibold">
                    {talk.title}
                  </p>
                )}
                {talk.description && (
                  <p className="text-muted-foreground mt-0.5 text-sm">
                    {talk.description}
                  </p>
                )}
                <Badge variant="outline" className="mt-1.5">
                  {talk.event}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Talks;
