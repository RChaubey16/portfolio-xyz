"use client";

import Link from "next/link";

import { Briefcase, Clock, Link2, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { getIndiaTimeLabel } from "@/lib/utils";

import configData from "../../data/newConfig.json";

const MetaInfo = () => {
  const { currentRole, location, email, website } = configData;
  const [istTime, setIstTime] = useState<string | null>(null);

  useEffect(() => {
    setIstTime(getIndiaTimeLabel());
    const id = setInterval(() => setIstTime(getIndiaTimeLabel()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-between">
      <ul className="flex flex-col gap-2.5">
        <li className="flex items-center gap-3">
          <span className="bg-muted border-border flex h-7 w-7 shrink-0 items-center justify-center rounded-md border">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="text-muted-foreground font-mono text-sm">
            {currentRole}{" "}
            <Link
              href="https://www.qed42.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:no-underline"
            >
              @QED42
            </Link>
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="bg-muted border-border flex h-7 w-7 shrink-0 items-center justify-center rounded-md border">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="text-muted-foreground font-mono text-sm">
            {location}
          </span>
        </li>

        <li className="flex items-center gap-3">
          <span className="bg-muted border-border flex h-7 w-7 shrink-0 items-center justify-center rounded-md border">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span
            className="text-muted-foreground font-mono text-sm"
            suppressHydrationWarning
          >
            {istTime ? `${istTime} IST` : "––:–– IST"}
          </span>
        </li>
      </ul>

      <ul className="flex flex-col gap-2.5">
        <li className="flex items-center gap-3">
          <span className="bg-muted border-border flex h-7 w-7 shrink-0 items-center justify-center rounded-md border">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <Link
            href={`mailto:${email}`}
            className="text-muted-foreground hover:text-foreground font-mono text-sm transition-colors"
          >
            {email}
          </Link>
        </li>

        <li className="flex items-center gap-3">
          <span className="bg-muted border-border flex h-7 w-7 shrink-0 items-center justify-center rounded-md border">
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground font-mono text-sm transition-colors"
          >
            {website.replace(/^https?:\/\//, "")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MetaInfo;
