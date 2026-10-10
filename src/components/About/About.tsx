import React from 'react';
import { User, Award, ShieldAlert, Cpu } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  const stats = [
    {
      icon: <Award size={28} className="text-gradient-cyan" style={{ color: '#00f2fe' }} />,
      value: '5' + ' ' + 'Years',
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
    <section id="about" className="section about-section">
      <div className="bg-blob bg-blob-purple" style={{ top: '30%', left: '-10%' }} />

      <div className="container">
        <div className="about-header">
          <div className="about-titleWrapper">
            <User size={24} style={{ color: '#00f2fe' }} />
            <h2 className="about-title">About Me</h2>
          </div>
          <div className="about-divider" />
        </div>

        <div className="about-grid">
          <div className="glass-card about-bioCard">
            <h3 className="about-bioTitle">Full-Stack Developer & Cloud Architect</h3>
            <p className="about-bioText">
              I am a Full-Stack Developer with 5 years of experience. My core expertise lies in architecting <strong>Cloud-Native solutions</strong> and managing the full software development lifecycle. I specialize in designing high-performance backend APIs using <strong>C# and .NET Core</strong> and building responsive frontends with <strong>Angular & React</strong>.
            </p>
            <p className="about-bioText">
              My engineering philosophy revolves around writing clean, testable code adhering to <strong>SOLID</strong> and <strong>Domain-Driven Design (DDD)</strong> principles. I am passionate about optimizing backend architectures, containerization, and automation to streamline releases and lower deployment friction.
            </p>
          </div>

          <div className="about-statsCol">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card about-statCard">
                <div className="about-statIcon">{stat.icon}</div>
                <div className="about-statContent">
                  <h4 className="about-statValue">{stat.value}</h4>
                  <h5 className="about-statLabel">{stat.label}</h5>
                  <p className="about-statDesc">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
