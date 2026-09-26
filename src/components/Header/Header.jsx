import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header" id="home">
      {/* Background effects */}
      <div className="header__bg-grid"></div>
      <div className="header__orb header__orb--1"></div>
      <div className="header__orb header__orb--2"></div>

      <div className="container">
        <div className="header__content">
          <span className="header__greeting">👋 Hello, I&apos;m</span>

          <h1 className="header__name">
            Soumyadeep{' '}
            <span className="header__name-highlight">Paul</span>
          </h1>

          <p className="header__tagline">
            A BCA student and indie game developer with 1 year of experience,
            who also loves building websites. Always learning, always creating.
          </p>

          <div className="header__actions">
            <button
              className="header__btn header__btn--primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
            <button
              className="header__btn header__btn--secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More ↓
            </button>
          </div>

          <div className="header__stats">
            <div className="header__stat">
              <div className="header__stat-number">1+</div>
              <div className="header__stat-label">Year in Game Dev</div>
            </div>
            <div className="header__stat">
              <div className="header__stat-number">4th</div>
              <div className="header__stat-label">Year BCA(H)</div>
            </div>
            <div className="header__stat">
              <div className="header__stat-number">5+</div>
              <div className="header__stat-label">Projects Built</div>
            </div>
          </div>
        </div>
      </div>

      <div className="header__scroll-indicator" onClick={() => scrollToSection('about')}>
        <span>Scroll</span>
        <div className="header__scroll-arrow"></div>
      </div>
    </header>
  );
}

export default Header;
