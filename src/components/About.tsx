import React from 'react';
import { User, Award, ShieldAlert, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    {
      icon: <Award size={28} className="text-gradient-cyan" style={{ color: '#00f2fe' }} />,
      value: '4+ Years',
      label: 'Professional Experience',
      desc: 'Delivering high-availability enterprise applications at Rockwell Automation.',
    },
    {
      icon: <Cpu size={28} style={{ color: '#a855f7' }} />,
      value: '10K+ Users',
      label: 'Concurrently Handled',
      desc: 'Migrated monolithic system to a scalable microservices architecture.',
    },
    {
      icon: <ShieldAlert size={28} style={{ color: '#e100ff' }} />,
      value: '40% Reduction',
      label: 'API Response Latency',
      desc: 'Optimized queries and refactored core service layers for efficiency.',
    },
  ];

  return (
    <section id="about" className="section" style={styles.section}>
      <div className="bg-blob bg-blob-purple" style={{ top: '30%', left: '-10%' }} />

      <div className="container">
        <div style={styles.header}>
          <div style={styles.titleWrapper}>
            <User size={24} style={{ color: '#00f2fe' }} />
            <h2 style={styles.title}>About Me</h2>
          </div>
          <div style={styles.divider} />
        </div>

        <div style={styles.grid}>
          <div className="glass-card" style={styles.bioCard}>
            <h3 style={styles.bioTitle}>Full-Stack Developer & Cloud Architect</h3>
            <p style={styles.bioText}>
              I am a Full-Stack Developer with over 4 years of experience. My core expertise lies in architecting <strong>Cloud-Native solutions</strong> and managing the full software development lifecycle. I specialize in designing high-performance backend APIs using <strong>C# and .NET Core</strong> and building responsive frontends with <strong>Angular & React</strong>.
            </p>
            <p style={styles.bioText}>
              My engineering philosophy revolves around writing clean, testable code adhering to <strong>SOLID</strong> and <strong>Domain-Driven Design (DDD)</strong> principles. I am passionate about optimizing backend architectures, containerization, and automation to streamline releases and lower deployment friction.
            </p>
          </div>

          <div style={styles.statsCol}>
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card" style={styles.statCard}>
                <div style={styles.statIcon}>{stat.icon}</div>
                <div style={styles.statContent}>
                  <h4 style={styles.statValue}>{stat.value}</h4>
                  <h5 style={styles.statLabel}>{stat.label}</h5>
                  <p style={styles.statDesc}>{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '2.5rem',
    alignItems: 'stretch',
    '@media (max-width: 968px)': {
      gridTemplateColumns: '1fr',
    },
  },
  bioCard: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    textAlign: 'left' as const,
    height: '100%',
  },
  bioTitle: {
    fontSize: '1.6rem',
    marginBottom: '1.5rem',
    color: '#00f2fe',
  },
  bioText: {
    color: '#9ca3af',
    fontSize: '1.05rem',
    lineHeight: '1.75',
    marginBottom: '1.25rem',
  },
  statsCol: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  statCard: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    padding: '1.5rem 2rem',
    textAlign: 'left' as const,
  },
  statIcon: {
    padding: '12px',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  statLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#9ca3af',
    marginBottom: '0.5rem',
  },
  statDesc: {
    fontSize: '0.9rem',
    color: '#6b7280',
    lineHeight: '1.5',
  },
};

export default About;
