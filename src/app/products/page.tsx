import type { Metadata } from "next";
import Link from "next/link";
import { ProductAtmosphere } from "@/components/ProductAtmosphere";
import { Reveal } from "@/components/Reveal";
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
        <h1>A focused suite for real daily work.</h1>
        <p>
          Four products spanning learning, car care, private conversion, and AI
          shopping — designed, built, and run by Lumen Labs.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="product-list">
          {products.map((product) => (
            <Reveal key={product.slug} as="article" className="product-row">
              <div className="product-row__meta">
                <h2 className="product-row__name">{product.name}</h2>
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
