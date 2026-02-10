import type { Metadata } from "next";
import Fade from "@/components/animation/Fade";
import Projects from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects I've worked on, ranging from web applications to open-source libraries and developer tools.",
};

export default function ProjectsPage() {
  return (
    <Fade>
      <section className="py-20 bg-background">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="para">
            A collection of projects I&apos;ve worked on, ranging from web
            applications to open-source libraries and developer tools.
          </p>
        </div>
        <Projects useSlice={false} />
      </section>
    </Fade>
  );
}
