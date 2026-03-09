import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface TextCardProps {
  title: string;
  description: string;
  href?: string;
}

const TextCard = ({ title, description, href = "#" }: TextCardProps) => {
  return (
    <Link href={href}>
      <div className="border-ring/50 dark:bg-muted/40 dark:hover:bg-muted/70 hover:bg-muted/70 group flex w-full items-center justify-between rounded-md border p-3.5">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        <GoArrowRight className="text-muted-foreground h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  );
};

export default TextCard;
