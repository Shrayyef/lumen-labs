export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__sky" />
      <div className="hero-visual__beam hero-visual__beam--a" />
      <div className="hero-visual__beam hero-visual__beam--b" />
      <div className="hero-visual__desk">
        <div className="hero-visual__panel hero-visual__panel--wide" />
        <div className="hero-visual__panel hero-visual__panel--tall" />
        <div className="hero-visual__panel hero-visual__panel--device" />
      </div>
      <div className="hero-visual__grain" />
    </div>
  );
}
