import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
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
    <>
      <FadeUp>
        <PageHeader
          title="Work"
          description="In-depth case studies of projects I have built and shipped."
        />
      </FadeUp>
      <FadeUp delay={0.08} className="mt-10 flex flex-col gap-3">
        {studies.length === 0 ? (
          <p className="text-muted-foreground text-sm">No case studies yet.</p>
        ) : (
          studies.map((study) => <WorkCard key={study.slug} study={study} />)
        )}
      </FadeUp>
    </>
  );
}
