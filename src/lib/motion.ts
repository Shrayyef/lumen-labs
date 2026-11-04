/** Motion tokens extracted from casamomo.at Framer source (Link Roll + Text Reveal). */

export const casaEase = [0.52, 0, 0, 1] as const;
export const casaEaseSoft = [0.44, 0, 0.56, 1] as const;
export const casaEaseIn = [0.5, -0.01, 0, 0.98] as const;
export const casaEaseOut = [0, 0.75, 0.25, 0.98] as const;
export const casaEaseSnap = [0.8, 0, 0, 1] as const;
export const casaEaseDrift = [0.12, 0.23, 0.5, 1] as const;

/** Nav / Link Roll letter flip */
export const linkRoll = {
  duration: 0.7,
  ease: casaEase,
  stagger: 0.01,
  delay: 0,
} as const;

/** Underline roll on linked words */
export const underlineRoll = {
  duration: 0.6,
  ease: casaEase,
  hoverDelay: 0.18,
} as const;

/** Default scroll-in text reveal (word masks) */
export const textReveal = {
  duration: 1,
  ease: casaEaseOut,
  delay: 0.2,
  stagger: 0.08,
  fromY: 140,
  rotateFrom: 8,
  blur: 0,
} as const;

export const textRevealHero = {
  duration: 1.2,
  ease: casaEaseOut,
  delay: 0.05,
  stagger: 0.1,
  fromY: 210,
  rotateFrom: 8,
  blur: 0,
} as const;

export const textRevealBody = {
  duration: 0.9,
  ease: casaEaseOut,
  delay: 0.1,
  stagger: 0.02,
  fromY: 100,
  rotateFrom: 8,
  blur: 0,
} as const;

export const sectionEnter = {
  duration: 0.8,
  ease: casaEaseIn,
  delay: 0,
} as const;

export const sectionSoft = {
  duration: 0.4,
  ease: casaEaseSoft,
  delay: 0.1,
} as const;
