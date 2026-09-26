import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      {/* Background glow effects */}
      <div className="bg-glow bg-glow--purple"></div>
      <div className="bg-glow bg-glow--blue"></div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <Header />
      <AboutMe />
      <Education />
      <Skills />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
