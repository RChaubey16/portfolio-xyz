import type { ComponentType, ReactNode } from "react";

import { Activity } from "lucide-react";

import PresenceSignal from "@/components/animation/PresenceSignal";

export type LabEntry = {
  slug: string;
  name: string;
  description: string;
  detail: string;
  icon: ComponentType<{ className?: string }>;
  element: ReactNode;
};

export const labEntries: LabEntry[] = [
  {
    slug: "presence-signal",
    name: "Presence Signal",
    description:
      'A status line derived from the actual time in Pune, not a fake "online" dot.',
    detail:
      "Presence Signal reads the current hour in Pune (IST) and maps it to a real status — asleep, starting the day, at my desk, building side projects, or winding down — instead of a hardcoded \"online\" indicator. The signal bars next to it speed up or slow down to match: fast during work hours, a single slow pulse late at night.",
    icon: Activity,
    element: <PresenceSignal />,
  },
];
