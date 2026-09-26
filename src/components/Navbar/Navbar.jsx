import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = ['About', 'Education', 'Skills', 'Contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a className="navbar__logo" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Portfolio
        </a>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={`navbar__link ${activeSection === item.toLowerCase() ? 'navbar__link--active' : ''}`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
          <button className="navbar__cta" onClick={() => scrollToSection('contact')}>
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
