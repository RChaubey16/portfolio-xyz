"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  // { href: "/resume", label: "Resume" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-none fixed top-0 right-0 left-0 z-50 mx-auto max-w-2xl">
      <div className="bg-background/80 pointer-events-auto relative flex items-center justify-between gap-1 px-4 py-2 backdrop-blur-md transition-all md:px-0">
        <div className="flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                pathname === href
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent/50"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <ModeToggle />

        {/* blurred bottom edge */}
        <div className="to-background/80 pointer-events-none absolute bottom-0 left-0 h-6 w-full bg-gradient-to-b from-transparent blur-md" />
      </div>
    </nav>
  );
};

export default Navbar;
