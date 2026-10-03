"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const STATUSES = ["full-stack engineer @ QED42", "based in Pune, India"];

const TerminalStatus = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  // Auto-rotation stops on hover and when the OS asks for reduced motion
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATUSES.length);
    }, 3200);
    return () => clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <div
      className="text-link flex items-center gap-1.5 font-mono text-[13px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="sr-only">{STATUSES.join(", ")}</span>
      <span aria-hidden="true">~</span>
      <span
        aria-hidden="true"
        className="relative flex items-center gap-1.5 overflow-hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={STATUSES[index]}
            initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="truncate"
          >
            {STATUSES[index]}
          </motion.span>
        </AnimatePresence>
        <span
          className="bg-link/70 cursor-blink h-3 w-[6px] shrink-0"
          aria-hidden="true"
        />
      </span>
    </div>
  );
};

export default TerminalStatus;
