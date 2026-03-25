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
  LinkedIn: <FaLinkedinIn className="h-4 w-4" />,
  GitHub: <FaGithub className="h-4 w-4" />,
  Twitter: <FaXTwitter className="h-4 w-4" />,
  Drupal: <FaDrupal className="h-4 w-4" />,
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
    <section className="mt-20 flex flex-col gap-5">
      {/* Top row: identity left, avatar right */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-col gap-1.5 pt-1">
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          <p className="text-muted-foreground text-sm">
            Full Stack Engineer{" "}
            <span className="mx-1 opacity-40">·</span>
            QED42
          </p>
        </div>
        <Image
          src={avatarImageUrl}
          alt={avatarImageAltText}
          width={72}
          height={72}
          className="ring-border shrink-0 rounded-full object-cover ring-2"
        />
      </div>

      {/* Bio */}
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {/* Actions row */}
      <div className="flex items-center gap-3">
        <button
          onClick={copyEmail}
          className="text-muted-foreground hover:text-foreground border-border hover:bg-muted/50 flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors"
          aria-label="Copy email"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? "Copied!" : email}
        </button>

        <div className="bg-border h-4 w-px" />

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
      </div>
    </section>
  );
};

export default Intro;
