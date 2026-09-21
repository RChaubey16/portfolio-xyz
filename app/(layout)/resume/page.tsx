import type { Metadata } from "next";

import BackLink from "@/components/BackLink";
import FadeUp from "@/components/animation/FadeUp";
import ResumeViewer from "@/components/resume/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Ruturaj Chaubey, a Full Stack Developer with expertise in React, Next.js, and Node.js.",
};

export default function Home() {
  return (
    <FadeUp>
      <section className="bg-background pt-20">
        <BackLink href="/" label="Back home" />
        <div className="mt-6">
          <ResumeViewer />
        </div>
      </section>
    </FadeUp>
  );
}
