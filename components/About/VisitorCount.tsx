"use client";

import { useEffect, useState } from "react";
import { formatNumber } from "@/lib/utils";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const hasVisited = localStorage.getItem("visited");

        // If not visited, call with ?inc=true, otherwise just fetch
        const url = hasVisited ? "/api/visitors" : "/api/visitors?inc=true";

        const res = await fetch(url);
        const data = await res.json();

        if (data.count !== undefined) {
          setCount(data.count);
          if (!hasVisited) {
            localStorage.setItem("visited", "true");
          }
        }
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    };

    fetchCount();
  }, []);

  if (count === null) {
    return <span className="animate-pulse">...</span>;
  }

  return <span>{formatNumber(count)}</span>;
}
