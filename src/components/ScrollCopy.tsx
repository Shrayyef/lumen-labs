"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type ScrollCopyProps = {
  children: ReactNode;
  className?: string;
};

/** Subtle scroll-linked drift for editorial copy blocks (headline scroll feel). */
export function ScrollCopy({ children, className = "" }: ScrollCopyProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 36, reduce ? 0 : -36]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
