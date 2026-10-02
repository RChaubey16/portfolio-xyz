"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import type { Heading } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function TOC({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px" },
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="bg-card my-8 rounded-xl border p-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="text-muted-foreground hover:text-foreground flex w-full cursor-pointer items-center justify-between text-xs font-medium transition-colors"
        aria-expanded={open}
      >
        On this page
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <nav
          className="mt-3 flex flex-col border-l"
          aria-label="Table of contents"
        >
          {headings.map(({ id, text, level }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "-ml-px border-l py-1 text-sm transition-colors",
                level === 3 ? "pl-6" : "pl-3",
                activeId === id
                  ? "border-foreground text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground border-transparent",
              )}
            >
              {text}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
