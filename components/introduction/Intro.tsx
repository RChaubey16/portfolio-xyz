"use client";

import Image from "next/image";
import Link from "next/link";

import { FaDrupal, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import TerminalStatus from "@/components/animation/TerminalStatus";
import MetaInfo from "@/components/introduction/MetaInfo";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import configData from "../../data/newConfig.json";

const socialIcons = {
  LinkedIn: <FaLinkedinIn className="h-4.5 w-4.5" />,
  GitHub: <FaGithub className="h-4.5 w-4.5" />,
  Twitter: <FaXTwitter className="h-4.5 w-4.5" />,
  Drupal: <FaDrupal className="h-4.5 w-4.5" />,
} as const;

type SocialName = keyof typeof socialIcons;

const Intro = () => {
  const { name, avatarImageUrl, avatarImageAltText, socials } = configData;

  return (
    <section className="mt-20 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={avatarImageUrl}
          alt={avatarImageAltText}
          width={80}
          height={80}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div>
          <h1 className="font-serif text-3xl font-medium tracking-tight">
            {name}
          </h1>
          <TerminalStatus />
        </div>
      </div>

      <MetaInfo />

      <div className="border-border/60 flex items-center gap-3 border-t pt-4">
        <div className="text-muted-foreground flex items-center gap-2">
          {socials.map((social) => (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.tooltip}
                  className="bg-muted border-border hover:border-pine/50 hover:text-pine hover:bg-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-colors"
                >
                  {socialIcons[social.name as SocialName]}
                </Link>
              </TooltipTrigger>
              <TooltipContent>{social.tooltip}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
