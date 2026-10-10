import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import './Experience.css';

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
    <section id="experience" className="section experience-section">
      <div className="bg-blob bg-blob-purple" style={{ bottom: '10%', right: '70%' }} />

      <div className="container">
        <div className="experience-header">
          <div className="experience-titleWrapper">
            <Briefcase size={24} style={{ color: '#00f2fe' }} />
            <h2 className="experience-title">Professional Experience</h2>
          </div>
          <div className="experience-divider" />
        </div>

        <div className="experience-timelineContainer">
          <div className="experience-timelineLine" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-timelineItem">
              {/* Timeline marker */}
              <div className="experience-timelineDot">
                <div className="experience-timelineInnerDot" />
              </div>

              {/* Timeline content */}
              <div className="glass-card experience-experienceCard">
                <div className="experience-cardHeader">
                  <div>
                    <h3 className="experience-roleTitle">{exp.role}</h3>
                    <h4 className="experience-companyName">{exp.company}</h4>
                  </div>
                  <div className="experience-periodBadge">
                    <Calendar size={14} style={{ marginRight: '6px' }} />
                    {exp.period}
                  </div>
                </div>

                <div className="experience-bulletList">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="experience-bulletItem">
                      <CheckCircle
                         size={16}
                         style={{
                           color: '#00f2fe',
                           marginTop: '4px',
                           flexShrink: 0,
                         }}
                      />
                      <div>
                        <strong className="experience-bulletTitle">{bullet.title}: </strong>
                        <span className="experience-bulletDesc">{bullet.desc}</span>
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

export default Experience;
