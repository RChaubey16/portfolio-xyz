"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
};

const FadeUp = ({ children, delay = 0 }: FadeUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
