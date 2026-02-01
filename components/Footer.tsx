import Image from "next/image";
import config from "@/data/newConfig.json";

const Footer = () => {
  const footerImage = config.footerImage;
  return (
    <footer className="mt-20 mb-10 w-full overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm">
      <div className="relative aspect-3/1 w-full">
        <Image
          src={footerImage}
          alt="Profile Cover"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>
    </footer>
  );
};

export default Footer;
