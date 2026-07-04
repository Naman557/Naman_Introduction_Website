import React, { useState, useEffect } from 'react';
import { Terminal, ArrowDown, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const titles = [
    'Senior Full-Stack Developer',
    'Cloud-Native Architect',
    'Microservices Specialist',
    '.NET Core Expert'
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: number;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      // Deleting text
      timer = window.setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      // Typing text
      timer = window.setTimeout(() => {
        setDisplayedText((prev) => currentTitle.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    // Finished typing title
    if (!isDeleting && displayedText === currentTitle) {
      timer = window.setTimeout(() => setIsDeleting(true), 2000); // Wait 2s before deleting
    }

    // Finished deleting title
    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(150); // Small pause before typing next
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <section id="home" className="hero-section" style={styles.hero}>
      {/* Visual background elements */}
      <div className="bg-blob bg-blob-cyan" />
      <div className="bg-blob bg-blob-purple" style={{ top: '60%', left: '70%' }} />

      <div className="container" style={styles.container}>
        <div className="glass-card" style={styles.card}>
          <div style={styles.headerRow}>
            <div style={styles.terminalDotContainer}>
              <span style={{ ...styles.terminalDot, backgroundColor: '#ff5f56' }} />
              <span style={{ ...styles.terminalDot, backgroundColor: '#ffbd2e' }} />
              <span style={{ ...styles.terminalDot, backgroundColor: '#27c93f' }} />
            </div>
            <span style={styles.terminalTab}>
              <Terminal size={14} style={{ marginRight: '6px' }} />
              naman-srivastava.exe
            </span>
          </div>

          <div style={styles.content}>
            <h1 style={styles.greeting}>
              Hello, I'm <span className="text-gradient-cyan">Naman Srivastava</span>
            </h1>
            
            <h2 style={styles.subtitle}>
              A <span style={styles.typingText}>{displayedText}</span>
              <span style={styles.cursor}>|</span>
            </h2>

            <p style={styles.intro}>
              I design and build high-availability enterprise applications, specialize in migrating legacy monoliths to microservices, and orchestrate automated cloud delivery pipelines. Currently driving innovation at <strong>Rockwell Automation</strong>.
            </p>

            <div style={styles.actions}>
              <a href="#projects" className="btn btn-primary">
                View My Projects <ArrowDown size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Talk <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '120px 0 60px 0',
    position: 'relative' as const,
    zIndex: 2,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    maxWidth: '900px',
    padding: '0',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
  headerRow: {
    backgroundColor: '#0c0f1d',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
  },
  terminalDotContainer: {
    display: 'flex',
    gap: '8px',
  },
  terminalDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    display: 'block',
  },
  terminalTab: {
    marginLeft: '24px',
    color: '#9ca3af',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    padding: '3rem 2.5rem',
    textAlign: 'left' as const,
  },
  greeting: {
    fontSize: '3.2rem',
    lineHeight: '1.1',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.8rem',
    fontWeight: '500',
    color: '#e5e7eb',
    marginBottom: '1.5rem',
    minHeight: '2.5rem',
  },
  typingText: {
    color: '#00f2fe',
    textShadow: '0 0 10px rgba(0, 242, 254, 0.2)',
  },
  cursor: {
    animation: 'blink 1s step-end infinite',
    color: '#00f2fe',
    marginLeft: '2px',
  },
  intro: {
    fontSize: '1.1rem',
    color: '#9ca3af',
    maxWidth: '680px',
    marginBottom: '2.5rem',
    lineHeight: '1.7',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  },
};

export default Hero;
