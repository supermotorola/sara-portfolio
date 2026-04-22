const TEXT = 'DESIGN LEADERSHIP ROLES \u00a0✦\u00a0 FREELANCE PROJECTS \u00a0✦\u00a0 STRATEGIC PARTNERSHIPS \u00a0✦\u00a0';

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text">{TEXT}</span>
          <span className="marquee-text">{TEXT}</span>
          <span className="marquee-text">{TEXT}</span>
          <span className="marquee-text">{TEXT}</span>
        </div>
      </div>
    </section>
  );
}
