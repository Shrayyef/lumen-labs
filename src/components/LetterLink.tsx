"use client";

import Link from "next/link";

type LetterLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function LetterLink({ href, label, className = "" }: LetterLinkProps) {
  const chars = Array.from(label);

  return (
    <Link href={href} className={`letter-link ${className}`.trim()}>
      <span className="letter-link__sr">{label}</span>
      <span className="letter-link__track" aria-hidden="true">
        <span className="letter-link__row letter-link__row--base">
          {chars.map((char, index) => (
            <span
              key={`b-${index}`}
              className="letter-link__char"
              style={{ transitionDelay: `${index * 18}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className="letter-link__row letter-link__row--hover">
          {chars.map((char, index) => (
            <span
              key={`h-${index}`}
              className="letter-link__char"
              style={{ transitionDelay: `${index * 18}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}
