import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function SectionHeading({
  title,
  href,
  linkLabel = "View all",
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="section-title">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-muted-foreground hover:text-link group inline-flex items-center gap-1 text-sm transition-colors"
        >
          {linkLabel}
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
