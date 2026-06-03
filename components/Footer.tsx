import Image from "next/image";
import Link from "next/link";

import config from "@/data/newConfig.json";

const Footer = () => {
  const footerImage = config.footerImage;
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
      <div className="text-muted-foreground my-20 flex flex-col items-center gap-1 text-sm">
        <p>&copy; 2026 Ruturaj Chaubey. All rights reserved.</p>
        <Link
          href="/llms.txt"
          className="hover:text-foreground transition-colors"
        >
          llms.txt
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
