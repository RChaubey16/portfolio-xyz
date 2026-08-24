"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { FaDrupal, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import TerminalStatus from "@/components/animation/TerminalStatus";
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
          <p className="text-muted-foreground">I tell Claude what to do</p>
        </div>
      </div>

      <ul className="text-muted-foreground flex flex-col gap-2.5">
        {description.map((item, index) => (
          <li key={index} className="flex gap-2 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40" />
            <span>
              {item.split("QED42").map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <Fragment key={i}>
                    {part}
                    <Link
                      href="https://www.qed42.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-2 hover:no-underline"
                    >
                      QED42
                    </Link>
                  </Fragment>
                ) : (
                  part
                ),
              )}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button
          onClick={copyEmail}
          className="text-muted-foreground hover:text-pine border-border hover:bg-accent flex items-center gap-2 rounded-md border px-3.5 py-1.5 font-mono text-sm transition-colors"
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
                  className="hover:text-pine transition-colors"
                >
                  {socialIcons[social.name as SocialName]}
                </Link>
              </TooltipTrigger>
              <TooltipContent>{social.tooltip}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>

      <TerminalStatus />
    </section>
  );
};

export default Intro;
