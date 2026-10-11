import type { Metadata } from "next";

import MediaCard from "@/components/MediaCard";
import PageHeader from "@/components/PageHeader";
import FadeUp from "@/components/animation/FadeUp";
import config from "@/data/config.json";

export const metadata: Metadata = {
  title: "Movies",
  description:
    "A collection of movies and TV series that Ruturaj Chaubey loves and recommends.",
  alternates: { canonical: "/movies" },
};

export default function Home() {
  return (
    <>
      <FadeUp>
        <PageHeader
          title="Movies & TV"
          description="Some of my all-time favorites."
        />
      </FadeUp>

      <FadeUp delay={0.08} className="mt-10 space-y-10">
        <section>
          <h2 className="eyebrow mb-3">Movies</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {config.movies.map((movie) => (
              <MediaCard
                key={movie.name}
                title={movie.name}
                href={movie.link}
                image={movie.image}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="eyebrow mb-3">TV Series</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {config.tvSeries.map((show) => (
              <MediaCard
                key={show.name}
                title={show.name}
                href={show.link}
                image={show.image}
              />
            ))}
          </div>
        </section>
      </FadeUp>
    </>
  );
}
