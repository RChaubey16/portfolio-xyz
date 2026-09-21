"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaDrupal, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import config from "@/data/newConfig.json";

const socialIcons = {
  LinkedIn: <FaLinkedinIn className="h-4 w-4" />,
  GitHub: <FaGithub className="h-4 w-4" />,
  Twitter: <FaXTwitter className="h-4 w-4" />,
  Drupal: <FaDrupal className="h-4 w-4" />,
} as const;

type SocialName = keyof typeof socialIcons;

const Footer = () => {
  const socials = config.socials;
  const pathname = usePathname();

  if (pathname === "/work") {
    return null;
  }

  return (
    <footer className="mx-auto mb-10 w-full max-w-xl px-4 md:px-0">
      <div className="border-border text-muted-foreground flex flex-col items-center gap-4 border-t pt-6 pb-4 font-mono text-xs">
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.tooltip}
                  className="hover:text-rust transition-colors"
                >
                  {socialIcons[social.name as SocialName]}
                </Link>
              </TooltipTrigger>
              <TooltipContent>{social.tooltip}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <p>© 2026 Ruturaj Chaubey</p>
      </div>
    </footer>
  );
};

export default Footer;
