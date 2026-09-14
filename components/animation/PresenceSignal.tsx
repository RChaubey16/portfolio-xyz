"use client";

import { useEffect, useState } from "react";

import { getIndiaTimeLabel } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Speed = "slow" | "medium" | "fast";

type PresenceState = {
  from: number;
  to: number;
  label: string;
  detail: string;
  dotClass: string;
  speed: Speed;
};

const SPEED_MS: Record<Speed, number> = {
  slow: 1800,
  medium: 1100,
  fast: 650,
};

const STATES: PresenceState[] = [
  {
    from: 0,
    to: 6,
    label: "probably asleep",
    detail: "recharging",
    dotClass: "bg-gray-400",
    speed: "slow",
  },
  {
    from: 6,
    to: 9,
    label: "starting the day",
    detail: "coffee first",
    dotClass: "bg-[#1f6e5c]/70",
    speed: "medium",
  },
  {
    from: 9,
    to: 18,
    label: "at my desk",
    detail: "building w/ Next.js @QED42",
    dotClass: "bg-[#1f6e5c]",
    speed: "fast",
  },
  {
    from: 18,
    to: 23,
    label: "building side projects",
    detail: "tinkering off the clock",
    dotClass: "bg-[#1f6e5c]",
    speed: "medium",
  },
  {
    from: 23,
    to: 24,
    label: "winding down",
    detail: "one more commit",
    dotClass: "bg-gray-400",
    speed: "slow",
  },
];

function getPresence(hour: number): PresenceState {
  return STATES.find((s) => hour >= s.from && hour < s.to) ?? STATES[2];
}

const BAR_COUNT = 6;

const PresenceSignal = () => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <div
        className="h-[52px] rounded-md border border-gray-200 bg-gray-50"
        aria-hidden="true"
      />
    );
  }

  const istLabel = getIndiaTimeLabel(now);
  const hour = Number(istLabel.split(":")[0]);
  const presence = getPresence(hour);
  const duration = SPEED_MS[presence.speed];

  return (
    <div className="flex items-center gap-3 rounded-md border border-gray-200 bg-gray-50 px-3 py-2.5">
      <div className="flex h-4 items-end gap-[3px]" aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <span
            key={i}
            className="signal-bar w-[3px] rounded-full bg-[#1f6e5c]"
            style={{
              animationDuration: `${duration}ms`,
              animationDelay: `${(i * duration) / (BAR_COUNT * 2)}ms`,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1.5 font-mono text-sm text-black">
          <span
            className={cn("h-1.5 w-1.5 rounded-full", presence.dotClass)}
            aria-hidden="true"
          />
          {presence.label}
        </span>
        <span
          className="font-mono text-xs text-gray-600"
          suppressHydrationWarning
        >
          {presence.detail} · {istLabel} IST
        </span>
      </div>
    </div>
  );
};

export default PresenceSignal;
