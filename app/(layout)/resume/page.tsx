import type { Metadata } from "next";

import PageHeader from "@/components/PageHeader";
import FadeUp from "@/components/animation/FadeUp";
import ResumeViewer from "@/components/resume/ResumeViewer";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume of Ruturaj Chaubey, a Full Stack Developer with expertise in React, Next.js, and Node.js.",
  alternates: { canonical: "/resume" },
};

export default function Home() {
  return (
    <FadeUp>
      <PageHeader title="Resume" />
      <div className="mt-6">
        <ResumeViewer />
      </div>
    </FadeUp>
  );
}
