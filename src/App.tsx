import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <span className="logo-icon">⚡</span>
            <span>DevOps Engineer</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hello, I'm</p>
              <h1 className="hero-name"> Isuru Anuraga Kuruppu</h1>
              <h2 className="hero-title">DevOps & Cloud Engineer</h2>
              <p className="hero-description">
                Transforming infrastructure with cloud-native solutions, automation, and scalable architectures. 
                Passionate about CI/CD, containerization, and infrastructure as code.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                  View My Work
                </button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </button>
              </div>
              <div className="hero-social">
                <a href="https://github.com/IsuruAnuraga" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/isuru-anuraga-sri-kuruppu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-avatar">
                <div className="avatar-glow"></div>
                <div className="tech-icons">
                  <span className="tech-icon">☁️</span>
                  <span className="tech-icon">🐳</span>
                  <span className="tech-icon">⚙️</span>
                  <span className="tech-icon">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate DevOps & Cloud Engineer with expertise in designing, building, and maintaining 
                scalable cloud infrastructure. I specialize in automating deployment pipelines, managing containerized 
                applications, and implementing infrastructure as code solutions.
              </p>
              <p>
                With a strong foundation in cloud platforms like AWS, Azure, and GCP, I help organizations achieve 
                faster deployment cycles, improved reliability, and reduced operational overhead through automation 
                and best practices.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Projects Deployed</p>
                </div>
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>20+</h3>
                  <p>Technologies Mastered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Cloud Platforms</h3>
              <div className="skill-items">
                <div className="skill-item">AWS</div>
                <div className="skill-item">Azure</div>
                <div className="skill-item">Google Cloud</div>
                <div className="skill-item">Kubernetes</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>CI/CD & Automation</h3>
              <div className="skill-items">
                <div className="skill-item">Jenkins</div>
                <div className="skill-item">GitHub Actions</div>
                <div className="skill-item">GitLab CI</div>
                <div className="skill-item">Terraform</div>
                <div className="skill-item">Ansible</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Containerization</h3>
              <div className="skill-items">
                <div className="skill-item">Docker</div>
                <div className="skill-item">Kubernetes</div>
                <div className="skill-item">Helm</div>
                <div className="skill-item">Docker Compose</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Monitoring & Logging</h3>
              <div className="skill-items">
                <div className="skill-item">Prometheus</div>
                <div className="skill-item">Grafana</div>
                <div className="skill-item">ELK Stack</div>
                <div className="skill-item">CloudWatch</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Scripting & Languages</h3>
              <div className="skill-items">
                <div className="skill-item">Python</div>
                <div className="skill-item">Bash</div>
                <div className="skill-item">YAML</div>
                <div className="skill-item">Go</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Infrastructure as Code</h3>
              <div className="skill-items">
                <div className="skill-item">Terraform</div>
                <div className="skill-item">CloudFormation</div>
                <div className="skill-item">ARM Templates</div>
                <div className="skill-item">Pulumi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">2022 - Present</span>
                <h3>Senior DevOps Engineer</h3>
                <h4>Company Name</h4>
                <ul>
                  <li>Architected and implemented cloud infrastructure on AWS using Terraform, reducing infrastructure costs by 40%</li>
                  <li>Designed and maintained CI/CD pipelines using Jenkins and GitHub Actions, improving deployment frequency by 300%</li>
                  <li>Managed Kubernetes clusters with 100+ microservices, ensuring 99.9% uptime</li>
                  <li>Implemented monitoring solutions using Prometheus and Grafana, reducing MTTR by 50%</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">2020 - 2022</span>
                <h3>DevOps Engineer</h3>
                <h4>Company Name</h4>
                <ul>
                  <li>Migrated legacy applications to containerized architecture using Docker and Kubernetes</li>
                  <li>Automated infrastructure provisioning using Terraform and Ansible</li>
                  <li>Set up comprehensive logging and monitoring using ELK stack</li>
                  <li>Reduced deployment time from hours to minutes through CI/CD optimization</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">2018 - 2020</span>
                <h3>Cloud Engineer</h3>
                <h4>Company Name</h4>
                <ul>
                  <li>Managed multi-cloud infrastructure across AWS and Azure</li>
                  <li>Implemented infrastructure as code practices using CloudFormation and ARM templates</li>
                  <li>Configured and maintained CI/CD pipelines for multiple development teams</li>
                  <li>Provided technical guidance and training to junior engineers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">☁️</div>
                <div className="project-links">
                  <a href="#" aria-label="GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                  <a href="#" aria-label="External Link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
              </div>
              <h3>Cloud Infrastructure Automation</h3>
              <p>Automated multi-cloud infrastructure provisioning using Terraform, reducing deployment time by 80% and ensuring consistent environments.</p>
              <div className="project-tags">
                <span>Terraform</span>
                <span>AWS</span>
                <span>Kubernetes</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🚀</div>
                <div className="project-links">
                  <a href="#" aria-label="GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                  <a href="#" aria-label="External Link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
              </div>
              <h3>CI/CD Pipeline Optimization</h3>
              <p>Built comprehensive CI/CD pipelines using Jenkins and GitHub Actions, enabling automated testing and deployment for multiple microservices.</p>
              <div className="project-tags">
                <span>Jenkins</span>
                <span>GitHub Actions</span>
                <span>Docker</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">📊</div>
                <div className="project-links">
                  <a href="#" aria-label="GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                  <a href="#" aria-label="External Link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
              </div>
              <h3>Monitoring & Observability Platform</h3>
              <p>Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack, providing real-time insights into system performance.</p>
              <div className="project-tags">
                <span>Prometheus</span>
                <span>Grafana</span>
                <span>ELK Stack</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🐳</div>
                <div className="project-links">
                  <a href="#" aria-label="GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                  <a href="#" aria-label="External Link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                </div>
              </div>
              <h3>Kubernetes Cluster Management</h3>
              <p>Designed and managed production Kubernetes clusters, implementing auto-scaling, service mesh, and comprehensive security policies.</p>
              <div className="project-tags">
                <span>Kubernetes</span>
                <span>Helm</span>
                <span>Istio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about DevOps and cloud technologies.
          </p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h3>LinkedIn</h3>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🐙</div>
                <div>
                  <h3>GitHub</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={6} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Name. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
