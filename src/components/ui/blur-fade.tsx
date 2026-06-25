import { motion } from "motion/react";
import type { ReactNode } from "react";

interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function BlurFade({ children, delay = 0, className, direction = "up" }: BlurFadeProps) {
  const initial: Record<string, number | string> = { opacity: 0 };
  const animate: Record<string, number | string> = { opacity: 1 };

  if (direction === "up") {
    initial.y = 24;
    animate.y = 0;
  } else if (direction === "down") {
    initial.y = -24;
    animate.y = 0;
  } else if (direction === "left") {
    initial.x = 24;
    animate.x = 0;
  } else if (direction === "right") {
    initial.x = -24;
    animate.x = 0;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
