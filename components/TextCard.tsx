import Link from "next/link";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface TextCardProps {
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
  target?: string;
}

const TextCard = ({
  title,
  description,
  href = "#",
  icon,
  target = "",
}: TextCardProps) => {
  return (
    <Link
      href={href}
      target={target}
      className="group bg-card hover:bg-accent/50 hover:border-foreground/15 flex w-full items-center justify-between gap-3 rounded-xl border p-4 transition-colors"
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="text-muted-foreground group-hover:text-foreground flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <ArrowRight className="text-muted-foreground size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
};

export default TextCard;
