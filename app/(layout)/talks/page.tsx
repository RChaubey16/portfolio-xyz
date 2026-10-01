import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import Talks from "@/components/Talks/Talks";
import FadeUp from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "Talks",
  description:
    "A collection of talks and presentations I've given at conferences and community events.",
};

export default function TalksPage() {
  return (
    <>
      <FadeUp>
        <PageHeader
          title="Talks"
          description="A collection of talks and presentations I've given at conferences and community events."
        />
      </FadeUp>
      <FadeUp delay={0.08} className="mt-8">
        <Talks slice={false} />
      </FadeUp>
    </>
  );
}
