import type { Metadata } from "next";

import MediaCard from "@/components/MediaCard";
import FadeUp from "@/components/animation/FadeUp";
import config from "@/data/newConfig.json";

export const metadata: Metadata = {
  title: "Movies",
  description:
    "A collection of movies and TV series that Ruturaj Chaubey loves and recommends.",
};

export default function Home() {
  return (
    <FadeUp>
      <section className="bg-background pt-20">
        <p className="eyebrow">{"// movies & tv"}</p>
        <h1 className="page-title mt-1">Movies & TV</h1>
        <p className="para">Some of my all-time favorites.</p>

        <div className="mt-8 space-y-8">
          <div>
            <h2 className="eyebrow mb-3">{"// movies"}</h2>
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
          </div>

          <div>
            <h2 className="eyebrow mb-3">{"// tv series"}</h2>
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
          </div>
        </div>
      </section>
    </FadeUp>
  );
}
