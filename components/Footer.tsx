import Image from "next/image";
import Link from "next/link";

import { FaDrupal, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import config from "@/data/newConfig.json";

const socialIcons = {
  LinkedIn: <FaLinkedinIn className="size-4" />,
  GitHub: <FaGithub className="size-4" />,
  Twitter: <FaXTwitter className="size-4" />,
  Drupal: <FaDrupal className="size-4" />,
} as const;

type SocialName = keyof typeof socialIcons;

// No top navbar, so the footer is the site map
const siteLinks = [
  { label: "Work", href: "/work" },
  { label: "Projects", href: "/projects" },
  { label: "Talks", href: "/talks" },
  { label: "Resume", href: "/resume" },
];

const Footer = () => {
  const footerImage = config.footerImage;
  const socials = config.socials;
  return (
    <footer className="mx-auto mb-10 w-full max-w-2xl px-4 md:px-0">
      <div className="group bg-muted relative aspect-3/1 w-full overflow-hidden rounded-xl border">
        <Image
          src={footerImage}
          alt="Profile Cover"
          fill
          sizes="(max-width: 672px) 100vw, 672px"
          className="object-cover transition-transform duration-700 ease-(--ease-out-quint) group-hover:scale-[1.02]"
        />
      </div>
      <nav aria-label="Site" className="mt-8">
        <ul className="-mx-2 flex flex-wrap gap-x-1 gap-y-1 text-sm">
          {siteLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted-foreground hover:bg-accent hover:text-link inline-flex h-9 items-center rounded-md px-2 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-muted-foreground mt-6 flex flex-col-reverse items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row">
        <p className="font-mono">
          {"© 2026 ruturaj — while (coffee) { code(); }"}
        </p>
        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.tooltip}
                  className="hover:bg-accent hover:text-foreground inline-flex size-9 items-center justify-center rounded-md transition-colors"
                >
                  {socialIcons[social.name as SocialName]}
                </Link>
              </TooltipTrigger>
              <TooltipContent sideOffset={4}>{social.tooltip}</TooltipContent>
            </Tooltip>
          ))}
          <span className="bg-border mx-2 h-3.5 w-px" aria-hidden="true" />
          <Link
            href="/llms.txt"
            className="hover:text-foreground px-1.5 py-1 transition-colors"
          >
            llms.txt
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
