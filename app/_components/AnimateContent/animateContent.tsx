"use client";

import { motion } from "motion/react";

const ANIMATIONS = {
  default: { opacity: [0, 1], display: "flex" },
  write: { display: "flex", width: ["0%", "100%"] },
};

interface AnimateContentProps
  extends Omit<
    React.HTMLAttributes<HTMLSpanElement>,
    "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart"
  > {
  time?: number;
  delay?: number;
  repeatDelay?: number;
  animation?: keyof typeof ANIMATIONS;
  repeat?: boolean;
}

export const AnimateContent = ({
  children,
  time = 1,
  repeatDelay = 0,
  animation = "default",
  repeat = true,
  delay = 0,
  ...rest
}: AnimateContentProps) => {
  return (
    <>
      <motion.span
        initial={{ display: "none" }}
        animate={{
          ...ANIMATIONS[animation],
          transition: {
            duration: time,
            repeat: repeat ? Infinity : undefined,
            ease: "easeInOut",
            repeatType: "reverse",
            repeatDelay: repeatDelay,
            delay: delay,
          },
        }}
        {...rest}
      >
        {children}
      </motion.span>
    </>
  );
};
