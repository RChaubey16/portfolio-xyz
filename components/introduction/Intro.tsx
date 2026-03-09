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

const Intro = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ruturajchaubey16@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mt-20 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image
          src="/images/me.jpeg"
          alt="Ruturaj"
          width={80}
          height={80}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">Ruturaj</h1>
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
        <p className="text-muted-foreground">
          Love to build cool stuff, content creator & polymath.
        </p>
      </div>
      <div className="text-muted-foreground flex items-center gap-3">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>LinkedIn</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-foreground transition-colors"
            >
              <FaXTwitter className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>X (Twitter)</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>GitHub</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="https://drupal.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Drupal"
              className="hover:text-foreground transition-colors"
            >
              <FaDrupal className="h-5 w-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Drupal</TooltipContent>
        </Tooltip>
      </div>
    </section>
  );
};

export default Intro;
