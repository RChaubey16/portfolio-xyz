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
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg pointer-events-auto transition-all animate-slide-in">
        <Link href="/">
          <Button
            variant="link"
            size="icon"
            className="cursor-pointer"
            title="Home"
          >
            <Home className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
