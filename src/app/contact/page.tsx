import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} about products, partnerships, or a new build.`,
};

export default function ContactPage() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="section__eyebrow">Contact</p>
        <WordReveal
          text="Tell us what you want to ship."
          as="h1"
          immediate
          fromY={170}
          stagger={0.07}
          duration={1.05}
        />
        <WordReveal
          text="Partnerships, white-label requests, and new product builds all start here."
          as="p"
          immediate
          fromY={100}
          stagger={0.02}
          delay={0.22}
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
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal className="prose-block">
            <h2>Direct</h2>
            <p>
              Email{" "}
              <a href={`mailto:${site.email}`} className="product-row__link">
                {site.email}
              </a>
            </p>
            <p>{site.location}</p>
            <h2>What helps</h2>
            <ul className="feature-list">
              <li>The audience and problem you are solving</li>
              <li>Web, mobile, or both</li>
              <li>Timeline and any hard constraints</li>
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
