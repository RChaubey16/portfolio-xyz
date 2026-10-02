import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects/Projects";
import FadeUp from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects I've worked on, ranging from web applications to open-source libraries and developer tools.",
};

export default function ProjectsPage() {
  return (
    <>
      <FadeUp>
        <PageHeader
          title="Projects"
          description="A collection of projects I've worked on, ranging from web applications to open-source libraries and developer tools."
        />
      </FadeUp>
      <FadeUp delay={0.08} className="mt-10">
        <Projects slice={false} />
      </FadeUp>
    </>
  );
}
