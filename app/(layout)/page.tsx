import { FiFilm } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Talks from "@/components/Talks/Talks";
import TextCard from "@/components/TextCard";
// import LatestOrbit from "@/components/Orbit/LatestOrbit";
import FadeUp from "@/components/animation/FadeUp";
import Intro from "@/components/introduction/Intro";

export default function Home() {
  return (
    <>
      <FadeUp>
        <Intro />
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-10">
          <Experience />
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="border-border mt-10 border-t pt-10">
          <Projects />
        </div>
      </FadeUp>

      {/* <FadeUp delay={0.3}>
        <div className="mt-16">
          <LatestOrbit />
        </div>
      </FadeUp> */}

      <FadeUp delay={0.4}>
        <div className="border-border mt-10 border-t pt-10">
          <Talks />
        </div>
      </FadeUp>

      <FadeUp delay={0.8}>
        <section className="border-border mt-16 border-t pt-10">
          <p className="eyebrow">{"// personal"}</p>
          <h2 className="section-title mt-1">Personal</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
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
