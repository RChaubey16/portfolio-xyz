"use client";

import Image from "next/image";
import Link from "next/link";

import { FaDrupal, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import TerminalStatus from "@/components/animation/TerminalStatus";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import configData from "../../data/config.json";

const socialIcons = {
  LinkedIn: <FaLinkedinIn className="size-4" />,
  GitHub: <FaGithub className="size-4" />,
  Twitter: <FaXTwitter className="size-4" />,
  Drupal: <FaDrupal className="size-4" />,
} as const;

type SocialName = keyof typeof socialIcons;

const Intro = () => {
  const { name, avatarImageUrl, avatarImageAltText, socials, description } =
    configData;

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Image
          src={avatarImageUrl}
          alt={avatarImageAltText}
          width={128}
          height={128}
          priority
          className="ring-border ring-offset-background size-16 rounded-full object-cover ring-1 ring-offset-2"
        />
        <div className="min-w-0">
          <h1 className="text-xl font-semibold tracking-tight">{name}</h1>
          <TerminalStatus />
        </div>
      </div>

      <div className="text-muted-foreground space-y-3 text-[15px] leading-relaxed text-pretty">
        {description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="-ml-2 flex items-center gap-0.5">
        {socials.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.tooltip}
                className="text-muted-foreground hover:bg-accent hover:text-foreground inline-flex size-9 items-center justify-center rounded-md transition-[color,background-color,transform] active:scale-95"
              >
                {socialIcons[social.name as SocialName]}
              </Link>
            </TooltipTrigger>
            <TooltipContent sideOffset={4}>{social.tooltip}</TooltipContent>
          </Tooltip>
        ))}
        <span className="bg-border mx-1.5 h-4 w-px" aria-hidden="true" />
        <ModeToggle />
      </div>
    </section>
  );
};

export default Intro;
