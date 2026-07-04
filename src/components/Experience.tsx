import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Project Engineer (Software)',
      company: 'Rockwell Automation',
      period: '2023 - Present',
      bullets: [
        {
          title: 'Microservices Architecture',
          desc: 'Spearheaded the migration of a legacy monolithic backend to a domain-driven microservices platform using Docker and Kubernetes, successfully supporting a high-traffic environment of 10,000+ concurrent users.',
        },
        {
          title: 'Performance Optimization',
          desc: 'Optimized SQL query structures and refactored the service layer to reduce average API response latency by 40%, significantly improving the efficiency of automation workflows.',
        },
        {
          title: 'DevOps & Automation',
          desc: 'Architected multi-stage CI/CD pipelines on Azure DevOps with integrated automated test gates, reducing manual deployment effort by 70% and boosting release frequency.',
        },
        {
          title: 'Mentorship & Innovation',
          desc: 'Integrated GitHub Copilot into the Agile workflow to improve delivery speed; mentored junior engineers on .NET best practices and SOLID principles.',
        },
      ],
    },
    {
      role: 'Graduate Engineer Trainee',
      company: 'Rockwell Automation',
      period: '2021 - 2023',
      bullets: [
        {
          title: 'Feature Delivery',
          desc: 'Developed core backend modules using C# and SQL Server, contributing to mission-critical shared codebases across multiple internal product teams.',
        },
        {
          title: 'Process Scripting',
          desc: 'Leveraged Python for background automation tasks, streamlining data processing and reducing manual error rates in operations.',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="section" style={styles.section}>
      <div className="bg-blob bg-blob-purple" style={{ bottom: '10%', right: '70%' }} />

      <div className="container">
        <div style={styles.header}>
          <div style={styles.titleWrapper}>
            <Briefcase size={24} style={{ color: '#00f2fe' }} />
            <h2 style={styles.title}>Professional Experience</h2>
          </div>
          <div style={styles.divider} />
        </div>

        <div style={styles.timelineContainer}>
          <div style={styles.timelineLine} />

          {experiences.map((exp, idx) => (
            <div key={idx} style={styles.timelineItem}>
              {/* Timeline marker */}
              <div style={styles.timelineDot}>
                <div style={styles.timelineInnerDot} />
              </div>

              {/* Timeline content */}
              <div className="glass-card" style={styles.experienceCard}>
                <div style={styles.cardHeader}>
                  <div>
                    <h3 style={styles.roleTitle}>{exp.role}</h3>
                    <h4 style={styles.companyName}>{exp.company}</h4>
                  </div>
                  <div style={styles.periodBadge}>
                    <Calendar size={14} style={{ marginRight: '6px' }} />
                    {exp.period}
                  </div>
                </div>

                <div style={styles.bulletList}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} style={styles.bulletItem}>
                      <CheckCircle
                        size={16}
                        style={{
                          color: '#00f2fe',
                          marginTop: '4px',
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <strong style={styles.bulletTitle}>{bullet.title}: </strong>
                        <span style={styles.bulletDesc}>{bullet.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
  timelineContainer: {
    position: 'relative' as const,
    maxWidth: '850px',
    margin: '0 auto',
    padding: '20px 0',
  },
  timelineLine: {
    position: 'absolute' as const,
    top: '0',
    bottom: '0',
    left: '20px',
    width: '2px',
    background: 'linear-gradient(180deg, #00f2fe, #7f00ff)',
    opacity: 0.3,
  },
  timelineItem: {
    position: 'relative' as const,
    paddingLeft: '60px',
    marginBottom: '3.5rem',
  },
  timelineDot: {
    position: 'absolute' as const,
    left: '11px',
    top: '28px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#070913',
    border: '2px solid #00f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    boxShadow: '0 0 10px rgba(0, 242, 254, 0.4)',
  },
  timelineInnerDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00f2fe, #7f00ff)',
  },
  experienceCard: {
    textAlign: 'left' as const,
    padding: '2rem',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap' as const,
    gap: '1rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '1.25rem',
    marginBottom: '1.5rem',
  },
  roleTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '0.25rem',
  },
  companyName: {
    fontSize: '1.05rem',
    fontWeight: '500',
    color: '#00f2fe',
  },
  periodBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '6px 14px',
    borderRadius: '30px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    color: '#9ca3af',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  bulletList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
  },
  bulletTitle: {
    color: '#f3f4f6',
    fontWeight: '600',
  },
  bulletDesc: {
    color: '#9ca3af',
    lineHeight: '1.6',
  },
};

export default Experience;
