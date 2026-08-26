import type { Metadata } from "next";

import { WorkCard } from "@/components/Work/WorkCard";
import FadeUp from "@/components/animation/FadeUp";
import { getAllCaseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "In-depth case studies of projects I have built and shipped.",
};

export default function WorkPage() {
  const studies = getAllCaseStudies();

  return (
    <FadeUp>
      <section className="mt-16">
        <p className="eyebrow">{"// work"}</p>
        <h1 className="page-title mt-1">Work</h1>
        <p className="para">
          In-depth case studies of projects I have built and shipped.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {studies.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No case studies yet.
            </p>
          ) : (
            studies.map((study) => <WorkCard key={study.slug} study={study} />)
          )}
        </div>
      </section>
    </FadeUp>
  );
}
