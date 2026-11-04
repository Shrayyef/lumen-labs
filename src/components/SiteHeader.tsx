import Link from "next/link";
import { LetterLink } from "@/components/LetterLink";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo" aria-label={`${site.name} home`}>
          <span className="site-logo__text">
            <span className="site-logo__lumen">Lumen</span>
            <span className="site-logo__labs">Labs</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {site.nav.map((item) => (
            <LetterLink
              key={item.href}
              href={item.href}
              label={item.label}
              className="site-nav__link"
            />
          ))}
        </nav>
        <LetterLink
          href="/contact"
          label="Start a project"
          className="site-header__cta"
        />
      </div>
    </header>
  );
}
