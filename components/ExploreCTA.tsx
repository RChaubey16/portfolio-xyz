import Link from "next/link";

import config from "@/data/newConfig.json";
import { getAllPosts } from "@/lib/blog";

interface Talk {
  id: string;
}

const talks = (config as unknown as { talks: Talk[] }).talks;

const ExploreCTA = () => {
  const postsCount = getAllPosts().length;
  const talksCount = talks.length;

  const items = [
    {
      title: "Talks",
      description: "Conference and meetup talks",
      href: "/talks",
      count: `${talksCount} talk${talksCount !== 1 ? "s" : ""}`,
    },
    {
      title: "Writing",
      description: "Thoughts on engineering and design",
      href: "/blog",
      count: `${postsCount} post${postsCount !== 1 ? "s" : ""}`,
    },
  ];

  return (
    <section>
      <div className="border-border divide-border divide-y border-y">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between py-4"
          >
            <div>
              <p className="font-semibold group-hover:underline">{item.title}</p>
              <p className="text-muted-foreground mt-0.5 text-sm">
                {item.description}
              </p>
            </div>
            <div className="ml-4 flex shrink-0 items-center gap-3">
              <span className="text-muted-foreground tabular-nums text-sm">
                {item.count}
              </span>
              <span className="text-muted-foreground group-hover:text-foreground text-sm transition-colors">
                View all →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreCTA;
