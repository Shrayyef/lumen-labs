"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { WordReveal } from "@/components/WordReveal";
import { textRevealHero } from "@/lib/motion";

/**
 * Hero wordmark with Casa-style masked word rise + subtle scroll drift
 * (headline scroll feel from casamomo.at).
 */
export function HeroBrand() {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.75, 1],
    [1, 1, reduce ? 1 : 0.35],
  );

  return (
    <motion.h1 ref={ref} className="hero__brand" style={{ y, opacity }}>
      <WordReveal
        text="Lumen"
        as="span"
        className="hero__brand-line"
        immediate
        fromY={textRevealHero.fromY}
        rotateFrom={textRevealHero.rotateFrom}
        stagger={textRevealHero.stagger}
        delay={0.08}
        duration={textRevealHero.duration}
        ease={textRevealHero.ease}
      />
      <WordReveal
        text="Labs"
        as="span"
        className="hero__brand-line"
        immediate
        fromY={textRevealHero.fromY}
        rotateFrom={textRevealHero.rotateFrom}
        stagger={textRevealHero.stagger}
        delay={0.22}
        duration={textRevealHero.duration}
        ease={textRevealHero.ease}
      />
    </motion.h1>
  );
}
