"use client"

import { useEffect, useState } from "react";

export default function RoleSlider({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!roles?.length) return;

    const interval = setInterval(() => {
      setExiting(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setExiting(false);
      }, 500); // must match animation duration
    }, 2000);

    return () => clearInterval(interval);
  }, [roles]);

  return (
    <p
      className={`text-base text-muted-foreground ${
        exiting ? "animate-slide-out" : "animate-slide-in"
      }`}
    >
      {roles[index]}
    </p>
  );
}
