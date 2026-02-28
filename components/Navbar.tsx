"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();

  // Only show the navbar if we are not on the home page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="pointer-events-none fixed top-6 right-0 left-0 z-50 flex justify-center">
      <div className="bg-background/80 border-border animate-slide-in pointer-events-auto rounded-full border shadow-lg backdrop-blur-md transition-all">
        <Link href="/">
          <Button
            variant="link"
            size="icon"
            className="cursor-pointer"
            title="Home"
          >
            <Home className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
