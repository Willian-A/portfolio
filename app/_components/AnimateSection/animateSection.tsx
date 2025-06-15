"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

interface AnimateSectionProps {
  children: ReactNode;
  time?: number;
}

export const AnimateSection = ({
  children,
  time = 1000,
}: AnimateSectionProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), time);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence initial={false}>
      {show ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          key="box"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
