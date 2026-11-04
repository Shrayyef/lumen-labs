"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { linkRoll } from "@/lib/motion";

type LetterLinkProps = {
  href: string;
  label: string;
  className?: string;
};

/**
 * Casa Momo “Link Roll”: per-letter vertical swap on hover.
 * Source timings: duration .7, ease [.52,0,0,1], stagger .01.
 */
export function LetterLink({ href, label, className = "" }: LetterLinkProps) {
  const [rolled, setRolled] = useState(false);
  const reduce = useReducedMotion();
  const chars = Array.from(label);

  return (
    <Link
      href={href}
      className={`letter-link ${className}`.trim()}
      onMouseEnter={() => setRolled(true)}
      onMouseLeave={() => setRolled(false)}
      onFocus={() => setRolled(true)}
      onBlur={() => setRolled(false)}
    >
      <span className="letter-link__sr">{label}</span>
      <span className="letter-link__track" aria-hidden="true">
        {chars.map((char, index) => {
          const transition = reduce
            ? { duration: 0 }
            : {
                duration: linkRoll.duration,
                ease: linkRoll.ease,
                delay: linkRoll.delay + index * linkRoll.stagger,
              };

          return (
            <span key={`${char}-${index}`} className="letter-link__slot">
              <span className="letter-link__ghost">
                {char === " " ? "\u00A0" : char}
              </span>
              <motion.span
                className="letter-link__glyph"
                initial={false}
                animate={{ y: rolled ? "-100%" : "0%" }}
                transition={transition}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
              <motion.span
                className="letter-link__glyph letter-link__glyph--alt"
                initial={false}
                animate={{ y: rolled ? "0%" : "100%" }}
                transition={transition}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          );
        })}
      </span>
    </Link>
  );
}
