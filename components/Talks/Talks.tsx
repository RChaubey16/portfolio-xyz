import Link from "next/link";

import config from "@/data/newConfig.json";

import CtaButton from "../others/CtaButton";

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
      <h2 className="text-2xl font-bold">Talks</h2>
      <div className="mt-4 flex flex-col gap-4">
        {visibleTalks.map((talk) => {
          const formattedDate = new Date(talk.date).toLocaleDateString(
            "en-US",
            {
              month: "short",
              year: "numeric",
            },
          );

          const inner = (
            <div className="grid grid-cols-[80px_1fr] gap-4">
              <span className="text-muted-foreground pt-0.5 text-sm tabular-nums">
                {formattedDate}
              </span>
              <div
                className={`border-border border-l pl-4 transition-colors${talk.link ? " group-hover:border-foreground" : ""}`}
              >
                <p
                  className={`font-medium leading-snug${talk.link ? " group-hover:underline" : ""}`}
                >
                  {talk.title}
                </p>
                <p className="text-muted-foreground mt-0.5 text-sm">
                  <span className="text-foreground font-semibold">{talk.event}</span>
                </p>
                {talk.description && (
                  <p className="text-muted-foreground mt-0.5 text-sm">
                    {talk.description}
                  </p>
                )}
              </div>
            </div>
          );

          return talk.link ? (
            <Link
              key={talk.id}
              href={talk.link}
              target="_blank"
              className="group"
            >
              {inner}
            </Link>
          ) : (
            <div key={talk.id}>{inner}</div>
          );
        })}
      </div>

      {useSlice && (
        <div className="mt-8 flex justify-center">
          <CtaButton text="More Talks" href="/talks" />
        </div>
      )}
    </section>
  );
};

export default Talks;
