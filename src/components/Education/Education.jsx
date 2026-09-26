import './Education.css';

const EDUCATION_DATA = [
  {
    year: '2023 – 2026',
    degree: 'BCA (Honours) — Bachelor of Computer Applications',
    school: '🏛️ Techno India University, West Bengal',
    desc: 'Currently in 4th year. Alongside academics, I build games using Unity and C#, and have created websites for my brother. Learning web development with React and JavaScript.',
    grade: '4th Year (Ongoing)',
  },
];


function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic Journey</h2>
        <p className="section-subtitle">
          A timeline of my educational background and academic achievements.
        </p>

        <div className="education__timeline">
          {EDUCATION_DATA.map((item, index) => (
            <div className="education__item" key={index}>
              <div className="education__dot"></div>
              <div className="education__card">
                <span className="education__year">{item.year}</span>
                <h3 className="education__degree">{item.degree}</h3>
                <div className="education__school">{item.school}</div>
                <p className="education__desc">{item.desc}</p>
                <span className="education__grade">✅ {item.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
