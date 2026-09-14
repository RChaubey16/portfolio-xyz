import Image from "next/image";
import Link from "next/link";

import CompanyBadge from "@/components/CompanyBadge";
import configData from "@/data/newConfig.json";

const linkedWords: Record<string, string> = {
  Currently: "/work",
  UI: "/projects",
  backend: "/projects",
};

const renderWithLinks = (text: string) => {
  const words = Object.keys(linkedWords);
  const parts = text.split(new RegExp(`(\\b${words.join("\\b|\\b")}\\b)`, "g"));

  return parts.map((part, index) =>
    part in linkedWords ? (
      <Link
        key={`${part}-${index}`}
        href={linkedWords[part]}
        className="border-b border-current pb-0.5 transition-colors hover:text-black"
      >
        {part}
      </Link>
    ) : (
      part
    ),
  );
};

const Intro = () => {
  const { avatarImageUrl, avatarImageAltText, description, currentFocus } =
    configData;
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
        {renderWithLinks(beforeCompany)}
        <CompanyBadge
          name="QED42"
          href="https://qed42.com"
          logoSrc="/images/qed42.jpeg"
        />
        {renderWithLinks(afterCompany)}
      </p>
    </section>
  );
};

export default Intro;
