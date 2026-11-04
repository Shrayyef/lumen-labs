"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => {
      node.classList.add("is-visible");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const rect = node.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (inView) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(node);
    const fallback = window.setTimeout(show, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
