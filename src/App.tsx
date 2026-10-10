import React, { useEffect, useState } from 'react';
import CanvasBackground from './components/CanvasBackground/CanvasBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { GraduationCap, Menu, X } from 'lucide-react';
import './App.css';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy & reveal on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Dynamic particles background */}
      <CanvasBackground />

      {/* Floating Header Navbar */}
      <header
        className="app-navbar"
        style={{
          backgroundColor: scrolled ? 'rgba(7, 9, 19, 0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        <div className="container app-navContainer">
          <a href="#home" className="app-logo">
            NS<span style={{ color: '#00f2fe' }}>.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="app-desktopNav">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Nav Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="app-mobileMenuBtn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="app-mobileNavDropdown">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="app-mobileNavLink"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Sections */}
      <main>
        <Hero />

        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <Skills />
        </div>

        <div className="reveal">
          <Experience />
        </div>

        {/* Dedicated Education Section in App.tsx */}
        <section id="education" className="section reveal app-educationSection">
          <div className="container">
            <div className="app-header">
              <div className="app-titleWrapper">
                <GraduationCap size={24} style={{ color: '#00f2fe' }} />
                <h2 className="app-title">Education</h2>
              </div>
              <div className="app-divider" />
            </div>

            <div className="app-educationGrid">
              <div className="glass-card app-educationCard">
                <div className="app-eduIconWrapper">
                  <GraduationCap size={32} style={{ color: '#00f2fe' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <span className="app-eduPeriod">Graduated 2021</span>
                  <h3 className="app-degreeTitle">Bachelor of Engineering (B.E.)</h3>
                  <h4 className="app-instituteName">Siddaganga Institute of Technology</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="reveal">
          <Projects />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
