import React from 'react';
import { Kanban, Shield, GitBranch, Terminal as ConsoleIcon, FolderOpen, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Centralized Multi-Team API Gateway',
      icon: <Shield size={22} style={{ color: '#00f2fe' }} />,
      color: '#00f2fe',
      stack: ['.NET Core', 'SQL Server', 'JWT', 'Swagger', 'Microservices'],
      desc: 'Sole architect of a centralized RESTful API gateway consumed by 3+ product teams. Implemented secure JWT authentication and a modular, versioned architecture to allow independent deployments without breaking shared contracts.',
    },
    {
      title: 'Full-Stack Workflow Management Platform',
      icon: <Kanban size={22} style={{ color: '#a855f7' }} />,
      color: '#a855f7',
      stack: ['React', 'TypeScript', 'Angular', '.NET Core', 'Azure DevOps'],
      desc: 'Led the design of an enterprise application for monitoring industrial automation. Personally managed the frontend architecture and CI/CD integration, achieving a 70% reduction in deployment time through artifact caching.',
    },
    {
      title: 'Scalable Microservices Transition',
      icon: <GitBranch size={22} style={{ color: '#e100ff' }} />,
      color: '#e100ff',
      stack: ['Docker', 'Kubernetes (AKS)', 'Azure DevOps', 'RabbitMQ', 'REST'],
      desc: 'Configured Kubernetes Ingress and ConfigMaps to manage zero-downtime deployments. Designed complex inter-service communication using synchronous REST interfaces and asynchronous event-driven messaging patterns.',
    },
    {
      title: 'Enterprise Efficiency Automation Tool',
      icon: <ConsoleIcon size={22} style={{ color: '#3b82f6' }} />,
      color: '#3b82f6',
      stack: ['.NET Worker Service', 'Angular', 'SQL Server', 'Python'],
      desc: 'Independently built a background processing engine that eliminated 70% of manual operational workloads. Developed an interactive dashboard to provide real-time status updates and telemetry for ongoing data processes.',
    },
  ];

  return (
    <section id="projects" className="section" style={styles.section}>
      <div className="bg-blob bg-blob-cyan" style={{ top: '10%', left: '-15%' }} />
      <div className="bg-blob bg-blob-purple" style={{ bottom: '20%', right: '-15%' }} />

      <div className="container">
        <div style={styles.header}>
          <div style={styles.titleWrapper}>
            <FolderOpen size={24} style={{ color: '#00f2fe' }} />
            <h2 style={styles.title}>Key Projects</h2>
          </div>
          <div style={styles.divider} />
        </div>

        <div style={styles.grid}>
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card project-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={{ ...styles.iconWrapper, borderColor: proj.color }}>
                  {proj.icon}
                </div>
                <div style={styles.linkIcon}>
                  <ArrowUpRight size={18} style={{ color: '#6b7280' }} />
                </div>
              </div>

              <h3 style={styles.projectTitle}>{proj.title}</h3>
              <p style={styles.projectDesc}>{proj.desc}</p>

              <div style={styles.stackContainer}>
                {proj.stack.map((tech, tIdx) => (
                  <span key={tIdx} style={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.15);
        }
        .project-card:hover .link-icon {
          color: #ffffff;
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '2.2rem 2rem',
    textAlign: 'left' as const,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.75rem',
  },
  iconWrapper: {
    padding: '10px',
    borderRadius: '12px',
    borderWidth: '1px',
    borderStyle: 'solid',
    background: 'rgba(255, 255, 255, 0.02)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.3s ease',
  },
  projectTitle: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '1rem',
    lineHeight: '1.3',
  },
  projectDesc: {
    color: '#9ca3af',
    fontSize: '0.98rem',
    lineHeight: '1.6',
    marginBottom: '1.75rem',
    flexGrow: 1,
  },
  stackContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
  },
  techBadge: {
    padding: '4px 10px',
    borderRadius: '6px',
    background: 'rgba(0, 242, 254, 0.06)',
    border: '1px solid rgba(0, 242, 254, 0.15)',
    color: '#00f2fe',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
};

export default Projects;
