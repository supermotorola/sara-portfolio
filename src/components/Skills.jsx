import { useEffect, useRef } from 'react';
import { skillsRow1, skillsRow2 } from '../data/skills';

function SkillItem({ name, icon }) {
  return (
    <div className="skill-item">
      <span dangerouslySetInnerHTML={{ __html: icon }} />
      <div className="skill-name">{name}</div>
    </div>
  );
}

function ScrollRow({ skills, direction }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    // clone items for seamless loop
    [...row.children].forEach(item => row.appendChild(item.cloneNode(true)));
  }, []);

  return (
    <div
      ref={rowRef}
      className={`scroll-row ${direction === 'rtl' ? 'scroll-right-to-left' : 'scroll-left-to-right'}`}
    >
      {skills.map(s => (
        <SkillItem key={s.name} name={s.name} icon={s.icon} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-background" />
      <div className="skills-container">
        <div className="section-title">
          <h2>Core Expertise</h2>
        </div>
        <div className="skills-scroll-container">
          <ScrollRow skills={skillsRow1} direction="rtl" />
          <ScrollRow skills={skillsRow2} direction="ltr" />
        </div>
      </div>
    </section>
  );
}
