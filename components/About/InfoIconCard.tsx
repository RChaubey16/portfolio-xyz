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
      <div className="bg-accent rounded-md p-1">{icon}</div>
      <p className="text-base">
        {title}{" "}
        {linkHref && (
          <Link
            href={linkHref}
            className="border-muted-foreground hover:border-b"
          >
            {linkText}
          </Link>
        )}
      </p>
    </div>
  );
}
