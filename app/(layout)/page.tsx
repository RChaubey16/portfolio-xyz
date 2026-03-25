import { FiFilm } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import TextCard from "@/components/TextCard";
import FadeUp from "@/components/animation/FadeUp";
import Intro from "@/components/introduction/Intro";

export default function Home() {
  return (
    <>
      <FadeUp>
        <Intro />
      </FadeUp>

      <FadeUp delay={0.1}>
        <Experience />
      </FadeUp>

      <FadeUp delay={0.2}>
        <Projects />
      </FadeUp>

      <FadeUp delay={0.3}>
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Personal</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <TextCard
              title="Gears"
              description="Hardware and software I use daily"
              icon={<GrTechnology className="h-5 w-5" />}
              href="/gears"
            />
            <TextCard
              title="Movies & TV"
              description="Films and shows that inspire me"
              icon={<FiFilm className="h-5 w-5" />}
              href="/movies"
            />
          </div>
        </section>
      </FadeUp>
    </>
  );
}
