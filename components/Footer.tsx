import Image from "next/image";

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
      <p className="my-20 text-muted-foreground text-center text-sm">
        &copy; 2026 Ruturaj Chaubey. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
