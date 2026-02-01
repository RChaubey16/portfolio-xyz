import Image from "next/image";
import {
  BriefcaseBusiness,
  Clock8,
  Eye,
  FileUser,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import RoleSlider from "../animation/Roles";
import InfoIconCard from "./InfoIconCard";
import SocialCard from "../SocialCard";
import newConfig from "@/data/newConfig.json";
import { getIndiaTimeLabel } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Profile() {
  const {
    name,
    roles,
    avatarImageUrl,
    avatarImageAltText,
    visits,
    about,
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
          <div className="relative w-25 h-25 rounded-md border border-manatee">
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
        <div className="my-4 flex items-center gap-4">
          <ModeToggle />
          <button className="flex items-center gap-1" title="Visitor Count">
            <Eye size={20} /> <span>{visits}</span>
          </button>
          <div className="flex items-center gap-1">
            <Clock8 className="size-4" />
            <span>{time}</span>
          </div>
        </div>
      </div>

      {/* <div className="space-y-2">
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
      </div> */}

      <div className="mb-6 flex flex-col md:flex-row gap-3 justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href={"/contact"} target="_blank">
            <Button
              variant="default"
              size={"default"}
              className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-200 hover:gap-4"
            >
              Get In Touch
              <Send />
            </Button>
          </Link>
          <Link href={"/resume"} className="">
            <Button
              variant="outline"
              size={"default"}
              className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-200 hover:gap-4"
            >
              My Resume
              <FileUser />
            </Button>
          </Link>
        </div>

        {socials && (
          <div className="flex justify-center flex-wrap gap-2">
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
      </div>

      <div className="mt-4">
        <h2 className="section-title">About</h2>
        <ul className="mt-4 space-y-2 list-disc ml-6">
          {about.map((item: string) => (
            <li key={item} className="para text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
