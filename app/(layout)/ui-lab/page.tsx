import type { Metadata } from "next";

import FadeUp from "@/components/animation/FadeUp";
import UiLab from "@/components/UiLab/UiLab";

export const metadata: Metadata = {
  title: "UI Lab",
  description:
    "Standalone UI components and interface experiments by Ruturaj Chaubey.",
};

export default function UiLabPage() {
  return (
    <FadeUp>
      <UiLab />
    </FadeUp>
  );
}
