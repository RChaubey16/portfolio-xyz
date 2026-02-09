import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIndiaTimeLabel(
  date: Date = new Date(),
  userTimeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
): string {
  const INDIA_TZ = "Asia/Kolkata";

  // Format India time
  const indiaTime = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: INDIA_TZ,
  }).format(date);

  // If user is in India, return just the time
  if (userTimeZone === INDIA_TZ) {
    return indiaTime;
  }

  // Helper: timezone offset in hours for a given TZ
  const getOffsetHours = (timeZone: string) => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(date);

    const value = (type: string) =>
      Number(parts.find((p) => p.type === type)?.value);

    const zonedDate = new Date(
      value("year"),
      value("month") - 1,
      value("day"),
      value("hour"),
      value("minute"),
      value("second")
    );

    return (zonedDate.getTime() - date.getTime()) / (1000 * 60 * 60);
  };

  const indiaOffset = getOffsetHours(INDIA_TZ);
  const userOffset = getOffsetHours(userTimeZone);

  const diff = Math.round(indiaOffset - userOffset);

  if (diff === 0) {
    return indiaTime;
  }

  return `${indiaTime}`;
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
}
