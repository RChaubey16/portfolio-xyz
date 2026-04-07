import Link from "next/link";

import { FiFilm } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import TextCard from "@/components/TextCard";
import FadeUp from "@/components/animation/FadeUp";
import Intro from "@/components/introduction/Intro";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <FadeUp>
        <Intro />
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-16">
          <Experience />
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-16">
          <Projects />
        </div>
      </FadeUp>

      <FadeUp delay={0.3}>
        <section className="mt-16">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-bold">Writing</h2>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[80px_1fr] gap-4"
              >
                <span className="text-muted-foreground pt-0.5 text-sm tabular-nums">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <div className="border-border group-hover:border-foreground border-l pl-4 transition-colors">
                  <p className="font-medium leading-snug group-hover:underline">
                    {post.title}
                  </p>
                  <p className="text-muted-foreground mt-0.5 text-sm">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </FadeUp>

      <FadeUp delay={0.4}>
        <section className="mt-16">
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
