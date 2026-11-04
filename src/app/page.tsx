import Link from "next/link";
import { HeroBrand } from "@/components/HeroBrand";
import { HeroVisual } from "@/components/HeroVisual";
import { ProductAtmosphere } from "@/components/ProductAtmosphere";
import { Reveal } from "@/components/Reveal";
import { ScrollCopy } from "@/components/ScrollCopy";
import { WordReveal } from "@/components/WordReveal";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { textRevealBody } from "@/lib/motion";

const philosophy = [
  {
    num: "01",
    title: "Craft",
    copy: "Quiet interfaces, clear systems, and the kind of detail that makes software feel considered rather than assembled.",
  },
  {
    num: "02",
    title: "Warmth",
    copy: "Products should feel lived-in — approachable, human, and ready for the mess of real daily work.",
  },
  {
    num: "03",
    title: "Ownership",
    copy: "We stay with what we ship. Design debt, ops, and iteration are part of the product — not an afterthought.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Hero">
        <HeroVisual />
        <div className="hero__content">
          <HeroBrand />
          <div className="hero__lede-wrap">
            <WordReveal
              text="Between quiet craft and durable systems, a studio that ships products people return to every day."
              as="p"
              className="hero__lede"
              immediate
              fromY={textRevealBody.fromY}
              rotateFrom={textRevealBody.rotateFrom}
              stagger={textRevealBody.stagger}
              delay={0.55}
              duration={textRevealBody.duration}
              ease={textRevealBody.ease}
            />
            <Reveal className="hero__ctas" delay={0.85} y={24}>
              <Link href="/products" className="btn btn--primary">
                Explore products
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Talk to us
              </Link>
            </Reveal>
            <Reveal delay={1} y={16}>
              <p className="hero__scroll-hint">Scroll · Four products</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section__head">
            <p className="section__eyebrow">Suite</p>
            <WordReveal
              text="Four products. One studio."
              as="h2"
              className="section__title"
              fromY={160}
              stagger={0.08}
            />
            <WordReveal
              text="Lumen Labs designs and operates a focused suite — learning, mobility, privacy, and commerce — built as durable product platforms."
              as="p"
              className="section__copy"
              fromY={100}
              stagger={0.02}
              delay={0.15}
              duration={0.9}
            />
          </Reveal>

          <div className="product-list">
            {products.map((product, index) => (
              <Reveal
                key={product.slug}
                as="article"
                className="product-row"
                delay={index * 0.04}
              >
                <div className="product-row__meta">
                  <p className="product-row__index">
                    N°{String(index + 1).padStart(2, "0")}
                  </p>
                  <WordReveal
                    text={product.name}
                    as="h3"
                    className="product-row__name"
                    fromY={120}
                    stagger={0.07}
                  />
                  <p className="product-row__summary">{product.summary}</p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="product-row__link"
                  >
                    View {product.name}
                  </Link>
                </div>
                <ProductAtmosphere product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="belief" aria-label="Belief">
        <ScrollCopy>
          <WordReveal
            text="A product deserves as much care in the hand as it did on the whiteboard."
            as="p"
            className="belief__text"
            fromY={180}
            stagger={0.06}
            duration={1.1}
          />
        </ScrollCopy>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal className="section__head">
            <p className="section__eyebrow">Philosophy</p>
            <WordReveal
              text="How we build"
              as="h2"
              className="section__title"
              fromY={150}
              stagger={0.09}
            />
            <p className="section__copy">
              Boutique agency tone with product ownership — strategy, design,
              and engineering under one roof.
            </p>
          </Reveal>
          <div className="philosophy">
            {philosophy.map((item, index) => (
              <Reveal
                key={item.num}
                as="article"
                className="philosophy__item"
                delay={index * 0.08}
              >
                <p className="philosophy__num">{item.num}</p>
                <WordReveal
                  text={item.title}
                  as="h3"
                  fromY={100}
                  stagger={0.08}
                />
                <p>{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="shell split">
          <Reveal>
            <p className="section__eyebrow">Studio</p>
            <WordReveal
              text="Agency craft. Product ownership."
              as="h2"
              className="section__title"
              fromY={160}
              stagger={0.07}
            />
            <p className="section__copy" style={{ marginTop: "0.85rem" }}>
              We work as a multi-person product studio — shipping platforms that
              stay in production, not one-off launches.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="services-list">
              <article>
                <h3>Product design & engineering</h3>
                <p>
                  End-to-end delivery across web and native — from discovery to
                  App Store and Play Store releases.
                </p>
              </article>
              <article>
                <h3>SaaS & marketplace systems</h3>
                <p>
                  Billing, jobs, realtime flows, and operational tooling for
                  products that need to scale day one.
                </p>
              </article>
              <article>
                <h3>Privacy-first mobile</h3>
                <p>
                  On-device processing and native performance when cloud is the
                  wrong default.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section__head">
            <p className="section__eyebrow">Next</p>
            <WordReveal
              text="Have a product in mind?"
              as="h2"
              className="section__title"
              fromY={150}
              stagger={0.08}
            />
            <p className="section__copy">
              Tell us what you want to ship. We will map scope, stack, and a
              path to production.
            </p>
            <div
              style={{
                marginTop: "0.65rem",
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="btn btn--ink">
                Contact {site.name}
              </Link>
              <Link href="/about" className="btn btn--outline">
                About the studio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
