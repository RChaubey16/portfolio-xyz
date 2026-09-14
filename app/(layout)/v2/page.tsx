import type { Metadata } from "next";

import FadeUp from "@/components/animation/FadeUp";
import Intro from "@/components/v2/Intro";

export const metadata: Metadata = {
  title: "V2",
  description: "Work in progress.",
};

export default function V2() {
  return (
    <FadeUp>
      <Intro />
    </FadeUp>
  );
}
