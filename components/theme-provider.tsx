"use client";

import { usePathname } from "next/navigation";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const pathname = usePathname();
  const forcedTheme =
    pathname === "/v2" || pathname === "/work" ? "light" : props.forcedTheme;

  return (
    <NextThemesProvider {...props} forcedTheme={forcedTheme}>
      {children}
    </NextThemesProvider>
  );
}
