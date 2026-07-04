import React, { useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

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
        style={{
          ...styles.navbar,
          backgroundColor: scrolled ? 'rgba(7, 9, 19, 0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        <div className="container" style={styles.navContainer}>
          <a href="#home" style={styles.logo}>
            NS<span style={{ color: '#00f2fe' }}>.</span>
          </a>

          {/* Desktop Nav */}
          <nav style={styles.desktopNav}>
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="nav-link" style={styles.navLink}>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Nav Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={styles.mobileMenuBtn}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div style={styles.mobileNavDropdown}>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={styles.mobileNavLink}
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
        <section id="education" className="section reveal" style={styles.educationSection}>
          <div className="container">
            <div style={styles.header}>
              <div style={styles.titleWrapper}>
                <GraduationCap size={24} style={{ color: '#00f2fe' }} />
                <h2 style={styles.title}>Education</h2>
              </div>
              <div style={styles.divider} />
            </div>

            <div style={styles.educationGrid}>
              <div className="glass-card" style={styles.educationCard}>
                <div style={styles.eduIconWrapper}>
                  <GraduationCap size={32} style={{ color: '#00f2fe' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <span style={styles.eduPeriod}>Graduated 2020</span>
                  <h3 style={styles.degreeTitle}>Bachelor of Engineering (B.E.)</h3>
                  <h4 style={styles.instituteName}>Siddaganga Institute of Technology</h4>
                  <p style={styles.eduDesc}>
                    Focused on Computer Science foundations, database engineering, OOP concepts, algorithms, and software development methodologies.
                  </p>
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

      {/* Custom Styles Injector for Navbar hover effects */}
      <style>{`
        .nav-link {
          position: relative;
          color: #9ca3af;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 8px 12px;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #00f2fe;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 12px;
          background: linear-gradient(90deg, #00f2fe, #7f00ff);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: calc(100% - 24px);
        }
      `}</style>
    </div>
  );
};

const styles = {
  navbar: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 100,
    transition: 'all 0.4s ease',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Outfit, sans-serif',
    fontSize: '1.75rem',
    fontWeight: '800',
    color: '#ffffff',
    textDecoration: 'none',
    letterSpacing: '-0.03em',
  },
  desktopNav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  navLink: {
    // Styling handled via classes
  },
  mobileMenuBtn: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'block',
    },
  },
  mobileNavDropdown: {
    position: 'absolute' as const,
    top: '75px',
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(7, 9, 19, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '1.5rem 0',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
    alignItems: 'center',
    zIndex: 99,
  },
  mobileNavLink: {
    color: '#9ca3af',
    textDecoration: 'none',
    fontFamily: 'Outfit, sans-serif',
    fontWeight: '500',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease',
    width: '100%',
    textAlign: 'center' as const,
    padding: '8px 0',
  },
  educationSection: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  header: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    marginBottom: '3.5rem',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  divider: {
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #00f2fe, #7f00ff)',
    borderRadius: '2px',
  },
  educationGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  educationCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.75rem',
    maxWidth: '750px',
    width: '100%',
    padding: '2rem 2.5rem',
  },
  eduIconWrapper: {
    padding: '14px',
    borderRadius: '14px',
    background: 'rgba(0, 242, 254, 0.05)',
    border: '1px solid rgba(0, 242, 254, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  eduPeriod: {
    display: 'inline-block',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#00f2fe',
    marginBottom: '0.5rem',
  },
  degreeTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.25rem',
  },
  instituteName: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#9ca3af',
    marginBottom: '1rem',
  },
  eduDesc: {
    fontSize: '0.95rem',
    color: '#6b7280',
    lineHeight: '1.6',
  },
};

export default App;
