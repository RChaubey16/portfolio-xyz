import type { Metadata } from "next";

import Movies from "@/components/Movies/Movies";
import FadeUp from "@/components/animation/FadeUp";

export const metadata: Metadata = {
  title: "Movies",
  description:
    "A collection of movies and TV series that Ruturaj Chaubey loves and recommends.",
};

export default function MoviesPage() {
  return (
    <FadeUp>
      <section className="bg-background pt-20">
        <Movies />
      </section>
    </FadeUp>
  );
}
