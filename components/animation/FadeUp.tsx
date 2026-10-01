import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// Soft rise-in on page load. Pure CSS, so content is in the HTML and
// visible without JS; reduced motion is handled globally in globals.css
const FadeUp = ({ children, delay = 0, className }: FadeUpProps) => {
  return (
    <div
      className={cn("animate-fade-up", className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};

export default FadeUp;
