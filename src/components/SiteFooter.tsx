import Link from "next/link";
import { LetterLink } from "@/components/LetterLink";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{site.name}</p>
          <p className="site-footer__tagline">{site.tagline}</p>
        </div>
        <div className="site-footer__cols">
          <div>
            <p className="site-footer__label">Studio</p>
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <LetterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="site-footer__label">Products</p>
            <ul>
              {products.map((product) => (
                <li key={product.slug}>
                  <LetterLink
                    href={`/products/${product.slug}`}
                    label={product.name}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="site-footer__label">Legal</p>
            <ul>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>© 2026 {site.name}</p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
