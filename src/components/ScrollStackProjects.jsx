import { useEffect, useRef } from 'react';
import { projects } from '../data/projects';

export default function ScrollStackProjects() {
  const outerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const cards = cardsRef.current.filter(Boolean);
    const n = cards.length;
    const state = cards.map(() => ({ ty: 100, sc: 1, zi: 0, hovered: false }));

    function applyTransform(card, i) {
      const { ty, sc, zi, hovered } = state[i];
      const lift = hovered && Math.abs(ty) < 1 ? -8 : 0;
      card.style.transform = `translateY(calc(${ty}% + ${lift}px)) scale(${sc})`;
      card.style.zIndex = zi;
    }

    function tick() {
      const rect = outer.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = outer.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / total));

      cards.forEach((card, i) => {
        const cp = (p - i / n) * n + 1;
        let ty, sc, zi;

        if (cp < 0) {
          // waiting below viewport
          ty = 100; sc = 1; zi = 0;
        } else if (cp <= 1) {
          // entering — cubic ease-out from bottom
          const eased = 1 - Math.pow(1 - cp, 3);
          ty = (1 - eased) * 100;
          sc = 1;
          zi = n + 10;
        } else {
          // stacked — peek from top, scale back
          const d = cp - 1;
          ty = -d * 4;        // each depth level peeks 4% above
          sc = Math.max(0.78, 1 - d * 0.055);
          zi = i + 1;         // earlier cards sit lower in z
        }

        state[i] = { ...state[i], ty, sc, zi };
        applyTransform(card, i);
      });
    }

    cards.forEach((card, i) => {
      card.addEventListener('mouseenter', () => { state[i].hovered = true; applyTransform(card, i); });
      card.addEventListener('mouseleave', () => { state[i].hovered = false; applyTransform(card, i); });
    });

    window.addEventListener('scroll', tick, { passive: true });
    tick();
    return () => window.removeEventListener('scroll', tick);
  }, []);

  return (
    <section className="scroll-stack-section" id="projects-stack">
      <div className="section-wrap">
        <div className="section-title">
          <h2>Featured Projects</h2>
        </div>
      </div>

      <div className="scroll-stack-outer" ref={outerRef}>
        <div className="scroll-stack-sticky">
          <div className="scroll-stack-track">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className="scroll-stack-card"
                ref={el => (cardsRef.current[i] = el)}
              >
                <div
                  className="ss-image"
                  style={{ '--bg': `url('${p.image}')` }}
                />
                <div className="ss-content">
                  <span className="project-tag">{p.tag}</span>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-description">{p.description}</p>
                  <div className="project-stats">
                    {p.stats.map(s => <span className="stat" key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
