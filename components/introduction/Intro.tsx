"use client";

import Image from "next/image";
import Link from "next/link";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { FaDrupal, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import configData from "../../data/newConfig.json";

const socialIcons = {
  LinkedIn: <FaLinkedinIn className="h-5 w-5" />,
  GitHub: <FaGithub className="h-5 w-5" />,
  Twitter: <FaXTwitter className="h-5 w-5" />,
  Drupal: <FaDrupal className="h-5 w-5" />,
} as const;

type SocialName = keyof typeof socialIcons;

const Intro = () => {
  const {
    name,
    avatarImageUrl,
    avatarImageAltText,
    email,
    description,
    socials,
  } = configData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-muted-foreground flex items-center gap-1">
            Engineer &bull; Email
            <button
              onClick={copyEmail}
              className="text-muted-foreground hover:text-foreground ml-0.5 cursor-pointer transition-colors"
              aria-label="Copy email"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
          </p>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="text-muted-foreground flex items-center gap-3">
        {socials.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.tooltip}
                className="hover:text-foreground transition-colors"
              >
                {socialIcons[social.name as SocialName]}
              </Link>
            </TooltipTrigger>
            <TooltipContent>{social.tooltip}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </section>
  );
};

export default Intro;
