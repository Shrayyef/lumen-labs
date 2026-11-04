"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, type ReactNode } from "react";
import { useTransitionChrome } from "@/components/TransitionChrome";
import { casaEaseIn, casaEaseSoft } from "@/lib/motion";

function PageTransitionInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { setVeiling } = useTransitionChrome();

  useEffect(() => {
    if (reduce) {
      setVeiling(false);
      return;
    }
    setVeiling(true);
  }, [pathname, reduce, setVeiling]);

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
      {reduce ? null : (
        <motion.div
          aria-hidden
          className="page-transition__veil"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 0.85,
            ease: [...casaEaseSoft],
            type: "tween",
          }}
          style={{ transformOrigin: "top" }}
          onAnimationStart={() => setVeiling(true)}
          onAnimationComplete={() => setVeiling(false)}
        />
      )}
      {children}
    </motion.div>
  );
}

function PageTransitionFallback({ children }: { children: ReactNode }) {
  const { setVeiling } = useTransitionChrome();

  useEffect(() => {
    setVeiling(true);
  }, [setVeiling]);

  return (
    <div className="page-transition">
      <div className="page-transition__veil" aria-hidden style={{ transform: "scaleY(1)", transformOrigin: "top" }} />
      {children}
    </div>
  );
}

/**
 * Soft route enter — mirrors Casa’s calm page/section handoff.
 * `usePathname` lives under Suspense to satisfy Next.js URL-data rules.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<PageTransitionFallback>{children}</PageTransitionFallback>}>
      <PageTransitionInner>{children}</PageTransitionInner>
    </Suspense>
  );
}
