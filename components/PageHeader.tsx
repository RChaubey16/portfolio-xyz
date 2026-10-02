import type { ReactNode } from "react";

import BackLink from "@/components/BackLink";

export default function PageHeader({
  title,
  description,
  backHref = "/",
  backLabel = "Home",
  children,
}: {
  title: string;
  description?: ReactNode;
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
}) {
  return (
    <header>
      <BackLink href={backHref} label={backLabel} />
      <h1 className="page-title mt-8">{title}</h1>
      {description && <p className="para max-w-prose">{description}</p>}
      {children}
    </header>
  );
}
