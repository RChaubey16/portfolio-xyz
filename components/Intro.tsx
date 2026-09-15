import Image from "next/image";
import Link from "next/link";

import CompanyBadge from "@/components/CompanyBadge";
import configData from "@/data/newConfig.json";

const currentFocusLinks: Record<string, string> = {
  Currently: "/work",
  UI: "/ui-lab",
  backend: "/projects",
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
        className="border-b border-current pb-0.5 transition-colors hover:text-black"
      >
        {part}
      </Link>
    );
  });
};

const Intro = () => {
  const {
    avatarImageUrl,
    avatarImageAltText,
    description,
    currentFocus,
    communityInvolvement,
  } = configData;
  const [beforeCompany, afterCompany] = currentFocus.split("QED42");

  return (
    <section className="flex flex-col gap-10">
      <Image
        src={avatarImageUrl}
        alt={avatarImageAltText}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
        priority
      />

      <p className="text-[14px] leading-relaxed font-medium text-black">
        {description.join(" ")}
      </p>

      <p className="text-[14px] leading-relaxed font-normal text-gray-600">
        {linkify(beforeCompany, currentFocusLinks)}
        <CompanyBadge
          name="QED42"
          href="https://qed42.com"
          logoSrc="/images/qed42.jpeg"
        />
        {linkify(afterCompany, currentFocusLinks)}
      </p>

      <p className="text-[14px] leading-relaxed font-normal text-gray-600">
        {linkify(communityInvolvement, communityLinks)}
      </p>
    </section>
  );
};

export default Intro;
