import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
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
        <h1>Tell us what you want to ship.</h1>
        <p>
          Partnerships, white-label requests, and new product builds all start
          here.
        </p>
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
