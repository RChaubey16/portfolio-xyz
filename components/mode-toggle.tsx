"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  const playSound = () => {
    const audio = new Audio("/audio/light-switch.mp3");
    audio.play().catch((err) => console.error("Audio playback failed:", err));
  };

  return (
    <button
      type="button"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        playSound();
      }}
      className={cn(
        "text-muted-foreground hover:bg-accent hover:text-foreground relative inline-flex size-9 cursor-pointer items-center justify-center rounded-md transition-[color,background-color,transform] active:scale-95",
        className,
      )}
      aria-label="Toggle theme"
    >
      {/* Icons cross-fade + rotate; driven by the .dark class so no hydration flash */}
      <Sun className="size-4 scale-100 rotate-0 transition-transform duration-300 ease-(--ease-out-quint) dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-4 scale-0 rotate-90 transition-transform duration-300 ease-(--ease-out-quint) dark:scale-100 dark:rotate-0" />
    </button>
  );
}
