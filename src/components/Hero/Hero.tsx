import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ArrowDown, Mail, Code, Cpu, Award, Zap, Sparkles, Compass } from 'lucide-react';
import avatar3d from '../../assets/avatar_3d.jpg';
import './Hero.css';

export const Hero: React.FC = () => {
  const titles = [
    'Full-Stack Developer',
    'Cloud-Native Architect',
    'Microservices Specialist',
    '.NET Core & React Expert'
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // 3D Avatar Cursor Tracking State
  const avatarCardRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const [trackingData, setTrackingData] = useState({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    glowX: 50,
    glowY: 50,
    distance: 0,
    isNear: false,
    angle: 0,
  });

  // Typing effect
  useEffect(() => {
    let timer: number;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setTypingSpeed(35);
      }, typingSpeed);
    } else {
      timer = window.setTimeout(() => {
        setDisplayedText((prev) => currentTitle.slice(0, prev.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === currentTitle) {
      timer = window.setTimeout(() => setIsDeleting(true), 2200);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(120);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, titleIndex]);

  // Cursor tracking calculation
  useEffect(() => {
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarCardRef.current) return;

      const rect = avatarCardRef.current.getBoundingClientRect();
      const avatarCenterX = rect.left + rect.width / 2;
      const avatarCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - avatarCenterX;
      const deltaY = e.clientY - avatarCenterY;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const angle = Math.round((Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 360) % 360);

      const proximityThreshold = 450; // pixels proximity
      const isNear = distance < proximityThreshold;

      // Calculate tilt intensity based on distance
      const maxTilt = 25; // degrees

      // Target rotation values
      const targetRotateY = (deltaX / (window.innerWidth / 2)) * maxTilt * (isNear ? 1.2 : 0.3);
      const targetRotateX = -(deltaY / (window.innerHeight / 2)) * maxTilt * (isNear ? 1.2 : 0.3);
      const targetRotateZ = (deltaX / 80) * (isNear ? 1 : 0.2);

      const glowX = 50 + (deltaX / (rect.width / 2)) * 35;
      const glowY = 50 + (deltaY / (rect.height / 2)) * 35;

      // Smooth damped transition using rAF
      animId = requestAnimationFrame(() => {
        setTrackingData((prev) => ({
          rotateX: prev.rotateX + (targetRotateX - prev.rotateX) * 0.15,
          rotateY: prev.rotateY + (targetRotateY - prev.rotateY) * 0.15,
          rotateZ: prev.rotateZ + (targetRotateZ - prev.rotateZ) * 0.15,
          glowX: prev.glowX + (glowX - prev.glowX) * 0.15,
          glowY: prev.glowY + (glowY - prev.glowY) * 0.15,
          distance: Math.round(distance),
          isNear,
          angle,
        }));
      });
    };

    const handleMouseLeave = () => {
      setTrackingData((prev) => ({
        ...prev,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        glowX: 50,
        glowY: 50,
        isNear: false,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Dynamic background lighting */}
      <div className="bg-blob bg-blob-cyan" />
      <div className="bg-blob bg-blob-purple" style={{ top: '65%', left: '75%' }} />
      <div className="hero-gridPattern" />

      <div className="container hero-container">
        <div className="hero-layoutGrid">

          {/* LEFT SIDE: INTRODUCTION */}
          <div className="hero-leftIntro">
            <div className="hero-badgePill">
              <span className="hero-statusDot" />
              <span>Available for High-Impact Projects</span>
            </div>

            <h1 className="hero-greeting">
              Hi, I'm <span className="text-gradient-cyan">Naman Srivastava</span>
            </h1>

            <h2 className="hero-subtitle">
              <span className="hero-typingText">{displayedText}</span>
              <span className="hero-cursor">|</span>
            </h2>

            <p className="hero-introBio">
              Full-Stack Software Engineer with <strong>5 years of enterprise experience</strong> at <strong>Rockwell Automation</strong>. I specialize in building high-availability cloud-native microservices, optimizing low-latency backend APIs with <strong>.NET Core</strong>, and crafting modern web interfaces with <strong>React & Angular</strong>.
            </p>

            <div className="hero-highlightsList">
              <div className="hero-highlightItem">
                <Zap size={18} className="text-gradient-cyan" style={{ color: '#00f2fe' }} />
                <span>Microservices Architecture</span>
              </div>
              <div className="hero-highlightItem">
                <Cpu size={18} style={{ color: '#a855f7' }} />
                <span>Cloud-Native & Docker/AKS</span>
              </div>
              <div className="hero-highlightItem">
                <Award size={18} style={{ color: '#e100ff' }} />
                <span>10K+ Concurrent System Handled</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Work <ArrowDown size={18} />
              </a>
              <a href="#skills" className="btn btn-secondary">
                Chemical Skills <Code size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Connect <Mail size={18} />
              </a>
            </div>
          </div>

          {/* CENTER: INTERACTIVE 3D AVATAR CARD */}
          <div className="hero-centerAvatarWrapper">
            <div
              ref={avatarCardRef}
              className={`hero-avatar3dContainer ${trackingData.isNear ? 'is-tracking-near' : ''}`}
              style={{
                transform: `perspective(1000px) rotateX(${trackingData.rotateX}deg) rotateY(${trackingData.rotateY}deg) rotateZ(${trackingData.rotateZ}deg) scale3d(${trackingData.isNear ? 1.04 : 1}, ${trackingData.isNear ? 1.04 : 1}, 1)`,
              }}
            >
              {/* Outer 3D Hologram Orbit Rings */}
              <div
                className="hero-orbitRing hero-orbitRing-outer"
                style={{
                  transform: `rotate(${trackingData.rotateY * 1.5}deg) rotateX(${trackingData.rotateX}deg)`,
                }}
              />
              <div
                className="hero-orbitRing hero-orbitRing-inner"
                style={{
                  transform: `rotate(${-trackingData.rotateY * 2}deg) rotateY(${trackingData.rotateX * 1.2}deg)`,
                }}
              />

              {/* Cursor Spotlight Glow */}
              <div
                className="hero-avatarGlow"
                style={{
                  background: `radial-gradient(circle at ${trackingData.glowX}% ${trackingData.glowY}%, rgba(0, 242, 254, 0.45) 0%, rgba(168, 85, 247, 0.25) 45%, transparent 70%)`,
                }}
              />

              {/* Main 3D Render Image Container */}
              <div className="hero-avatarFrame">
                <img
                  src={avatar3d}
                  alt="Naman Srivastava 3D Avatar"
                  className="hero-avatarImage"
                  style={{
                    transform: `translate3d(${-trackingData.rotateY * 0.8}px, ${trackingData.rotateX * 0.8}px, 20px)`,
                  }}
                  onError={(e) => {
                    // Fallback to public path if module import fails
                    (e.target as HTMLImageElement).src = '/avatar_3d.jpg';
                  }}
                />

                {/* Cyberpunk Scanner HUD Overlay */}
                <div className="hero-hudOverlay">
                  <div className="hero-hudTop">
                    <span className="hero-hudDot" />
                    <span className="hero-hudCode">NAMAN_3D_AVATAR.OBJ</span>
                  </div>
                  <div className="hero-hudBottom">
                    <div className="hero-hudMetric">
                      <Compass size={13} style={{ color: '#00f2fe' }} />
                      <span>
                        {trackingData.isNear ? 'TARGET LOCK' : 'SCANNING...'} | {trackingData.distance}px
                      </span>
                    </div>
                    <div className="hero-hudBar">
                      <div
                        className="hero-hudBarFill"
                        style={{ width: `${Math.min(100, Math.max(15, 100 - trackingData.distance / 4))}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Floating Badge on Avatar */}
              <div className="hero-floatingPill hero-pill-top">
                <Sparkles size={14} style={{ color: '#00f2fe' }} />
                <span>3D Cursor Follow</span>
              </div>
              <div className="hero-floatingPill hero-pill-bottom">
                <Code size={14} style={{ color: '#e100ff' }} />
                <span>Rockwell Automation</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: TERMINAL & QUICK BIO METRICS */}
          <div className="hero-rightTerminal">
            <div className="glass-card hero-terminalCard">
              <div className="hero-terminalHeader">
                <div className="hero-terminalDots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="hero-terminalTitle">
                  <Terminal size={14} style={{ marginRight: '6px', color: '#00f2fe' }} />
                  naman_profile.json
                </div>
              </div>

              <div className="hero-terminalBody">
                <pre className="hero-jsonCode">
                  {`{
  "name": "Naman Srivastava",
  "title": "Full-Stack Engineer",
  "company": "Rockwell Automation",
  "experience": "5 Years",
  "education": "B.E. SIT (2021)",
  "location": "India",
  "architecture": [
    "Microservices",
    "Cloud-Native",
    "REST & Event-Driven"
  ],
  "languages": [
    "C#", ".NET 8", "TypeScript",
    "React", "Angular", "SQL"
  ],
  "status": "Ready to Innovate 🚀"
}`}
                </pre>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="hero-quickStatsGrid">
              <div className="hero-statBox">
                <span className="hero-statNumber text-gradient-cyan">4+</span>
                <span className="hero-statLabel">Years Experience</span>
              </div>
              <div className="hero-statBox">
                <span className="hero-statNumber text-gradient-purple">40%</span>
                <span className="hero-statLabel">Latency Reduced</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
