import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo" aria-label={`${site.name} home`}>
          <span className="site-logo__mark" aria-hidden="true" />
          <span className="site-logo__text">{site.name}</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="site-header__cta">
          Start a project
        </Link>
      </div>
    </header>
  );
}
