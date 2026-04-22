import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-wrap">
        <div className="section-title">
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className="project-card"
              key={p.id}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div
                className="project-image"
                style={{ '--bg': `url('${p.image}')` }}
              />
              <div className="project-content">
                <span className="project-tag">{p.tag}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.description}</p>
                <div className="project-stats">
                  {p.stats.map(s => (
                    <span className="stat" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
