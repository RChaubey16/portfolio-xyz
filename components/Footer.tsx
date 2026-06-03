import Image from "next/image";
import Link from "next/link";

import { FaDrupal, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import config from "@/data/newConfig.json";

const socialIcons = {
  LinkedIn: <FaLinkedinIn className="h-4 w-4" />,
  GitHub: <FaGithub className="h-4 w-4" />,
  Twitter: <FaXTwitter className="h-4 w-4" />,
  Drupal: <FaDrupal className="h-4 w-4" />,
} as const;

type SocialName = keyof typeof socialIcons;

const Footer = () => {
  const footerImage = config.footerImage;
  const socials = config.socials;
  return (
    <footer className="mx-auto mb-10 w-full max-w-2xl px-4 md:px-0">
      <div className="border-border/40 bg-card w-full overflow-hidden rounded-2xl border shadow-sm">
        <div className="relative aspect-3/1 w-full">
          <Image
            src={footerImage}
            alt="Profile Cover"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>
      <div className="text-muted-foreground my-20 flex flex-col items-center gap-4 text-sm">
        <p>&copy; 2026 Ruturaj Chaubey. All rights reserved.</p>
        <div className="flex items-center gap-4">
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
        <div className="flex items-center gap-3">
          <Link href="/llms.txt" className="hover:text-foreground transition-colors">
            llms.txt
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/feed.xml" className="hover:text-foreground transition-colors">
            RSS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
