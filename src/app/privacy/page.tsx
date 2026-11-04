import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `${site.name} privacy policy stub.`,
};

export default function PrivacyPage() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="section__eyebrow">Legal</p>
        <h1>Privacy</h1>
        <p>How Lumen Labs handles information on this website.</p>
      </header>

      <section className="section prose-block" style={{ paddingTop: 0 }}>
        <p>
          This website is an informational studio presence. We do not sell
          personal data. If you contact us by email or through the contact form,
          we use the details you provide only to respond to your inquiry.
        </p>
        <h2>Information we receive</h2>
        <p>
          Messages you send may include your name, email address, and project
          details. Server and hosting logs may collect standard technical data
          such as IP address, browser type, and request timing.
        </p>
        <h2>Product-specific privacy</h2>
        <p>
          Individual products in the Lumen Labs suite — including Aula,
          ServicesHub, Fileroom, and Bulduk — may publish their own privacy
          notices. Fileroom is designed for on-device conversion so files are not
          uploaded to Lumen Labs servers as part of conversion.
        </p>
        <h2>Contact</h2>
        <p>
          Privacy questions:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </section>
    </div>
  );
}
