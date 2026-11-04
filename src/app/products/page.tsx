import type { Metadata } from "next";
import Link from "next/link";
import { ProductAtmosphere } from "@/components/ProductAtmosphere";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Lumen Labs product suite: Aula, ServicesHub, Fileroom, and Bulduk.",
};

export default function ProductsPage() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="section__eyebrow">Products</p>
        <WordReveal
          text="A focused suite for real daily work."
          as="h1"
          immediate
          fromY={180}
          stagger={0.07}
          duration={1.05}
        />
        <WordReveal
          text="Four products spanning learning, car care, private conversion, and AI shopping — designed, built, and run by Lumen Labs."
          as="p"
          immediate
          fromY={100}
          stagger={0.02}
          delay={0.25}
          duration={0.9}
          style={{ marginTop: "1.15rem", maxWidth: "36rem", color: "var(--ink-soft)", fontSize: "1.08rem" }}
        />
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="product-list">
          {products.map((product, index) => (
            <Reveal
              key={product.slug}
              as="article"
              className="product-row"
              delay={index * 0.05}
            >
              <div className="product-row__meta">
                <WordReveal
                  text={product.name}
                  as="h2"
                  className="product-row__name"
                  fromY={120}
                  stagger={0.07}
                />
                <p className="product-row__summary">{product.tagline}</p>
                <p className="product-row__summary">{product.summary}</p>
                <ul className="stack-list" aria-label={`${product.name} stack`}>
                  {product.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link
                  href={`/products/${product.slug}`}
                  className="product-row__link"
                >
                  Open product page
                </Link>
              </div>
              <ProductAtmosphere product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
