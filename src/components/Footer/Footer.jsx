import { useState, useEffect } from 'react';
import './Footer.css';

const NAV_ITEMS = ['About', 'Education', 'Skills', 'Contact'];

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__logo">Portfolio</div>

            <nav className="footer__nav">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  className="footer__nav-link"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="footer__divider"></div>

            <div className="footer__bottom">
              <div className="footer__copyright">
                © 2026 <span>Soumyadeep Paul</span>. All rights reserved.
              </div>
              <div className="footer__made-with">
                Made with <span className="footer__heart">❤️</span> using React
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`footer__back-to-top ${showTop ? 'footer__back-to-top--visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default Footer;
