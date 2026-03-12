"use client";

import { usePathname } from "next/navigation";

import { ReactNode } from "react";

import FadeUp from "@/components/animation/FadeUp";

const FooterFadeUp = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <FadeUp key={pathname} delay={0.3}>
      {children}
    </FadeUp>
  );
};

export default FooterFadeUp;
