import Image from "next/image";
import Link from "next/link";

type TechItem = {
  tech: string;
  techHref: string;
  imageUrl: {
    light: string;
    dark: string;
  };
  imageAltText: string;
};

const TechCard = ({ tech, techHref, imageUrl, imageAltText }: TechItem) => {
  return (
    <Link
      href={techHref}
      target="_blank"
      rel="noopener noreferrer"
      className="border-border text-foreground hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition-colors"
    >
      {/* Render both and toggle via CSS so SSR markup matches the client theme */}
      <Image
        src={imageUrl.light}
        alt={imageAltText}
        width={14}
        height={14}
        className="dark:hidden"
      />
      <Image
        src={imageUrl.dark}
        alt={imageAltText}
        width={14}
        height={14}
        className="hidden dark:block"
      />
      {tech}
    </Link>
  );
};

export default TechCard;
