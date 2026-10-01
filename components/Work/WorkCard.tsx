import Link from "next/link";

import { ArrowRight, Lock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { CaseStudyMeta } from "@/lib/work";

export function WorkCard({ study }: { study: CaseStudyMeta }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group bg-card hover:border-foreground/15 block rounded-xl border p-5 transition-[border-color,box-shadow] duration-300 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="leading-snug font-medium tracking-tight">
              {study.title}
            </h3>
            {study.nda && (
              <Badge variant="outline" className="text-muted-foreground">
                <Lock />
                Confidential
              </Badge>
            )}
          </div>
          <p className="text-muted-foreground mt-1 text-[13px]">
            {study.organisation} · {study.role} · {study.duration}
          </p>
        </div>
        <ArrowRight className="text-muted-foreground mt-1 size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>

      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
        {study.summary}
      </p>

      {study.outcome ? (
        <p className="mt-3 text-sm font-medium">{study.outcome}</p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {study.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="font-normal">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
