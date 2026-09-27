import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { WorkCard } from "@/components/Work/WorkCard";
import { getAllCaseStudies } from "@/lib/work";

const RecentWork = () => {
  const studies = getAllCaseStudies().slice(0, 2);

  if (studies.length === 0) return null;

  return (
    <section id="work">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="eyebrow">{"// work"}</p>
          <h2 className="section-title mt-1">Case Studies</h2>
        </div>
        <Link
          href="/work"
          className="text-muted-foreground hover:text-pine inline-flex items-center gap-0.5 font-mono text-xs transition-colors"
        >
          view all
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {studies.map((study) => (
          <WorkCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
};

export default RecentWork;
