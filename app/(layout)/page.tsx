import Intro from "@/components/Intro";
import FadeUp from "@/components/animation/FadeUp";

export default function Home() {
  return (
    <div className="flex min-h-[70vh] flex-col justify-center">
      <FadeUp>
        <Intro />
      </FadeUp>
    </div>
  );
}
