import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — a multi-person product studio.`,
};

export default function AboutPage() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="section__eyebrow">About</p>
        <WordReveal
          text="A studio built around shipping products."
          as="h1"
          immediate
          fromY={180}
          stagger={0.07}
          duration={1.05}
        />
        <WordReveal
          text="Lumen Labs is a multi-person product studio. We design, engineer, and operate software products — not founder-personal portfolios, not slideware."
          as="p"
          immediate
          fromY={100}
          stagger={0.02}
          delay={0.25}
          duration={0.9}
          style={{
            marginTop: "1.15rem",
            maxWidth: "36rem",
            color: "var(--ink-soft)",
            fontSize: "1.08rem",
          }}
        />
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="split">
          <Reveal className="prose-block">
            <h2>How we work</h2>
            <p>
              We keep a small suite of products in production and take on
              selective partnership and build work. The through-line is the same:
              clear product intent, strong craft, and systems that hold up after
              launch day.
            </p>
            <p>
              Our current suite covers learning platforms, marketplace
              operations, privacy-first mobile tools, and AI-assisted shopping —
              each with its own audience and stack, all under one studio.
            </p>
          </Reveal>
          <Reveal>
            <div className="services-list">
              <article>
                <h3>Product ownership</h3>
                <p>
                  We stay with products past the first release — design debt,
                  ops, and iteration included.
                </p>
              </article>
              <article>
                <h3>Cross-platform by default</h3>
                <p>
                  Web, iOS, and Android when the audience needs them; native when
                  privacy or performance demands it.
                </p>
              </article>
              <article>
                <h3>Studio, not celebrity</h3>
                <p>
                  The brand is Lumen Labs. The work is collective. The products
                  speak first.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="section__head">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Want to collaborate?</h2>
          <p className="section__copy">
            Reach out for partnerships, white-label opportunities, or a new
            product build.
          </p>
          <div style={{ marginTop: "0.35rem" }}>
            <Link href="/contact" className="btn btn--ink">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
