import Image from "next/image";
import { BriefcaseBusiness, Clock8, Eye, Mail, MapPin } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import RoleSlider from "../animation/Roles";
import InfoIconCard from "./InfoIconCard";
import SocialCard from "../SocialCard";
import newConfig from "@/data/newConfig.json";
import { getIndiaTimeLabel } from "@/lib/utils";

export default function Profile() {
  const {
    name,
    roles,
    avatarImageUrl,
    avatarImageAltText,
    visits,
    currentRole,
    email,
    location,
    socials,
  } = newConfig;

  const time = getIndiaTimeLabel();

  return (
    <>
      <div className="mt-20 flex flex-col items-center">
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="relative w-25 h-25 rounded-md border border-chart-3">
            <Image
              src={avatarImageUrl}
              alt={avatarImageAltText}
              fill
              className="p-1 object-cover rounded-md"
            />
          </div>

          {/* Info */}
          <div className="mt-2 text-center">
            <h1 className="text-3xl font-bold text-primary">{name}</h1>
            <RoleSlider roles={roles} />
          </div>
        </div>

        {/* Dark mode + Visitor count */}
        <div className="my-2 flex items-center gap-4">
          <ModeToggle />
          <button className="flex items-center gap-1" title="Visitor Count">
            <Eye size={20} /> <span>{visits}</span>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <InfoIconCard
          icon={<BriefcaseBusiness className="size-4.5" />}
          title={currentRole}
          linkText="@QED42"
          linkHref="#"
        />
        <InfoIconCard
          icon={<Mail className="size-4.5" />}
          title={email}
          linkText=""
          linkHref={`mailto:${email}`}
        />
        <InfoIconCard
          icon={<MapPin className="size-4.5" />}
          title={location}
          linkText=""
          linkHref=""
        />
        <InfoIconCard
          icon={<Clock8 className="size-4.5" />}
          title={time}
          linkText=""
          linkHref=""
        />
      </div>

      <ul className="mt-4">
        <li>
          Full Stack Developer with 3+ years of experience, known for building
          scalable, high-performance web apps.
        </li>
        <li>
          Expert in React, Next.js, Node.js, and TypeScript, with a focus on
          building performant and accessible web applications.
        </li>
        <li>
          Skilled in using modern web development tools and technologies,
          including Git, GitHub, and Docker.
        </li>
      </ul>

      {socials && (
        <div className="mt-4 flex flex-wrap gap-2">
          {socials.map((item) => (
            <SocialCard
              key={item.name}
              name={item.name}
              logoSrc={item.logoSrc}
              href={item.href}
            />
          ))}
        </div>
      )}
    </>
  );
}
