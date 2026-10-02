import { Clapperboard, Cpu } from "lucide-react";

import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import SectionHeading from "@/components/SectionHeading";
import Talks from "@/components/Talks/Talks";
import TextCard from "@/components/TextCard";
import RecentWork from "@/components/Work/RecentWork";
import FadeUp from "@/components/animation/FadeUp";
import Intro from "@/components/introduction/Intro";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <FadeUp>
        <Intro />
      </FadeUp>

      <FadeUp delay={0.08}>
        <Experience />
      </FadeUp>

      <FadeUp delay={0.16}>
        <Projects />
      </FadeUp>

      <FadeUp>
        <RecentWork />
      </FadeUp>

      <FadeUp>
        <Talks />
      </FadeUp>

      <FadeUp>
        <section>
          <SectionHeading title="Personal" />
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <TextCard
              title="Gears"
              description="Hardware and software I use daily"
              icon={<Cpu className="size-4" />}
              href="/gears"
            />
            <TextCard
              title="Movies & TV"
              description="Films and shows that inspire me"
              icon={<Clapperboard className="size-4" />}
              href="/movies"
            />
          </div>
        </section>
      </FadeUp>
    </div>
  );
}
