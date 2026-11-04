"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";
import { sectionEnter } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
  y?: number;
};

/**
 * Soft section enter — Casa uses scroll threshold ~0.5 with tween
 * duration .8 / ease [.5,-.01,0,.98]. Keep slight y rise; no hard fade cut.
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  y = 48,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={ref as never}
      className={`reveal ${className}`.trim()}
      initial={reduce ? false : { opacity: 0.001, y }}
      animate={
        inView || reduce
          ? { opacity: 1, y: 0 }
          : { opacity: 0.001, y }
      }
      transition={
        reduce
          ? { duration: 0 }
          : {
              duration: sectionEnter.duration,
              ease: [...sectionEnter.ease],
              delay,
              type: "tween",
            }
      }
    >
      {children}
    </MotionTag>
  );
}
