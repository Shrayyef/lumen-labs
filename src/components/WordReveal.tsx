"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
} from "motion/react";
import { useMemo, useRef, type CSSProperties, type ElementType } from "react";
import { textReveal } from "@/lib/motion";

type WordRevealProps = {
  text: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  fromY?: number;
  rotateFrom?: number;
  blur?: number;
  stagger?: number;
  delay?: number;
  duration?: number;
  ease?: readonly [number, number, number, number];
  once?: boolean;
  /** When true, animate immediately (hero load) without waiting for scroll. */
  immediate?: boolean;
};

/**
 * Casa Momo text reveal: each word rises through an overflow mask with a
 * slight rotate — opacity stays at 1 (clip, not fade).
 */
export function WordReveal({
  text,
  as: Tag = "span",
  className = "",
  style,
  fromY = textReveal.fromY,
  rotateFrom = textReveal.rotateFrom,
  blur = textReveal.blur,
  stagger = textReveal.stagger,
  delay = textReveal.delay,
  duration = textReveal.duration,
  ease = textReveal.ease,
  once = true,
  immediate = false,
}: WordRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once, amount: 0.2 });
  const active = immediate || inView || !!reduce;

  const words = useMemo(
    () => (text.trim() ? text.trim().split(/\s+/g) : []),
    [text],
  );

  const variants = useMemo(() => {
    const transitionFor = (index: number): Transition =>
      reduce
        ? { duration: 0 }
        : {
            duration,
            ease: [...ease] as [number, number, number, number],
            delay: delay + index * stagger,
            type: "tween",
          };

    return {
      hidden: {
        y: fromY,
        rotate: rotateFrom,
        ...(blur > 0 ? { filter: `blur(${blur}px)` } : {}),
        opacity: 1,
      },
      visible: (index: number) => ({
        y: 0,
        rotate: 0,
        ...(blur > 0 ? { filter: "blur(0px)" } : {}),
        opacity: 1,
        transition: transitionFor(index),
      }),
    };
  }, [blur, delay, duration, ease, fromY, reduce, rotateFrom, stagger]);

  return (
    <Tag
      ref={ref as never}
      className={`word-reveal ${className}`.trim()}
      style={style}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="word-reveal__mask">
          <motion.span
            className="word-reveal__word"
            custom={index}
            variants={variants}
            initial={reduce ? false : "hidden"}
            animate={active ? "visible" : "hidden"}
            aria-hidden="true"
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </Tag>
  );
}
