export default function Strengths() {

  return (
    <section className="strengths" id="strengths">
      <div className="strengths-container">
        <div className="section-title">
          <h2>What I Bring</h2>
        </div>
        <div className="bento-grid">

          <div className="bento-card bento-card--large-left">
            <span className="bento-card-label">01</span>
            <h3 className="bento-card-title">Commercial Logic</h3>
            <p className="bento-card-subtitle">Master of Accounting for business ROI.</p>
            <div className="bento-visual">
              <svg className="bento-chart" viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="bar1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a78bfa"/>
                    <stop offset="100%" stopColor="#2336EF" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="bar2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#2336EF" stopOpacity="0.2"/>
                  </linearGradient>
                  <linearGradient id="bar3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3EEA0A" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                <rect x="10"  y="40" width="44" height="50" rx="4" fill="url(#bar2)"/>
                <rect x="68"  y="20" width="44" height="70" rx="4" fill="url(#bar1)"/>
                <rect x="126" y="52" width="44" height="38" rx="4" fill="url(#bar2)"/>
                <rect x="184" y="8"  width="44" height="82" rx="4" fill="url(#bar3)"/>
                <line x1="0" y1="89" x2="260" y2="89" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
              </svg>
            </div>
          </div>

          <div className="bento-card bento-card--small-right">
            <span className="bento-card-label">02</span>
            <h3 className="bento-card-title">Scalable Systems</h3>
            <p className="bento-card-subtitle">Engineering modular frameworks for 100+ clients.</p>
            <div className="bento-grid-icon">
              {[true,false,true,false,true,false,true,true,false].map((active, i) => (
                <div key={i} className={`grid-cell${active ? ' grid-cell--active' : ''}`} />
              ))}
            </div>
          </div>

          <div className="bento-card bento-card--small-left">
            <span className="bento-card-label">03</span>
            <h3 className="bento-card-title">Design Ops</h3>
            <p className="bento-card-subtitle">Building efficient generative AI workflows.</p>
            <div className="bento-nodes">
              <div className="node-dot" />
              <div className="node-line" />
              <div className="node-dot node-dot--dim" />
              <div className="node-line" />
              <div className="node-dot" />
              <div className="node-line" />
              <div className="node-dot node-dot--dim" />
            </div>
          </div>

          <div className="bento-card bento-card--large-right">
            <span className="bento-card-label">04</span>
            <h3 className="bento-card-title">All-round Delivery</h3>
            <p className="bento-card-subtitle">Consistent branding across UI and web.</p>
            <div className="bento-visual">
              <div className="bento-mockups">
                <div className="mockup-desktop" />
                <div className="mockup-tablet" />
                <div className="mockup-phone" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
