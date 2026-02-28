"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type FadeInOnViewProps = {
  children: ReactNode;
};

const Fade = ({ children }: FadeInOnViewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
