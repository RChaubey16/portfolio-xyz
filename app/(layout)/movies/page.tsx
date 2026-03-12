import type { Metadata } from "next";
import { MdMovie } from "react-icons/md";

import TextCard from "@/components/TextCard";
import FadeUp from "@/components/animation/FadeUp";
import config from "@/data/newConfig.json";

export const metadata: Metadata = {
  title: "Movies",
  description:
    "A collection of movies that Ruturaj Chaubey loves and recommends.",
};

export default function Home() {
  return (
    <FadeUp>
      <section className="bg-background pt-20">
        <h1 className="text-2xl font-bold">Movies</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Some of my all-time favorite movies.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {config.movies.map((movie) => (
            <TextCard
              key={movie.name}
              title={movie.name}
              description=""
              href={movie.link}
              target="_blank"
              icon={<MdMovie className="h-5 w-5" />}
            />
          ))}
        </div>
      </section>
    </FadeUp>
  );
}
