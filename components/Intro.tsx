import Image from "next/image";
import Link from "next/link";

import CompanyBadge from "@/components/CompanyBadge";
import configData from "@/data/newConfig.json";

const currentFocusLinks: Record<string, string> = {
  Currently: "/work",
};

const communityLinks: Record<string, string> = {
  "Drupalers Association Pune": "https://drupalpune.in",
  "Meetup page": "https://www.meetup.com/pune-drupal-group/",
};

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const linkify = (text: string, linkMap: Record<string, string>) => {
  const phrases = Object.keys(linkMap).sort((a, b) => b.length - a.length);
  const pattern = phrases.map(escapeRegExp).join("|");
  const parts = text.split(new RegExp(`(\\b(?:${pattern})\\b)`, "g"));

  return parts.map((part, index) => {
    const href = linkMap[part];

    if (!href) {
      return part;
    }

    const isExternal = href.startsWith("http");

    return (
      <Link
        key={`${part}-${index}`}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-foreground decoration-rust/40 hover:decoration-rust underline underline-offset-4 transition-colors"
      >
        {part}
      </Link>
    );
  });
};

const Intro = () => {
  const {
    name,
    avatarImageUrl,
    avatarImageAltText,
    currentRole,
    location,
    description,
    currentFocus,
    communityInvolvement,
  } = configData;
  const [beforeCompany, afterCompany] = currentFocus.split("QED42");

  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Image
          src={avatarImageUrl}
          alt={avatarImageAltText}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
          priority
        />
        <div>
          <h1 className="text-foreground font-serif text-2xl leading-none font-medium tracking-tight">
            {name}
          </h1>
          <p className="text-muted-foreground mt-1.5 font-mono text-xs tracking-widest uppercase">
            {currentRole} &middot; {location}
          </p>
        </div>
      </div>

      <p className="text-foreground text-[15px] leading-relaxed">
        {description.join(" ")}
      </p>

      <div className="border-border flex flex-col gap-4 border-t pt-6 text-[15px] leading-relaxed">
        <p className="text-muted-foreground">
          {linkify(beforeCompany, currentFocusLinks)}
          <CompanyBadge
            name="QED42"
            href="https://qed42.com"
            logoSrc="/images/qed42.jpeg"
          />
          {linkify(afterCompany, currentFocusLinks)}
        </p>

        <p className="text-muted-foreground">
          {linkify(communityInvolvement, communityLinks)}
        </p>
      </div>
    </section>
  );
};

export default Intro;
