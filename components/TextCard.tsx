import Link from "next/link";

import type { ReactNode } from "react";
import { GoArrowRight } from "react-icons/go";

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
    <Link href={href} target={target}>
      <div className="border-border hover:border-pine/50 hover:bg-accent/40 group flex w-full items-center justify-between rounded-md border p-3.5 transition-colors">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="bg-muted flex shrink-0 items-center justify-center rounded-md p-2">
              {icon}
            </div>
          )}
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
        <GoArrowRight className="text-pine h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  );
};

export default TextCard;
