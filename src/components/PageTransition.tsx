"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { casaEaseIn, casaEaseSoft } from "@/lib/motion";

/**
 * Soft route enter — mirrors Casa’s calm page/section handoff
 * (tween opacity + slight y, no flashy wipe).
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      className="page-transition"
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              duration: 0.7,
              ease: [...casaEaseIn],
              type: "tween",
            }
      }
    >
      <motion.div
        aria-hidden
        className="page-transition__veil"
        initial={reduce ? false : { scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : {
                duration: 0.85,
                ease: [...casaEaseSoft],
                type: "tween",
              }
        }
        style={{ transformOrigin: "top" }}
      />
      {children}
    </motion.div>
  );
}
