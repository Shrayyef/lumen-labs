import type { CSSProperties } from "react";
import type { Product } from "@/lib/products";

type ProductAtmosphereProps = {
  product: Product;
  large?: boolean;
};

export function ProductAtmosphere({
  product,
  large = false,
}: ProductAtmosphereProps) {
  return (
    <div
      className={`product-atmosphere ${large ? "product-atmosphere--large" : ""}`}
      style={{ "--product-accent": product.accent } as CSSProperties}
      role="img"
      aria-label={product.atmosphere}
      data-product={product.slug}
    >
      <div className="product-atmosphere__wash" />
      <div className="product-atmosphere__scene">
        {product.slug === "aula" && <AulaScene />}
        {product.slug === "serviceshub" && <ServicesHubScene />}
        {product.slug === "fileroom" && <FileroomScene />}
        {product.slug === "bulduk" && <BuldukScene />}
      </div>
    </div>
  );
}

function AulaScene() {
  return (
    <svg viewBox="0 0 640 360" className="product-scene" aria-hidden="true">
      <rect x="48" y="54" width="360" height="230" rx="18" fill="#F4F8F6" />
      <rect x="72" y="84" width="180" height="18" rx="6" fill="#1F7A6B" opacity="0.85" />
      <rect x="72" y="118" width="280" height="12" rx="4" fill="#0F1A1C" opacity="0.18" />
      <rect x="72" y="142" width="240" height="12" rx="4" fill="#0F1A1C" opacity="0.12" />
      <rect x="72" y="178" width="120" height="72" rx="10" fill="#D7EBE4" />
      <rect x="208" y="178" width="120" height="72" rx="10" fill="#C5DED5" />
      <rect x="440" y="96" width="140" height="220" rx="22" fill="#0F1A1C" />
      <rect x="456" y="118" width="108" height="168" rx="12" fill="#E8F4EF" />
      <circle cx="510" cy="302" r="8" fill="#1F7A6B" />
    </svg>
  );
}

function ServicesHubScene() {
  return (
    <svg viewBox="0 0 640 360" className="product-scene" aria-hidden="true">
      <rect x="40" y="70" width="560" height="220" rx="10" fill="#F7F1EB" />
      <rect x="70" y="110" width="220" height="140" rx="8" fill="#E8D7C8" />
      <rect x="100" y="150" width="160" height="60" rx="6" fill="#C45C26" opacity="0.85" />
      <rect x="320" y="120" width="240" height="24" rx="5" fill="#0F1A1C" opacity="0.16" />
      <rect x="320" y="162" width="180" height="16" rx="4" fill="#0F1A1C" opacity="0.1" />
      <rect x="320" y="198" width="210" height="70" rx="10" fill="#FFE8D8" />
      <circle cx="150" cy="280" r="28" fill="#2A2A2A" />
      <circle cx="250" cy="280" r="28" fill="#2A2A2A" />
    </svg>
  );
}

function FileroomScene() {
  return (
    <svg viewBox="0 0 640 360" className="product-scene" aria-hidden="true">
      <rect x="90" y="70" width="320" height="210" rx="14" fill="#E8EEF5" />
      <rect x="120" y="104" width="180" height="22" rx="6" fill="#2F5D8C" />
      <rect x="120" y="146" width="240" height="14" rx="4" fill="#0F1A1C" opacity="0.14" />
      <rect x="120" y="176" width="200" height="14" rx="4" fill="#0F1A1C" opacity="0.1" />
      <rect x="120" y="214" width="90" height="36" rx="8" fill="#BFD0E4" />
      <rect x="224" y="214" width="90" height="36" rx="8" fill="#9FB6D1" />
      <rect x="450" y="100" width="110" height="180" rx="18" fill="#132033" />
      <rect x="464" y="120" width="82" height="128" rx="8" fill="#D9E4F0" />
      <path d="M160 250 L210 250 L190 280 L240 280" stroke="#2F5D8C" strokeWidth="4" fill="none" />
    </svg>
  );
}

function BuldukScene() {
  return (
    <svg viewBox="0 0 640 360" className="product-scene" aria-hidden="true">
      <rect x="60" y="60" width="360" height="240" rx="18" fill="#FFF6EB" />
      <rect x="90" y="96" width="220" height="20" rx="6" fill="#B45309" opacity="0.9" />
      <rect x="90" y="136" width="280" height="48" rx="10" fill="#F3E0C8" />
      <rect x="90" y="202" width="130" height="60" rx="10" fill="#F8D9B0" />
      <rect x="236" y="202" width="130" height="60" rx="10" fill="#EFC894" />
      <rect x="460" y="88" width="120" height="210" rx="22" fill="#1C140C" />
      <rect x="474" y="110" width="92" height="150" rx="10" fill="#FFE8C7" />
      <circle cx="520" cy="278" r="7" fill="#B45309" />
    </svg>
  );
}
