import Link from "next/link";

export default function InfoIconCard({
  icon,
  title,
  linkText,
  linkHref,
}: {
  icon: React.ReactNode;
  title: string;
  linkText: string;
  linkHref: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="p-1 rounded-md bg-accent">{icon}</div>
      <p className="text-base">
        {title}{" "}
        {linkHref && (
          <Link
            href={linkHref}
            className="hover:border-b border-muted-foreground"
          >
            {linkText}
          </Link>
        )}
      </p>
    </div>
  );
}
