import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "What Lumen Labs does: product design, full-stack engineering, mobile, and SaaS systems.",
};

const services = [
  {
    title: "Product discovery & design",
    copy: "Scope, UX, and interface systems that make the product clear before the first sprint expands.",
  },
  {
    title: "Full-stack web platforms",
    copy: "Next.js applications, APIs, billing, auth, and operational dashboards built for real traffic.",
  },
  {
    title: "Native & cross-platform mobile",
    copy: "React Native, SwiftUI, and Compose apps with release pipelines for App Store and Play Store.",
  },
  {
    title: "Marketplace & SaaS operations",
    copy: "Job queues, realtime status, workshop tooling, and the messy middle of multi-sided products.",
  },
  {
    title: "On-device & privacy-first builds",
    copy: "Local media pipelines and architectures that keep sensitive work on the user’s device.",
  },
  {
    title: "AI product surfaces",
    copy: "LLM-backed assistants with streaming responses and practical marketplace integrations.",
  },
];

export default function ServicesPage() {
  return (
    <div className="shell">
      <header className="page-hero">
        <p className="section__eyebrow">Services</p>
        <h1>What we do</h1>
        <p>
          Lumen Labs pairs studio craft with product ownership — the same team
          that ships our suite can help you design and build yours.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="services-list">
          {services.map((service) => (
            <Reveal key={service.title} as="article">
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal className="section__head">
          <p className="section__eyebrow">Engagement</p>
          <h2 className="section__title">Start with a clear brief.</h2>
          <p className="section__copy">
            Share the problem, audience, and constraints. We will propose a
            build path, stack, and milestones.
          </p>
          <div style={{ marginTop: "0.35rem" }}>
            <Link href="/contact" className="btn btn--primary">
              Start a conversation
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
