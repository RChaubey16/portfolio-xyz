import type { Metadata } from "next";

import BackLink from "@/components/BackLink";
import Talks from "@/components/Talks/Talks";
import FadeUp from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "Talks",
  description:
    "A collection of talks and presentations I've given at conferences and community events.",
};

export default function TalksPage() {
  return (
    <section className="bg-background py-20">
      <FadeUp>
        <BackLink href="/" label="Back home" />
        <div className="mt-6 mb-12">
          <p className="eyebrow">{"// talks"}</p>
          <h1 className="page-title mt-1 mb-4">Talks</h1>
          <p className="para">
            A collection of talks and presentations I&apos;ve given at
            conferences and community events.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <Talks slice={false} />
      </FadeUp>
    </section>
  );
}
