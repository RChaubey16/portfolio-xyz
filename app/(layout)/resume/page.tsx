import type { Metadata } from "next";
import Fade from "@/components/animation/Fade";
import ResumeViewer from "@/components/resume/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Ruturaj Chaubey, a Full Stack Developer with expertise in React, Next.js, and Node.js.",
};

export default function Home() {
  return (
    <Fade>
      <section className="pt-20 bg-background">
        <ResumeViewer />
      </section>
    </Fade>
  );
}
