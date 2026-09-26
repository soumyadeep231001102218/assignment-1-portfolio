import './AboutMe.css';

const HIGHLIGHTS = [
  { icon: '🎯', title: 'Problem Solver', desc: 'Love tackling challenges' },
  { icon: '⚡', title: 'Fast Learner', desc: 'Quick to adapt & grow' },
  { icon: '🤝', title: 'Team Player', desc: 'Collaborative mindset' },
  { icon: '🚀', title: 'Goal Driven', desc: 'Result-oriented work' },
];

function AboutMe() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Student, Game Dev & Web Enthusiast</h2>

        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__image-card">
              <div className="about__image-placeholder">
                👨‍💻
              </div>
            </div>
            <div className="about__image-badge">
              ✨ Open to Work
            </div>
          </div>

          <div className="about__text">
            <h3>
              Building the web, one <span>pixel</span> at a time
            </h3>
            <p>
              Hi! I&apos;m Soumyadeep Paul, a 4th year BCA (Honours) student at
              Techno India University, West Bengal. I&apos;ve been into game
              development for about a year now and love building interactive
              experiences.
            </p>
            <p>
              I also build websites — I&apos;ve created a few for my brother and
              enjoy the process of turning ideas into real, working products.
              I&apos;m always learning new things and looking for opportunities to
              grow as a developer.
            </p>

            <div className="about__highlights">
              {HIGHLIGHTS.map((item) => (
                <div className="about__highlight-item" key={item.title}>
                  <div className="about__highlight-icon">{item.icon}</div>
                  <div className="about__highlight-text">
                    <strong>{item.title}</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
