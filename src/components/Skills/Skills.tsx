import React, { useState, useEffect, useRef } from 'react';
import { FlaskConical, Atom, Info, Sparkles, X, CheckCircle2, Orbit, RotateCcw, Play, Pause, Zap } from 'lucide-react';
import './Skills.css';

export interface ChemicalElement {
  number: number;
  symbol: string;
  name: string;
  chemicalName: string;
  category: 'backend' | 'frontend' | 'devops' | 'database' | 'architecture';
  categoryLabel: string;
  atomicWeight: string; // Mastery percentage
  electronConfig: string;
  yearStarted: string;
  description: string;
  projects: string[];
  color: string;
}

interface FloatingPhysics {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vrot: number;
  phase: number;
}

interface ShockwaveRipple {
  id: number;
  x: number;
  y: number;
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedElement, setSelectedElement] = useState<ChemicalElement | null>(null);

  // Anti-Gravity Floating State
  const [countdown, setCountdown] = useState<number>(10);
  const [isFloating, setIsFloating] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [hoveredElementId, setHoveredElementId] = useState<number | null>(null);
  const [ripples, setRipples] = useState<ShockwaveRipple[]>([]);

  const gridRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const physicsRef = useRef<{ [key: number]: FloatingPhysics }>({});
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [, setRenderTrigger] = useState<number>(0);

  const elements: ChemicalElement[] = [
    // Backend Group (Purple)
    {
      number: 1,
      symbol: 'Cs',
      name: 'C#',
      chemicalName: 'C-Sharpium',
      category: 'backend',
      categoryLabel: 'Backend Core',
      atomicWeight: '98.0',
      electronConfig: '2, 8, 18, 1',
      yearStarted: '2020',
      description: 'Primary object-oriented language used for architecting enterprise microservices, memory-efficient data structures, and asynchronous background jobs.',
      projects: ['Rockwell Automation Core APIs', 'Enterprise Service Bus Integration'],
      color: '#a855f7',
    },
    {
      number: 2,
      symbol: 'Nt',
      name: '.NET Core 8',
      chemicalName: 'Dotnetium',
      category: 'backend',
      categoryLabel: 'Backend Core',
      atomicWeight: '98.5',
      electronConfig: '2, 8, 18, 2',
      yearStarted: '2020',
      description: 'High-performance cloud-native framework. Leveraged ASP.NET Core Web API, Entity Framework Core, and Minimal APIs for sub-millisecond response times.',
      projects: ['Monolith to Microservices Migration', 'High-Availability Gateway'],
      color: '#a855f7',
    },
    {
      number: 3,
      symbol: 'Ms',
      name: 'Microservices',
      chemicalName: 'Serviceium',
      category: 'backend',
      categoryLabel: 'Backend Core',
      atomicWeight: '94.0',
      electronConfig: '2, 8, 18, 3',
      yearStarted: '2021',
      description: 'Decoupled domain-centric services communicating via lightweight REST endpoints and message queues, scaling seamlessly to 10K+ concurrent users.',
      projects: ['Distributed Order System', 'Event-Driven Pipeline'],
      color: '#a855f7',
    },
    {
      number: 4,
      symbol: 'Ap',
      name: 'REST Web APIs',
      chemicalName: 'Apium',
      category: 'backend',
      categoryLabel: 'Backend Core',
      atomicWeight: '96.0',
      electronConfig: '2, 8, 18, 4',
      yearStarted: '2020',
      description: 'Designing RESTful contracts with OpenAPI specifications, versioning, rate limiting, token authentication, and standardized JSON responses.',
      projects: ['Secure Gateway API', 'Partner Integration Services'],
      color: '#a855f7',
    },
    {
      number: 5,
      symbol: 'Py',
      name: 'Python',
      chemicalName: 'Pythonium',
      category: 'backend',
      categoryLabel: 'Backend Core',
      atomicWeight: '88.0',
      electronConfig: '2, 8, 5',
      yearStarted: '2021',
      description: 'Scripting automation, data transformation pipelines, RESTful microservices, and AI integrations.',
      projects: ['DevOps Automation Scripts', 'Data ETL Utilities'],
      color: '#a855f7',
    },

    // Frontend Group (Cyan)
    {
      number: 6,
      symbol: 'Rc',
      name: 'React',
      chemicalName: 'Reactium',
      category: 'frontend',
      categoryLabel: 'Frontend & UI',
      atomicWeight: '92.5',
      electronConfig: '2, 8, 18, 6',
      yearStarted: '2021',
      description: 'Building modern SPA dashboards, component libraries with custom hooks, interactive state management, and glassmorphic UI systems.',
      projects: ['Rockwell Executive Dashboard', 'Anti-Gravity Interactive Web App'],
      color: '#00f2fe',
    },
    {
      number: 7,
      symbol: 'Ts',
      name: 'TypeScript',
      chemicalName: 'Typescriptium',
      category: 'frontend',
      categoryLabel: 'Frontend & UI',
      atomicWeight: '95.0',
      electronConfig: '2, 8, 18, 7',
      yearStarted: '2021',
      description: 'Strict type safety across full-stack applications. Prevents runtime exceptions through interfaces, generics, and algebraic data types.',
      projects: ['Enterprise Component Library', 'Type-Safe API Contracts'],
      color: '#00f2fe',
    },
    {
      number: 8,
      symbol: 'Ng',
      name: 'Angular',
      chemicalName: 'Angularium',
      category: 'frontend',
      categoryLabel: 'Frontend & UI',
      atomicWeight: '90.0',
      electronConfig: '2, 8, 18, 8',
      yearStarted: '2020',
      description: 'Enterprise single-page applications utilizing RxJS reactive streams, dependency injection, modular feature routes, and NgRx state management.',
      projects: ['Industrial Monitoring Portal', 'Operator Control Panel'],
      color: '#00f2fe',
    },
    {
      number: 9,
      symbol: 'Ht',
      name: 'HTML5 & CSS3',
      chemicalName: 'Stylium',
      category: 'frontend',
      categoryLabel: 'Frontend & UI',
      atomicWeight: '96.0',
      electronConfig: '2, 8, 9',
      yearStarted: '2019',
      description: 'Semantic markup, accessible DOM structure, CSS Grid, Flexbox layouts, keyframe animations, and design tokens.',
      projects: ['Anti-Gravity Design System', 'Responsive UI Suite'],
      color: '#00f2fe',
    },

    // DevOps Group (Pink)
    {
      number: 10,
      symbol: 'Dk',
      name: 'Docker',
      chemicalName: 'Containerium',
      category: 'devops',
      categoryLabel: 'Cloud & DevOps',
      atomicWeight: '92.0',
      electronConfig: '2, 8, 18, 10',
      yearStarted: '2021',
      description: 'Containerizing microservices with minimal Alpine/Debian base images, multi-stage Dockerfiles, and Docker Compose development environments.',
      projects: ['Microservice Containerization', 'Local Dev Mesh'],
      color: '#e100ff',
    },
    {
      number: 11,
      symbol: 'K8',
      name: 'Kubernetes (AKS)',
      chemicalName: 'Kubeium',
      category: 'devops',
      categoryLabel: 'Cloud & DevOps',
      atomicWeight: '88.0',
      electronConfig: '2, 8, 18, 11',
      yearStarted: '2022',
      description: 'Deploying and managing production workloads on Azure Kubernetes Service (AKS), configuring HPA auto-scaling, ingress rules, and secrets.',
      projects: ['Production AKS Cluster', 'Zero-Downtime Deployment'],
      color: '#e100ff',
    },
    {
      number: 12,
      symbol: 'Az',
      name: 'Azure DevOps',
      chemicalName: 'Azureium',
      category: 'devops',
      categoryLabel: 'Cloud & DevOps',
      atomicWeight: '94.0',
      electronConfig: '2, 8, 18, 12',
      yearStarted: '2021',
      description: 'Orchestrating CI/CD build & release YAML pipelines, artifact management, unit test execution, and automated deployment stages.',
      projects: ['Automated Release Pipeline', 'Quality Gate Checks'],
      color: '#e100ff',
    },
    {
      number: 13,
      symbol: 'Gt',
      name: 'Git & GitHub',
      chemicalName: 'Gitium',
      category: 'devops',
      categoryLabel: 'Cloud & DevOps',
      atomicWeight: '97.0',
      electronConfig: '2, 8, 13',
      yearStarted: '2019',
      description: 'Git-flow workflow, interactive rebase, pull request reviews, GitHub Actions, Copilot pair programming, and merge resolution.',
      projects: ['Repository Maintenance', 'Team Git Workflow'],
      color: '#e100ff',
    },

    // Database Group (Gold)
    {
      number: 14,
      symbol: 'Sq',
      name: 'SQL Server',
      chemicalName: 'Sqlium',
      category: 'database',
      categoryLabel: 'Data & DB',
      atomicWeight: '95.0',
      electronConfig: '2, 8, 18, 14',
      yearStarted: '2020',
      description: 'Relational schema design, complex query optimization, T-SQL stored procedures, triggers, and ACID-compliant transaction handling.',
      projects: ['High-Volume Transaction DB', 'Migration Scripts'],
      color: '#f59e0b',
    },
    {
      number: 15,
      symbol: 'Pt',
      name: 'Perf Tuning',
      chemicalName: 'Tuningium',
      category: 'database',
      categoryLabel: 'Data & DB',
      atomicWeight: '92.0',
      electronConfig: '2, 8, 18, 15',
      yearStarted: '2021',
      description: 'Identifying query execution bottlenecks, non-clustered index strategy, reducing lock contention, resulting in 40% reduction in API response latency.',
      projects: ['Database Optimization Sprint', 'Indexing Overhaul'],
      color: '#f59e0b',
    },
    {
      number: 16,
      symbol: 'Ns',
      name: 'NoSQL DBs',
      chemicalName: 'Nosqlium',
      category: 'database',
      categoryLabel: 'Data & DB',
      atomicWeight: '86.0',
      electronConfig: '2, 8, 16',
      yearStarted: '2022',
      description: 'Document databases and high-speed key-value caching layers for fast session storage and rapid data retrieval.',
      projects: ['Redis Cache Integration', 'Document Store Prototype'],
      color: '#f59e0b',
    },

    // Architecture Group (Emerald)
    {
      number: 17,
      symbol: 'Sd',
      name: 'SOLID Principles',
      chemicalName: 'Solidium',
      category: 'architecture',
      categoryLabel: 'Engineering Standards',
      atomicWeight: '98.0',
      electronConfig: '2, 8, 18, 17',
      yearStarted: '2020',
      description: 'Strict adherence to Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion in codebases.',
      projects: ['Core Framework Architecture', 'Refactored Legacy Codebase'],
      color: '#10b981',
    },
    {
      number: 18,
      symbol: 'Dd',
      name: 'Domain-Driven Design',
      chemicalName: 'Domainium',
      category: 'architecture',
      categoryLabel: 'Engineering Standards',
      atomicWeight: '92.0',
      electronConfig: '2, 8, 18, 18',
      yearStarted: '2021',
      description: 'Modeling software around business domains, bounded contexts, aggregates, entities, value objects, and domain events.',
      projects: ['Manufacturing Domain Model', 'Clean Architecture Restructure'],
      color: '#10b981',
    },
    {
      number: 19,
      symbol: 'Ag',
      name: 'Agile & Scrum',
      chemicalName: 'Agilium',
      category: 'architecture',
      categoryLabel: 'Engineering Standards',
      atomicWeight: '95.0',
      electronConfig: '2, 8, 19',
      yearStarted: '2020',
      description: 'Active participation in 2-week sprint cycles, backlog grooming, daily standups, sprint retrospectives, and cross-functional deliverables.',
      projects: ['Rockwell Agile Release Train', 'Sprint Goal Deliveries'],
      color: '#10b981',
    },
  ];

  // Initialize random floating velocities for each element
  useEffect(() => {
    elements.forEach((el) => {
      if (!physicsRef.current[el.number]) {
        physicsRef.current[el.number] = {
          x: (Math.random() - 0.5) * 80,
          y: Math.random() * 40 + 20, // initial drop offset
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          rot: (Math.random() - 0.5) * 15,
          vrot: (Math.random() - 0.5) * 0.2,
          phase: Math.random() * Math.PI * 2,
        };
      }
    });
  }, []);

  // 10-Second Countdown Timer
  useEffect(() => {
    if (isFloating) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsFloating(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isFloating]);

  // Zero-Gravity Floating Physics Loop
  useEffect(() => {
    if (!isFloating || isPaused) return;

    let animId: number;
    let time = 0;

    const updatePhysics = () => {
      time += 0.03;

      elements.forEach((el) => {
        const phys = physicsRef.current[el.number];
        if (!phys) return;

        // Skip movement for currently hovered element
        if (el.number === hoveredElementId) return;

        // Floating sinusoidal wave drift
        const waveX = Math.sin(time + phys.phase) * 0.3;
        const waveY = Math.cos(time * 0.8 + phys.phase) * 0.3;

        phys.x += phys.vx + waveX;
        phys.y += phys.vy + waveY;
        phys.rot += phys.vrot;

        // Velocity damping so blast repulsion settles down into smooth floating
        phys.vx *= 0.96;
        phys.vy *= 0.96;
        phys.vrot *= 0.95;

        // Range boundary constraints bounce
        const maxRangeX = 180;
        const maxRangeY = 150;

        if (Math.abs(phys.x) > maxRangeX) phys.vx *= -1;
        if (Math.abs(phys.y) > maxRangeY) phys.vy *= -1;
        if (Math.abs(phys.rot) > 25) phys.vrot *= -1;
      });

      setRenderTrigger(Date.now());
      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isFloating, isPaused, hoveredElementId]);

  // Track mouse position inside the section for spacebar & click repulsion
  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  // Spacebar repulsion: push elements away from current cursor position
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return;

      // Don't fire if user is typing in an input/textarea
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      e.preventDefault(); // prevent page scroll

      // Auto-trigger float mode if not floating
      if (!isFloating) {
        setIsFloating(true);
        setCountdown(0);
      }

      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const clickX = mousePos.current.x;
      const clickY = mousePos.current.y;

      // Trigger visual shockwave ripple at cursor position
      const newRipple = { id: Date.now(), x: clickX, y: clickY };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);

      // Apply repulsion force from cursor position to all elements
      const cards = gridRef.current.querySelectorAll('.element-card');
      const currentFilteredElements = activeCategory === 'all'
        ? elements
        : elements.filter((el) => el.category === activeCategory);

      cards.forEach((card, index) => {
        const elNumber = currentFilteredElements[index]?.number;
        if (!elNumber) return;

        const phys = physicsRef.current[elNumber];
        if (!phys) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;

        let deltaX = cardCenterX - clickX;
        let deltaY = cardCenterY - clickY;

        let dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (dist < 10) dist = 10;

        // Blast repulsion force
        const blastForce = Math.min(30, 5000 / (dist + 30));
        const unitX = deltaX / dist;
        const unitY = deltaY / dist;

        phys.x += unitX * (blastForce * 2.2);
        phys.y += unitY * (blastForce * 2.2);
        phys.vx += unitX * (blastForce * 0.45);
        phys.vy += unitY * (blastForce * 0.45);
        phys.vrot += (Math.random() - 0.5) * 2;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFloating, activeCategory]);

  // EMPTY SPACE REPULSION — works anywhere in the section!
  const handleSectionClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    // Ignore clicks directly on element cards, filter buttons, or HUD controls
    if (
      target.closest('.element-card') ||
      target.closest('.btn-hud') ||
      target.closest('.skills-filterBtn') ||
      target.closest('.element-modalCard')
    ) {
      return;
    }

    // Auto-trigger float mode if not floating
    if (!isFloating) {
      setIsFloating(true);
      setCountdown(0);
    }

    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Update mousePos ref so spacebar also uses latest click position
    mousePos.current = { x: clickX, y: clickY };

    // Trigger visual shockwave ripple
    const newRipple = { id: Date.now(), x: clickX, y: clickY };
    setRipples((prev) => [...prev.slice(-3), newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);

    // Apply Repulsion Physics Force to all floating chemical elements!
    const cards = gridRef.current.querySelectorAll('.element-card');
    cards.forEach((card, index) => {
      const elNumber = filteredElements[index]?.number;
      if (!elNumber) return;

      const phys = physicsRef.current[elNumber];
      if (!phys) return;

      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
      const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;

      let deltaX = cardCenterX - clickX;
      let deltaY = cardCenterY - clickY;

      let dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (dist < 10) dist = 10;

      // Blast repulsion force calculation
      const blastForce = Math.min(30, 5000 / (dist + 30));
      const unitX = deltaX / dist;
      const unitY = deltaY / dist;

      // Impose impulse displacement & velocity burst
      phys.x += unitX * (blastForce * 2.2);
      phys.y += unitY * (blastForce * 2.2);

      phys.vx += unitX * (blastForce * 0.45);
      phys.vy += unitY * (blastForce * 0.45);
      phys.vrot += (Math.random() - 0.5) * 2;
    });
  };

  const categories = [
    { id: 'all', label: 'All Elements' },
    { id: 'backend', label: 'Backend & Core (.NET)' },
    { id: 'frontend', label: 'Frontend & UI (React/Angular)' },
    { id: 'devops', label: 'Cloud & DevOps (Docker/AKS)' },
    { id: 'database', label: 'Data Architecture (SQL)' },
    { id: 'architecture', label: 'Engineering Standards' },
  ];

  const filteredElements = activeCategory === 'all'
    ? elements
    : elements.filter((el) => el.category === activeCategory);

  const handleResetGrid = () => {
    setIsFloating(false);
    setCountdown(10);
    elements.forEach((el) => {
      if (physicsRef.current[el.number]) {
        physicsRef.current[el.number] = {
          x: 0,
          y: 0,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          rot: 0,
          vrot: (Math.random() - 0.5) * 0.2,
          phase: Math.random() * Math.PI * 2,
        };
      }
    });
  };

  const handleTriggerFloatNow = () => {
    setIsFloating(true);
    setCountdown(0);
  };

  return (
    <section
      id="skills"
      className="section skills-section"
      ref={sectionRef}
      onClick={handleSectionClick}
      onMouseMove={handleSectionMouseMove}
    >
      <div className="bg-blob bg-blob-cyan" style={{ top: '35%', right: '-10%' }} />
      <div className="bg-blob bg-blob-purple" style={{ bottom: '15%', left: '-10%' }} />

      <div className="container">
        {/* Header */}
        <div className="skills-header">
          <div className="skills-badge">
            <FlaskConical size={16} style={{ color: '#00f2fe' }} />
            <span>Periodic Table of Engineering</span>
          </div>
          <h2 className="skills-title">
            Technical <span className="text-gradient-cyan">Elements</span>
          </h2>
          <p className="skills-subtitle">
            Explore my core competencies structured as chemical elements. Click any element to inspect its properties, or <strong>click empty space to repel floating elements!</strong>
          </p>
          <div className="skills-divider" />
        </div>

        {/* Floating Physics Controls HUD */}
        <div className="skills-floatingHud">
          <div className="hud-status">
            <Orbit size={18} className={`hud-icon ${isFloating ? 'is-spinning' : ''}`} style={{ color: '#00f2fe' }} />
            <span>
              {isFloating ? (
                <strong style={{ color: '#00f2fe' }}>Zero-Gravity Active (Click empty space to repel elements!)</strong>
              ) : (
                <>Anti-Gravity Activation in <span className="hud-timer">{countdown}s</span></>
              )}
            </span>
          </div>

          <div className="hud-actions">
            {!isFloating ? (
              <button onClick={handleTriggerFloatNow} className="btn-hud btn-hud-glow">
                <Orbit size={14} /> Float Elements Now
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="btn-hud"
                  title={isPaused ? "Resume Floating" : "Pause Floating"}
                >
                  {isPaused ? <Play size={14} /> : <Pause size={14} />}
                  {isPaused ? "Resume" : "Pause"}
                </button>
                <button onClick={handleResetGrid} className="btn-hud btn-hud-reset">
                  <RotateCcw size={14} /> Re-align Grid
                </button>
              </>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filterBar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`skills-filterBtn ${activeCategory === cat.id ? 'is-active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="skills-legend">
          <div className="legend-item"><span className="dot" style={{ backgroundColor: '#a855f7' }} /> Backend (.NET/C#)</div>
          <div className="legend-item"><span className="dot" style={{ backgroundColor: '#00f2fe' }} /> Frontend (React/Angular)</div>
          <div className="legend-item"><span className="dot" style={{ backgroundColor: '#e100ff' }} /> Cloud/DevOps (Docker/K8s)</div>
          <div className="legend-item"><span className="dot" style={{ backgroundColor: '#f59e0b' }} /> Database (SQL/NoSQL)</div>
          <div className="legend-item"><span className="dot" style={{ backgroundColor: '#10b981' }} /> Standards (SOLID/DDD)</div>
        </div>

        {/* Periodic Grid */}
        <div
          ref={gridRef}
          className={`skills-periodicGrid ${isFloating ? 'is-floating-mode' : ''}`}
        >
          {/* Shockwave Ripples */}
          {ripples.map((r) => (
            <div
              key={r.id}
              className="skills-shockwaveRipple"
              style={{ left: `${r.x}px`, top: `${r.y}px` }}
            >
              <Zap size={20} className="skills-shockwaveIcon" />
            </div>
          ))}

          {filteredElements.map((el) => {
            const phys = physicsRef.current[el.number] || { x: 0, y: 0, rot: 0 };
            const isHovered = hoveredElementId === el.number;

            return (
              <div
                key={el.number}
                onClick={() => setSelectedElement(el)}
                onMouseEnter={() => setHoveredElementId(el.number)}
                onMouseLeave={() => setHoveredElementId(null)}
                className={`element-card ${isFloating ? 'is-floating' : ''} ${isHovered ? 'is-hovered' : ''}`}
                style={{
                  '--element-color': el.color,
                  '--element-color-glow': `${el.color}40`,
                  transform: isFloating
                    ? `translate3d(${phys.x}px, ${phys.y}px, 0px) rotate(${isHovered ? 0 : phys.rot}deg) scale(${isHovered ? 1.08 : 1})`
                    : 'none',
                } as React.CSSProperties}
              >
                {/* Element Header */}
                <div className="element-topRow">
                  <span className="element-number">{el.number}</span>
                  <span className="element-category">{el.symbol.toUpperCase()}</span>
                </div>

                {/* Large Chemical Symbol */}
                <div className="element-symbol" style={{ color: el.color }}>
                  {el.symbol}
                </div>

                {/* Element Name */}
                <div className="element-name">{el.name}</div>

                {/* Atomic Weight / Mastery */}
                <div className="element-atomicWeight">
                  <Atom size={10} style={{ marginRight: '3px' }} />
                  {el.atomicWeight}%
                </div>

                {/* Hover Glow Particle Effect */}
                <div className="element-glowEffect" />
              </div>
            );
          })}
        </div>

        {/* Element Inspection Modal */}
        {selectedElement && (
          <div className="element-modalBackdrop" onClick={() => setSelectedElement(null)}>
            <div className="element-modalCard" onClick={(e) => e.stopPropagation()}>
              <button className="element-modalClose" onClick={() => setSelectedElement(null)}>
                <X size={20} />
              </button>

              <div className="element-modalHeader">
                <div
                  className="element-modalBadge"
                  style={{
                    backgroundColor: `${selectedElement.color}20`,
                    borderColor: selectedElement.color,
                    color: selectedElement.color,
                  }}
                >
                  <Atom size={24} />
                  <span className="element-modalSymbol">{selectedElement.symbol}</span>
                </div>
                <div>
                  <h3 className="element-modalTitle">{selectedElement.name}</h3>
                  <span className="element-modalChemicalName">{selectedElement.chemicalName} • Element #{selectedElement.number}</span>
                </div>
              </div>

              <div className="element-modalStatsRow">
                <div className="modal-statItem">
                  <span className="stat-label">Mastery Level</span>
                  <span className="stat-value" style={{ color: selectedElement.color }}>{selectedElement.atomicWeight}%</span>
                </div>
                <div className="modal-statItem">
                  <span className="stat-label">Electron Shell</span>
                  <span className="stat-value">{selectedElement.electronConfig}</span>
                </div>
                <div className="modal-statItem">
                  <span className="stat-label">Experience Since</span>
                  <span className="stat-value">{selectedElement.yearStarted}</span>
                </div>
              </div>

              <div className="element-modalBody">
                <h4 className="modal-sectionTitle">
                  <Info size={16} style={{ color: selectedElement.color }} />
                  Element Description & Properties
                </h4>
                <p className="modal-description">{selectedElement.description}</p>

                <h4 className="modal-sectionTitle" style={{ marginTop: '1.25rem' }}>
                  <Sparkles size={16} style={{ color: selectedElement.color }} />
                  Key Real-World Applications at Rockwell Automation
                </h4>
                <ul className="modal-projectsList">
                  {selectedElement.projects.map((proj, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} style={{ color: selectedElement.color, flexShrink: 0 }} />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;
