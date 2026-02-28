import Image from "next/image";
import Link from "next/link";

import { Eye, FileUser, Send } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import newConfig from "@/data/newConfig.json";

import SocialCard from "../SocialCard";
import RoleSlider from "../animation/Roles";
import { Button } from "../ui/button";
import VisitorCount from "./VisitorCount";

export default async function Profile() {
  const { name, roles, avatarImageUrl, avatarImageAltText, about, socials } =
    newConfig;

  return (
    <>
      <div className="mt-20 flex flex-col">
        <div className="flex items-center gap-4">
          {/* Image */}
          <div className="border-manatee relative h-25 w-25 rounded-md border">
            <Image
              src={avatarImageUrl}
              alt={avatarImageAltText}
              fill
              className="rounded-md object-cover p-1"
            />
          </div>

          {/* Info */}
          <div className="mt-2">
            <h1 className="text-primary text-3xl font-bold">{name}</h1>
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

      <div className="mb-6 flex flex-col items-center justify-between gap-3 md:flex-row">
        <div className="flex items-center gap-2">
          <Link href={"/contact"} target="_blank">
            <Button
              variant="default"
              size={"default"}
              className="flex cursor-pointer items-center gap-2 transition-all duration-200 ease-in-out hover:gap-4"
            >
              Get In Touch
              <Send />
            </Button>
          </Link>
          <Link href={"/resume"} className="">
            <Button
              variant="outline"
              size={"default"}
              className="flex cursor-pointer items-center gap-2 transition-all duration-200 ease-in-out hover:gap-4"
            >
              My Resume
              <FileUser />
            </Button>
          </Link>
        </div>

        {socials && (
          <div className="flex flex-wrap justify-center gap-2">
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
        <ul className="mt-4 ml-6 list-disc space-y-2">
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
