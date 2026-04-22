import DarkVeilCanvas from './DarkVeilCanvas';

export default function Hero() {
  const handleNav = (e, target) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <DarkVeilCanvas speed={1.8} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,2,33,0.62)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 'clamp(90px, 12vw, 180px)', background: 'linear-gradient(to bottom, transparent, #0d0221)', zIndex: 0, pointerEvents: 'none' }} />
      <div className="hero-content">
        <div className="hero-subtitle">DESIGN LEAD X PRODUCT DESIGNER</div>
        <h1 className="hero-title">Hi, I'm Sara</h1>
        <div className="cta-container">
          <a href="#contact" className="cta-button cta-primary" onClick={e => handleNav(e, '#contact')}>LET'S CHAT</a>
          <a href="#projects-stack" className="cta-button cta-secondary" onClick={e => handleNav(e, '#projects-stack')}>VIEW WORK</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <svg className="scroll-mouse" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="white" strokeOpacity="0.6" strokeWidth="1.5"/>
          <circle className="scroll-dot" cx="12" cy="10" r="3" fill="white" fillOpacity="0.8"/>
        </svg>
      </div>
    </section>
  );
}
