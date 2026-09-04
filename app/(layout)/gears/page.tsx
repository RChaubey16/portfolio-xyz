import type { Metadata } from "next";

import Gears from "@/components/Gears/Gears";
import FadeUp from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "Gears",
  description:
    "The tools, hardware, and software that Ruturaj Chaubey uses daily.",
};

export default function GearsPage() {
  return (
    <FadeUp>
      <section className="bg-background pt-20">
        <Gears />
      </section>
    </FadeUp>
  );
}
