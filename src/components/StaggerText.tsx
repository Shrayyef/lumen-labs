"use client";

type StaggerTextProps = {
  text: string;
  className?: string;
  as?: "span" | "p" | "h1" | "h2";
  delayMs?: number;
  staggerMs?: number;
};

export function StaggerText({
  text,
  className = "",
  as: Tag = "span",
  delayMs = 0,
  staggerMs = 28,
}: StaggerTextProps) {
  const chars = Array.from(text);

  return (
    <Tag className={`stagger-text ${className}`.trim()} aria-label={text}>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="stagger-text__char"
          style={{
            animationDelay: `${delayMs + index * staggerMs}ms`,
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}
