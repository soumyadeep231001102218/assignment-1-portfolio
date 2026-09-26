import './Skills.css';

const SKILL_CATEGORIES = [
  {
    icon: '🎮',
    name: 'Game Development',
    dotClass: 'skill-tag__dot--frontend',
    skills: ['Unity', 'C#', 'Game Design', '2D / 3D Games', 'Physics & Animation', 'Level Design'],
    bars: [
      { name: 'Unity', value: 75 },
      { name: 'C#', value: 70 },
      { name: 'Game Design', value: 65 },
    ],
  },
  {
    icon: '🌐',
    name: 'Web Development',
    dotClass: 'skill-tag__dot--backend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Bootstrap'],
    bars: [
      { name: 'HTML / CSS', value: 80 },
      { name: 'JavaScript', value: 65 },
      { name: 'React', value: 55 },
    ],
  },
  {
    icon: '🛠️',
    name: 'Tools & Others',
    dotClass: 'skill-tag__dot--tools',
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'npm', 'Vite', 'Canva'],
    bars: [
      { name: 'Git', value: 70 },
      { name: 'VS Code', value: 85 },
      { name: 'Figma', value: 50 },
    ],
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">My Tech Stack</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="skills__categories">
          {SKILL_CATEGORIES.map((category) => (
            <div className="skills__category" key={category.name}>
              <div className="skills__category-header">
                <div className="skills__category-icon">{category.icon}</div>
                <div>
                  <div className="skills__category-name">{category.name}</div>
                  <div className="skills__category-count">
                    {category.skills.length} skills
                  </div>
                </div>
              </div>

              <div className="skills__list">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    <span className={`skill-tag__dot ${category.dotClass}`}></span>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="skills__proficiency">
                {category.bars.map((bar) => (
                  <div className="skills__bar-group" key={bar.name}>
                    <div className="skills__bar-header">
                      <span className="skills__bar-name">{bar.name}</span>
                      <span className="skills__bar-value">{bar.value}%</span>
                    </div>
                    <div className="skills__bar-track">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${bar.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
