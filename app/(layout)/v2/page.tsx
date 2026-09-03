import type { Metadata } from "next";

import FadeUp from "@/components/animation/FadeUp";
import Intro from "@/components/introduction/Intro";
import DummyTabs from "@/components/v2/DummyTabs";

export const metadata: Metadata = {
  title: "V2",
  description: "Work in progress.",
};

export default function V2() {
  return (
    <>
      <FadeUp>
        <Intro />
      </FadeUp>

      <FadeUp delay={0.1}>
        <DummyTabs />
      </FadeUp>
    </>
  );
}
