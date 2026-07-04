import React from 'react';
import { Code, Server, Database, CheckSquare, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Core Development',
      icon: <Code size={20} style={{ color: '#00f2fe' }} />,
      color: '#00f2fe',
      skills: ['C#', '.NET Core 6/8', 'ASP.NET Core MVC', 'WebAPI', 'TypeScript', 'Angular', 'React', 'Python'],
    },
    {
      title: 'Infrastructure & DevOps',
      icon: <Server size={20} style={{ color: '#a855f7' }} />,
      color: '#a855f7',
      skills: ['Docker', 'Kubernetes (AKS)', 'Azure DevOps', 'CI/CD Pipelines', 'Git', 'GitHub Copilot'],
    },
    {
      title: 'Data Architecture',
      icon: <Database size={20} style={{ color: '#00f2fe' }} />,
      color: '#00f2fe',
      skills: ['SQL Server', 'Performance Tuning', 'Indexing', 'Stored Procedures (SPs)', 'NoSQL Databases'],
    },
    {
      title: 'Engineering Standards',
      icon: <CheckSquare size={20} style={{ color: '#e100ff' }} />,
      color: '#e100ff',
      skills: ['SOLID Principles', 'Domain-Driven Design (DDD)', 'REST APIs', 'Agile Methodologies', 'OOP'],
    },
  ];

  return (
    <section id="skills" className="section" style={styles.section}>
      <div className="bg-blob bg-blob-cyan" style={{ top: '40%', right: '-15%' }} />

      <div className="container">
        <div style={styles.header}>
          <div style={styles.titleWrapper}>
            <Layers size={24} style={{ color: '#00f2fe' }} />
            <h2 style={styles.title}>Technical Skills</h2>
          </div>
          <div style={styles.divider} />
        </div>

        <div style={styles.grid}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={{ ...styles.iconWrapper, borderColor: cat.color }}>
                  {cat.icon}
                </div>
                <h3 style={styles.cardTitle}>{cat.title}</h3>
              </div>
              <div style={styles.skillsContainer}>
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      ...styles.skillBadge,
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      '--hover-color': cat.color,
                    } as React.CSSProperties}
                    className="skill-badge-item"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS for badge hover animations since standard inline CSS doesn't support hover selectors easily */}
      <style>{`
        .skill-badge-item {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #e5e7eb;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .skill-badge-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--hover-color);
          color: #ffffff;
          box-shadow: 0 0 10px var(--hover-color);
          transform: scale(1.05);
        }
      `}</style>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    textAlign: 'left' as const,
    padding: '2.2rem 1.8rem',
    height: '100%',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  iconWrapper: {
    padding: '8px',
    borderRadius: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    background: 'rgba(255, 255, 255, 0.02)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#ffffff',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.75rem',
  },
  skillBadge: {
    cursor: 'pointer',
  },
};

export default Skills;
