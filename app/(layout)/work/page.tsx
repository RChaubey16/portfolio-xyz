import type { Metadata } from "next";

import Experience from "@/components/Experience/Experience";
import FadeUp from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A collection of projects I've worked on, ranging from web applications to open-source libraries and developer tools.",
};

export default function WorkPage() {
  return (
    <section className="bg-background py-20">
      <FadeUp>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Work</h1>
          <p className="para">
            A collection of projects I&apos;ve worked on, ranging from web
            applications to open-source libraries and developer tools.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <Experience showHeading={false} accordionState={"open"} />
      </FadeUp>
    </section>
  );
}
