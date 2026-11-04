import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { ProductAtmosphere } from "@/components/ProductAtmosphere";
import { Reveal } from "@/components/Reveal";
import { StaggerText } from "@/components/StaggerText";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

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
          <h1 className="hero__brand">
            <span className="hero__brand-line">
              <StaggerText text="Lumen" delayMs={40} staggerMs={42} />
            </span>
            <span className="hero__brand-line">
              <StaggerText text="Labs" delayMs={220} staggerMs={42} />
            </span>
          </h1>
          <div className="hero__lede-wrap">
            <p className="hero__lede">
              Between quiet craft and durable systems, a studio that ships
              products people return to every day.
            </p>
            <div className="hero__ctas">
              <Link href="/products" className="btn btn--primary">
                Explore products
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Talk to us
              </Link>
            </div>
            <p className="hero__scroll-hint">Scroll · Four products</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section__head">
            <p className="section__eyebrow">Suite</p>
            <h2 className="section__title">Four products. One studio.</h2>
            <p className="section__copy">
              Lumen Labs designs and operates a focused suite — learning,
              mobility, privacy, and commerce — built as durable product
              platforms.
            </p>
          </Reveal>

          <div className="product-list">
            {products.map((product, index) => (
              <Reveal key={product.slug} as="article" className="product-row">
                <div className="product-row__meta">
                  <p className="product-row__index">
                    N°{String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="product-row__name">{product.name}</h3>
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
        <Reveal>
          <p className="belief__text">
            A product deserves as much care in the hand as it did on the
            whiteboard.
          </p>
        </Reveal>
      </section>

      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal className="section__head">
            <p className="section__eyebrow">Philosophy</p>
            <h2 className="section__title">How we build</h2>
            <p className="section__copy">
              Boutique agency tone with product ownership — strategy, design,
              and engineering under one roof.
            </p>
          </Reveal>
          <div className="philosophy">
            {philosophy.map((item) => (
              <Reveal key={item.num} as="article" className="philosophy__item">
                <p className="philosophy__num">{item.num}</p>
                <h3>{item.title}</h3>
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
            <h2 className="section__title">Agency craft. Product ownership.</h2>
            <p className="section__copy" style={{ marginTop: "0.85rem" }}>
              We work as a multi-person product studio — shipping platforms that
              stay in production, not one-off launches.
            </p>
          </Reveal>
          <Reveal>
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
            <h2 className="section__title">Have a product in mind?</h2>
            <p className="section__copy">
              Tell us what you want to ship. We will map scope, stack, and a
              path to production.
            </p>
            <div style={{ marginTop: "0.65rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
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
