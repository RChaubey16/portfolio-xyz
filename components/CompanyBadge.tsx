import Image from "next/image";
import Link from "next/link";

type CompanyBadgeProps = {
  name: string;
  href: string;
  logoSrc: string;
};

const CompanyBadge = ({ name, href, logoSrc }: CompanyBadgeProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground decoration-rust/40 hover:decoration-rust mx-0.5 inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
    >
      <Image
        src={logoSrc}
        alt={`${name} logo`}
        width={16}
        height={16}
        className="inline-block h-4 w-4 rounded-full object-cover align-[-3px]"
      />
      {name}
    </Link>
  );
};

export default CompanyBadge;
