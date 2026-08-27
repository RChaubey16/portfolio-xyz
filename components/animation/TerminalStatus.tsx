"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const STATUSES = [
  "I tell Claude what to do",
  "full-stack engineer @ QED42",
  "based in Pune, India",
];

const TerminalStatus = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATUSES.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
      <span className="text-pine">ruturaj@site</span>
      <span>~</span>
      <span className="text-pine">%</span>
      <span className="flex basis-full items-center gap-2 sm:basis-auto">
        <AnimatePresence mode="wait">
          <motion.span
            key={STATUSES[index]}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.25 }}
          >
            {STATUSES[index]}
          </motion.span>
        </AnimatePresence>
        <span className="bg-pine cursor-blink h-3.5 w-[7px]" aria-hidden="true" />
      </span>
    </div>
  );
};

export default TerminalStatus;
