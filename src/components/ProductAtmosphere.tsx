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
      <rect x="48" y="54" width="360" height="230" rx="8" fill="#F3F1EA" />
      <rect x="72" y="84" width="180" height="18" rx="4" fill="#5F6A4D" opacity="0.9" />
      <rect x="72" y="118" width="280" height="12" rx="3" fill="#10140C" opacity="0.16" />
      <rect x="72" y="142" width="240" height="12" rx="3" fill="#10140C" opacity="0.1" />
      <rect x="72" y="178" width="120" height="72" rx="6" fill="#DFE3D6" />
      <rect x="208" y="178" width="120" height="72" rx="6" fill="#CFD6C4" />
      <rect x="440" y="96" width="140" height="220" rx="18" fill="#10140C" />
      <rect x="456" y="118" width="108" height="168" rx="8" fill="#E8E6DF" />
      <circle cx="510" cy="302" r="8" fill="#5F6A4D" />
    </svg>
  );
}

function ServicesHubScene() {
  return (
    <svg viewBox="0 0 640 360" className="product-scene" aria-hidden="true">
      <rect x="40" y="70" width="560" height="220" rx="6" fill="#EFECE5" />
      <rect x="70" y="110" width="220" height="140" rx="6" fill="#DDD4C6" />
      <rect x="100" y="150" width="160" height="60" rx="4" fill="#7A6548" opacity="0.9" />
      <rect x="320" y="120" width="240" height="24" rx="4" fill="#10140C" opacity="0.14" />
      <rect x="320" y="162" width="180" height="16" rx="3" fill="#10140C" opacity="0.09" />
      <rect x="320" y="198" width="210" height="70" rx="6" fill="#E4DDD2" />
      <circle cx="150" cy="280" r="28" fill="#242018" />
      <circle cx="250" cy="280" r="28" fill="#242018" />
    </svg>
  );
}

function FileroomScene() {
  return (
    <svg viewBox="0 0 640 360" className="product-scene" aria-hidden="true">
      <rect x="90" y="70" width="320" height="210" rx="8" fill="#E2E6E8" />
      <rect x="120" y="104" width="180" height="22" rx="4" fill="#4A5C68" />
      <rect x="120" y="146" width="240" height="14" rx="3" fill="#10140C" opacity="0.12" />
      <rect x="120" y="176" width="200" height="14" rx="3" fill="#10140C" opacity="0.08" />
      <rect x="120" y="214" width="90" height="36" rx="6" fill="#C5CFD6" />
      <rect x="224" y="214" width="90" height="36" rx="6" fill="#A8B6C0" />
      <rect x="450" y="100" width="110" height="180" rx="16" fill="#14180F" />
      <rect x="464" y="120" width="82" height="128" rx="6" fill="#D8DEE2" />
      <path d="M160 250 L210 250 L190 280 L240 280" stroke="#4A5C68" strokeWidth="4" fill="none" />
    </svg>
  );
}

function BuldukScene() {
  return (
    <svg viewBox="0 0 640 360" className="product-scene" aria-hidden="true">
      <rect x="60" y="60" width="360" height="240" rx="8" fill="#EFECE5" />
      <rect x="90" y="96" width="220" height="20" rx="4" fill="#6B5B3E" opacity="0.9" />
      <rect x="90" y="136" width="280" height="48" rx="6" fill="#E4DDD2" />
      <rect x="90" y="202" width="130" height="60" rx="6" fill="#DDD4C6" />
      <rect x="236" y="202" width="130" height="60" rx="6" fill="#CFC4B2" />
      <rect x="460" y="88" width="120" height="210" rx="18" fill="#14180F" />
      <rect x="474" y="110" width="92" height="150" rx="8" fill="#E8E6DF" />
      <circle cx="520" cy="278" r="7" fill="#6B5B3E" />
    </svg>
  );
}
