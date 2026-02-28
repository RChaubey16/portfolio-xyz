import type { Metadata } from "next";

import Projects from "@/components/Projects/Projects";
import Fade from "@/components/animation/Fade";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects I've worked on, ranging from web applications to open-source libraries and developer tools.",
};

export default function ProjectsPage() {
  return (
    <Fade>
      <section className="bg-background py-20">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold">Projects</h1>
          <p className="para">
            A collection of projects I&apos;ve worked on, ranging from web
            applications to open-source libraries and developer tools.
          </p>
        </div>
        <Projects />
      </section>
    </Fade>
  );
}
