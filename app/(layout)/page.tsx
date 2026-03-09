import TextCard from "@/components/TextCard";
import Intro from "@/components/introduction/Intro";

export default function Home() {
  return (
    <>
      <Intro />

      <section className="mt-12 grid grid-cols-1 gap-3">
        <h2 className="text-2xl font-bold">Personal</h2>
        <TextCard
          title="Movies"
          description="Films and shows that have inspired me"
        />
        <TextCard
          title="Gears"
          description="Tech and gadgets that I use"
        />
      </section>

      {/* <Experience />

      <Projects />

      <Gallery />

      <Technologies />

      <Footer /> */}
    </>
  );
}
