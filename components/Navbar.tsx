"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  // { href: "/projects", label: "Projects" },
  // { href: "/photos", label: "Photos" },
  // { href: "/blog", label: "Blog" },
  // { href: "/resume", label: "Resume" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50 mx-auto max-w-2xl">
      <div className="bg-background/90 border-border pointer-events-auto relative flex items-center justify-between gap-1 border-b px-4 py-3 backdrop-blur-md transition-all md:px-0">
        <div className="flex items-center gap-5 font-mono text-sm tracking-wide">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`border-b-2 pb-1 transition-colors ${
                pathname === href
                  ? "border-pine text-pine"
                  : "hover:text-foreground text-muted-foreground hover:border-border border-transparent"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
