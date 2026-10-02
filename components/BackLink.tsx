import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function BackLink({
  href = "/",
  label = "Back",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-link group -ml-1 inline-flex items-center gap-1.5 rounded-md px-1 py-0.5 text-sm transition-colors"
    >
      <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
      {label}
    </Link>
  );
}
