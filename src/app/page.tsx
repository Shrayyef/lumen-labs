import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { ProductAtmosphere } from "@/components/ProductAtmosphere";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Hero">
        <HeroVisual />
        <div className="hero__content">
          <p className="hero__brand">{site.name}</p>
          <h1 className="hero__headline">
            Products that light the path from idea to everyday use.
          </h1>
          <p className="hero__lede">
            We design and ship software for learning, mobility, privacy, and
            commerce — built as durable product suites, not one-off launches.
          </p>
          <div className="hero__ctas">
            <Link href="/products" className="btn btn--primary">
              Explore products
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section__head">
            <p className="section__eyebrow">Suite</p>
            <h2 className="section__title">Four products. One studio.</h2>
            <p className="section__copy">
              Lumen Labs builds and operates a focused product suite — each one
              solving a concrete problem in the wild.
            </p>
          </Reveal>

          <div className="product-list">
            {products.map((product) => (
              <Reveal key={product.slug} as="article" className="product-row">
                <div className="product-row__meta">
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell split">
          <Reveal>
            <p className="section__eyebrow">Studio</p>
            <h2 className="section__title">Agency craft. Product ownership.</h2>
            <p className="section__copy" style={{ marginTop: "0.85rem" }}>
              We work as a multi-person product studio — strategy, design, and
              engineering under one roof — shipping platforms that stay in
              production.
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <Reveal className="section__head">
            <p className="section__eyebrow">Next</p>
            <h2 className="section__title">Have a product in mind?</h2>
            <p className="section__copy">
              Tell us what you want to ship. We will map scope, stack, and a
              path to production.
            </p>
            <div style={{ marginTop: "0.5rem" }}>
              <Link href="/contact" className="btn btn--primary">
                Contact Lumen Labs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
