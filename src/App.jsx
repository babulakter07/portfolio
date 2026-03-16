import { useState, useEffect } from 'react'
import './App.css'

const BASE = '/portfolio'

// ── Navbar ──────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Award', 'Contact']

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <span className="navbar-logo">{'<Babul />'}</span>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l}><a onClick={() => scrollTo(l)}>{l}</a></li>
          ))}
        </ul>
        <button className="navbar-menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-greeting fade-in fade-in-delay-1">👋 Hello, World! I'm</span>
          <h1 className="hero-name fade-in fade-in-delay-2">Md. Babul Akter</h1>
          <p className="hero-title fade-in fade-in-delay-3">Software Engineer · Team Lead · Problem Solver</p>
          <p className="hero-desc fade-in fade-in-delay-4">
            Passionate software engineer with 3+ years of experience building scalable enterprise applications
            using ASP.NET Core, Angular, and cloud technologies. Currently leading the Reconciliation module
            at TechnoNext Software Ltd.
          </p>

          <div className="hero-stats fade-in fade-in-delay-4">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1800+</span>
              <span className="stat-label">Problems Solved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>

          <div className="hero-actions fade-in fade-in-delay-4">
            <a
              className="btn-primary"
              href="mailto:rjbabul420@gmail.com"
            >
              ✉ Hire Me
            </a>
            <a
              className="btn-outline"
              href={`${BASE}/profile.jpg`}
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              📄 View Resume
            </a>
          </div>

          <div className="hero-socials fade-in fade-in-delay-4">
            <a className="social-link" href="https://github.com/rjbabul" target="_blank" rel="noreferrer" title="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/rjbabul/" target="_blank" rel="noreferrer" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a className="social-link" href="mailto:rjbabul420@gmail.com" title="Email">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image-wrap fade-in fade-in-delay-2">
          <img
            src={`${BASE}/profile.jpg`}
            alt="Md. Babul Akter"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  )
}

// ── About ────────────────────────────────────────────────
function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="divider" />
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong style={{color:'#fff'}}>Md. Babul Akter</strong>, a passionate Software Engineer based in Dhaka, Bangladesh.
              I specialize in building robust, scalable enterprise-grade applications with a strong
              foundation in backend development using ASP.NET Core and frontend development with Angular.
            </p>
            <p>
              With experience at <strong style={{color:'#00b4d8'}}>TechnoNext Software Ltd</strong> and <strong style={{color:'#00b4d8'}}>Bdjobs.com</strong>,
              I have successfully delivered multiple high-impact projects including an Online Travel Agency
              platform and led the development of a critical Reconciliation module as Team Lead.
            </p>
            <p>
              I am deeply committed to clean code, SOLID principles, and Domain-Driven Design.
              An active competitive programmer with <strong style={{color:'#fff'}}>1,800+ problems</strong> solved
              across LeetCode, Codeforces, and other platforms.
            </p>
            <div className="about-details">
              <div className="detail-row">
                <span className="detail-label">📍 Location</span>
                <span className="detail-value">Dhaka, Bangladesh</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">📧 Email</span>
                <span className="detail-value">rjbabul420@gmail.com</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">📞 Phone</span>
                <span className="detail-value">+8801751513630</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">🎓 Degree</span>
                <span className="detail-value">B.Sc in CSE – PUST (CGPA 3.38)</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">💼 Status</span>
                <span className="detail-value" style={{color:'#4ade80'}}>Available for opportunities</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="info-card">
              <span className="info-icon">🏆</span>
              <div>
                <h4>Best Software Engineer of the Year</h4>
                <p>Honored with the prestigious award recognizing excellence in software engineering and technical leadership.</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">👨‍💼</span>
              <div>
                <h4>Team Lead – Reconciliation Module</h4>
                <p>Leading the development and implementation of a critical financial reconciliation system at TechnoNext.</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">💡</span>
              <div>
                <h4>1,800+ Problems Solved</h4>
                <p>Active competitive programmer on LeetCode, Codeforces, UVA, Toph, GeeksforGeeks, and HackerRank.</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🚀</span>
              <div>
                <h4>Microservices & Cloud</h4>
                <p>Experienced with AWS, Docker, RabbitMQ, Redis, and building scalable microservice architectures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Skills ───────────────────────────────────────────────
function Skills() {
  const categories = [
    {
      icon: '💻', title: 'Languages',
      tags: ['C#', 'JavaScript', 'Python', 'Java', 'C', 'C++']
    },
    {
      icon: '⚙️', title: 'Frameworks & Libraries',
      tags: ['ASP.NET Core', 'Angular', 'Laravel', 'Entity Framework', 'SignalR']
    },
    {
      icon: '🗄️', title: 'Databases',
      tags: ['MSSQL', 'MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: '☁️', title: 'DevOps & Cloud',
      tags: ['AWS', 'Docker', 'Redis', 'RabbitMQ', 'Hangfire', 'Serilog']
    },
    {
      icon: '🏗️', title: 'Architecture & Patterns',
      tags: ['SOLID', 'MVC', 'DDD', 'CQRS', 'Microservices', 'Repository Pattern', 'Generic Repository']
    },
    {
      icon: '📐', title: 'Engineering Practices',
      tags: ['Algorithm & DS', 'UML Diagrams', 'JWT Auth', 'Multithreading', 'Agile', 'Waterfall', 'SDLC']
    },
  ]

  return (
    <section className="section skills-bg" id="skills">
      <div className="container">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="divider" />
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          {categories.map(cat => (
            <div className="skill-category" key={cat.title}>
              <div className="skill-cat-title">
                <span className="skill-cat-icon">{cat.icon}</span>
                {cat.title}
              </div>
              <div className="skill-tags">
                {cat.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className="online-judge-section">
          <h3>🏅 Competitive Programming</h3>
          <p style={{color:'var(--text-muted)', fontSize:'0.875rem', marginTop:'8px'}}>
            Consistently solving algorithmic challenges across multiple platforms
          </p>
          <span className="judge-highlight">1,873+</span>
          <p style={{color:'var(--text-muted)', fontSize:'0.9rem'}}>Total Problems Solved on Online Judges</p>

          <div className="judge-cards">
            {[
              { name: 'LeetCode',      icon: '🟡', id: 'mdbabulpust',  solved: '381+',  url: 'https://leetcode.com/u/mdbabulpust/' },
              { name: 'Codeforces',    icon: '🔵', id: 'Babul420',     solved: '913+',  url: 'https://codeforces.com/profile/Babul420' },
              { name: 'Codeforces',    icon: '🔵', id: 'rjbabul2017',  solved: '106+',  url: 'https://codeforces.com/profile/rjbabul2017' },
              { name: 'UVA OJ',        icon: '🟣', id: 'rjbabul420',   solved: '253+',  url: 'https://uhunt.onlinejudge.org/id/900205' },
              { name: 'GeeksforGeeks', icon: '🟢', id: 'rjbabul420',   solved: '73+',   url: 'https://www.geeksforgeeks.org/user/rjbabul420/' },
              { name: 'HackerRank',    icon: '🟩', id: 'Log_Out23',    solved: '88+',   url: 'https://www.hackerrank.com/profile/Log_Out23' },
              { name: 'Toph.co',       icon: '🔴', id: 'Cyber_hunter', solved: '71+',   url: 'https://toph.co/u/Cyber_hunter' },
            ].map((j, i) => (
              <a className="judge-card" href={j.url} target="_blank" rel="noreferrer" key={i}>
                <span className="judge-card-icon">{j.icon}</span>
                <div className="judge-card-info">
                  <span className="judge-card-name">{j.name}</span>
                  <span className="judge-card-id">@{j.id}</span>
                </div>
                <span className="judge-card-solved">{j.solved}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Experience ───────────────────────────────────────────
function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="divider" />
        <p className="section-subtitle">My professional journey</p>

        <div className="timeline">
          {/* TechnoNext */}
          <div className="timeline-item">
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="timeline-company">TechnoNext Software Ltd</span>
                <div className="timeline-badge">
                  <span className="badge-current">🟢 Current</span>
                </div>
              </div>
              <p className="timeline-role">Jr. Software Engineer · Team Lead</p>
              <p className="timeline-period">📅 January 2024 – Present · Dhaka, Bangladesh</p>
              <div className="timeline-projects">
                <div className="project-detail">
                  <h4>✈️ Online Travel Agency (OTA)</h4>
                  <ul>
                    <li>Developed airplane ticketing platform using ASP.NET Core, Angular, and MSSQL</li>
                    <li>Implemented real-time features with <strong>SignalR</strong> for live ticket updates</li>
                    <li>Enhanced system performance using <strong>Multithreading</strong> and ThreadLock mechanisms</li>
                    <li>Built secure REST APIs with <strong>JWT Token-based Authentication</strong></li>
                    <li>Collaborated in Agile teams for high-quality feature delivery</li>
                    <li>Authored complex T-SQL queries and Stored Procedures in MSSQL</li>
                  </ul>
                </div>
                <div className="project-detail">
                  <h4>🔄 Reconciliation Module (Team Lead)</h4>
                  <ul>
                    <li>Leading development of a critical financial reconciliation system for OTA</li>
                    <li>Automates reconciliation of purchase and sales tickets for audit accuracy</li>
                    <li>Managing team and coordinating implementation of the entire module</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bdjobs */}
          <div className="timeline-item">
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="timeline-company">Bdjobs.com</span>
              </div>
              <p className="timeline-role">Jr. Software Engineer</p>
              <p className="timeline-period">📅 May 2023 – January 2024 · Dhaka, Bangladesh</p>
              <div className="timeline-projects">
                <div className="project-detail">
                  <h4>🌐 api.mybdjobs.com</h4>
                  <ul>
                    <li>Built with <strong>Layered Architecture</strong>, Interface pattern, and <strong>Domain-Driven Design</strong></li>
                    <li>Implemented <strong>Generic Repository Pattern</strong> for scalable data access layer</li>
                    <li>Secured API with Authentication and Authorization using ASP.NET Core Identity</li>
                    <li>Efficient data management with <strong>Entity Framework</strong> and MSSQL</li>
                  </ul>
                </div>
                <div className="project-detail">
                  <h4>🔀 ETL Project (MSSQL → MongoDB Migration)</h4>
                  <ul>
                    <li>Built ETL pipeline for data migration using <strong>CQRS pattern</strong></li>
                    <li>Implemented <strong>Multi-threading</strong> for parallel processing performance</li>
                    <li>Used <strong>Hangfire</strong> for scheduled job execution and monitoring</li>
                    <li>Layered Architecture with ASP.NET Core, Angular, MSSQL, and MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Projects ─────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      icon: '✈️',
      title: 'Online Travel Agency (OTA)',
      desc: 'Full-stack airplane ticketing platform with real-time seat availability, booking management, JWT auth, and SignalR for live updates.',
      tech: ['ASP.NET Core', 'Angular', 'MSSQL', 'SignalR', 'JWT'],
    },
    {
      icon: '🔄',
      title: 'Reconciliation System',
      desc: 'Financial reconciliation automation system for auditing purchase and sales tickets. Led as Team Lead with full module ownership.',
      tech: ['ASP.NET Core', 'MSSQL', 'Angular', 'Agile'],
    },
    {
      icon: '🔀',
      title: 'ETL Data Migration',
      desc: 'Enterprise ETL project for MSSQL to MongoDB migration using CQRS pattern, multi-threading for performance, and Hangfire scheduling.',
      tech: ['ASP.NET Core', 'Angular', 'MSSQL', 'MongoDB', 'Hangfire', 'CQRS'],
    },
    {
      icon: '💼',
      title: 'BDJobs API (api.mybdjobs.com)',
      desc: 'Scalable job portal API with Domain-Driven Design, Generic Repository pattern, layered architecture, and Entity Framework.',
      tech: ['ASP.NET Core', 'EF Core', 'MSSQL', 'DDD'],
    },
    {
      icon: '🗑️',
      title: 'Garbage Collection System',
      desc: 'Municipal garbage collection management system with route planning, scheduling, and citizen reporting features.',
      tech: ['Laravel', 'MySQL', 'PHP'],
    },
    {
      icon: '🩸',
      title: 'Blood Management System',
      desc: 'Community blood donation management system for connecting donors and recipients with real-time availability tracking.',
      tech: ['PHP', 'MySQL'],
    },
  ]

  return (
    <section className="section projects-bg" id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="divider" />
        <p className="section-subtitle">Things I've built that make an impact</p>
        <div className="projects-grid">
          {projects.map(p => (
            <div className="project-card" key={p.title}>
              <div className="project-card-header">
                <span className="project-icon">{p.icon}</span>
                <div className="project-links">
                  <a
                    className="project-link-btn"
                    href="https://github.com/rjbabul"
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span className="tech-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Education ─────────────────────────────────────────────
function Education() {
  const edu = [
    {
      icon: '🎓',
      degree: 'B.Sc in Computer Science & Engineering',
      institution: 'Pabna University of Science & Technology (PUST)',
      year: '2023',
      grade: 'CGPA: 3.38 / 4.00',
    },
    {
      icon: '📚',
      degree: 'Higher Secondary Certificate (HSC) – Science',
      institution: 'Mawlana Saif Uddin Yahia College',
      year: '2016',
      grade: 'GPA: 5.00 / 5.00',
    },
    {
      icon: '🏫',
      degree: 'Secondary School Certificate (SSC) – Science',
      institution: 'Habibullah Nagor High School',
      year: '2013',
      grade: 'GPA: 5.00 / 5.00',
    },
  ]

  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">My <span>Education</span></h2>
        <div className="divider" />
        <p className="section-subtitle">Academic background and qualifications</p>
        <div className="edu-grid">
          {edu.map(e => (
            <div className="edu-card" key={e.degree}>
              <div className="edu-left">
                <div className="edu-icon-wrap">{e.icon}</div>
                <div className="edu-info">
                  <h3>{e.degree}</h3>
                  <p>{e.institution}</p>
                </div>
              </div>
              <div className="edu-right">
                <span className="edu-year">{e.year}</span>
                <span className="edu-grade">{e.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Award ──────────────────────────────────────────────────
function Award() {
  return (
    <section className="section award-bg" id="award">
      <div className="container">
        <h2 className="section-title">🏆 <span>Award</span></h2>
        <div className="divider" />
        <p className="section-subtitle">Recognition for excellence in software engineering</p>

        <div className="award-container">
          <div className="award-card">
            <div className="award-header">
              <span className="award-badge">🏆</span>
              <h3>Best Software Engineer of the Year</h3>
              <p>Honored for outstanding technical contributions, leadership, and delivering high-impact software solutions</p>
              <span className="award-year">2025</span>
            </div>

            <div className="award-image-wrap">
              <iframe
                className="award-iframe"
                src="https://drive.google.com/file/d/16YaJjc5VRxNYF674fhj7eqm-qqLZ8onn/preview"
                allow="autoplay"
                title="Best Software Engineer Award Certificate"
              />
            </div>

            <div className="award-footer">
              <p>
                🔗{' '}
                <a
                  href="https://drive.google.com/file/d/16YaJjc5VRxNYF674fhj7eqm-qqLZ8onn/view"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--primary)' }}
                >
                  View Full Certificate on Google Drive
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact ────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const mailtoLink = `mailto:rjbabul420@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.open(mailtoLink)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="divider" />
        <p className="section-subtitle">Let's work together on something great</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm open to full-time opportunities, freelance projects, and exciting collaborations.
              Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-text">
                  <label>Email</label>
                  <a href="mailto:rjbabul420@gmail.com">rjbabul420@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-text">
                  <label>Phone</label>
                  <a href="tel:+8801751513630">+880 1751 513630</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-text">
                  <label>Location</label>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a className="contact-social-btn" href="https://github.com/rjbabul" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
              <a className="contact-social-btn" href="https://www.linkedin.com/in/rjbabul/" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." required />
            </div>
            <button type="submit" className="form-submit">
              {sent ? '✅ Message Sent!' : '🚀 Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// ── Footer ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed & built with ❤️ by <span>Md. Babul Akter</span> · © {new Date().getFullYear()}
      </p>
      <p style={{ marginTop: '8px', fontSize: '0.8rem' }}>
        <a href="https://github.com/rjbabul" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
          GitHub
        </a>
        {' · '}
        <a href="https://www.linkedin.com/in/rjbabul/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
          LinkedIn
        </a>
      </p>
    </footer>
  )
}

// ── App ─────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Award />
      <Contact />
      <Footer />
    </>
  )
}
