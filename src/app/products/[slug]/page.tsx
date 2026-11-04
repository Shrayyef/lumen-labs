import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductAtmosphere } from "@/components/ProductAtmosphere";
import { Reveal } from "@/components/Reveal";
import { getProduct, products } from "@/lib/products";

type ProductPageProps = PageProps<"/products/[slug]">;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((item) => item.slug !== product.slug);

  return (
    <div className="shell">
      <header className="page-hero">
        <p className="section__eyebrow">Product</p>
        <h1>{product.name}</h1>
        <p>{product.tagline}</p>
      </header>

      <Reveal>
        <ProductAtmosphere product={product} large />
      </Reveal>

      <section className="section">
        <div className="split">
          <Reveal className="prose-block">
            <p className="section__eyebrow">Overview</p>
            <h2 className="section__title" style={{ fontSize: "1.8rem" }}>
              {product.summary}
            </h2>
            <p>{product.description}</p>
            <ul className="feature-list">
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <div className="services-list">
              <article>
                <h3>Platforms</h3>
                <p>{product.platforms.join(" · ")}</p>
              </article>
              <article>
                <h3>Stack</h3>
                <ul className="stack-list">
                  {product.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article>
                <h3>Work with us</h3>
                <p>
                  Interested in white-label, partnership, or a related build?
                </p>
                <Link href="/contact" className="product-row__link">
                  Contact Lumen Labs
                </Link>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="section__head">
          <p className="section__eyebrow">More products</p>
          <h2 className="section__title">Continue exploring the suite</h2>
        </Reveal>
        <div className="product-list">
          {others.map((item) => (
            <Reveal key={item.slug} as="article" className="product-row">
              <div className="product-row__meta">
                <h3 className="product-row__name">{item.name}</h3>
                <p className="product-row__summary">{item.summary}</p>
                <Link
                  href={`/products/${item.slug}`}
                  className="product-row__link"
                >
                  View {item.name}
                </Link>
              </div>
              <ProductAtmosphere product={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
