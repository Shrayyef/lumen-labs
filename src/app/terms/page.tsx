import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `${site.name} terms of use stub.`,
};

export default function TermsPage() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="section__eyebrow">Legal</p>
        <h1>Terms</h1>
        <p>Basic terms for using the Lumen Labs website.</p>
      </header>

      <section className="section prose-block" style={{ paddingTop: 0 }}>
        <p>
          By using this website you agree to these terms. The site provides
          general information about Lumen Labs and its products. It does not
          create a client engagement unless we confirm one in writing.
        </p>
        <h2>Content</h2>
        <p>
          Product descriptions, visuals, and copy on this site are for
          orientation. Features and availability may change as products evolve.
        </p>
        <h2>Liability</h2>
        <p>
          The website is provided as-is. To the extent permitted by law, Lumen
          Labs is not liable for damages arising from use of or reliance on this
          informational site.
        </p>
        <h2>Contact</h2>
        <p>
          Questions: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </section>
    </div>
  );
}
