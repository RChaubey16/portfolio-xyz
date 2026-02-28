import Image from "next/image";
import Link from "next/link";
import { Eye, FileUser, Send } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import RoleSlider from "../animation/Roles";
import SocialCard from "../SocialCard";
import newConfig from "@/data/newConfig.json";
import VisitorCount from "./VisitorCount";
import { Button } from "../ui/button";

export default async function Profile() {
  const {
    name,
    roles,
    avatarImageUrl,
    avatarImageAltText,
    about,
    socials,
  } = newConfig;

  return (
    <>
      <div className="mt-20 flex flex-col">
        <div className="flex items-center gap-4">
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
          <div className="mt-2">
            <h1 className="text-3xl font-bold text-primary">{name}</h1>
            <RoleSlider roles={roles} />
          </div>
        </div>

        {/* Dark mode + Visitor count */}
        <div className="my-4 flex items-center gap-4">
          <ModeToggle />
          <button className="flex items-center gap-1" title="Visitor Count">
            <Eye size={20} /> <VisitorCount />
          </button>
          {/* <div className="flex items-center gap-1">
            <Clock8 className="size-4" />
            <span>{time}</span>
          </div> */}
        </div>
      </div>

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
