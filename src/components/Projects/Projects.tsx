import React from 'react';
import { Kanban, Shield, GitBranch, Terminal as ConsoleIcon, FolderOpen, ArrowUpRight } from 'lucide-react';
import './Projects.css';

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
    <section id="projects" className="section projects-section">
      <div className="bg-blob bg-blob-cyan" style={{ top: '10%', left: '-15%' }} />
      <div className="bg-blob bg-blob-purple" style={{ bottom: '20%', right: '-15%' }} />

      <div className="container">
        <div className="projects-header">
          <div className="projects-titleWrapper">
            <FolderOpen size={24} style={{ color: '#00f2fe' }} />
            <h2 className="projects-title">Key Projects</h2>
          </div>
          <div className="projects-divider" />
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card project-card projects-card">
              <div className="projects-cardHeader">
                <div className="projects-iconWrapper" style={{ borderColor: proj.color }}>
                  {proj.icon}
                </div>
                <div className="projects-linkIcon">
                  <ArrowUpRight size={18} style={{ color: '#6b7280' }} />
                </div>
              </div>

              <h3 className="projects-projectTitle">{proj.title}</h3>
              <p className="projects-projectDesc">{proj.desc}</p>

              <div className="projects-stackContainer">
                {proj.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="projects-techBadge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
