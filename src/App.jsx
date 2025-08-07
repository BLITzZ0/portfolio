import React, { useState, useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';
import image from './assets/image.png';
import resume from 'public/resume/Abhishek_Kr_Pandey_Resume_August.pdf'

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [projectsToShow, setProjectsToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_c7f84q4',
    'template_ky16kim',
    form.current,
    'MzADAogpG0Kay8Z7a'
  ).then(
    (result) => {
      console.log(result.text);
      alert("Message sent!");
      e.target.reset();
    },
    (error) => {
      console.log(error.text);
      alert("Failed to send message.");
    }
  );
};



  // Projects data
  const projectsData = [
    {
      title: "QTrack: Smart Queue Management System",
      description: "Engineered a smart queue automation platform handling real-time appointment bookings using WebSockets and JWT-based authentication. Integrated role-based access control (RBAC) and RESTful APIs for scalable, modular backend functionality.",
      techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Socket.IO"],
      githubLink: "#"
    },
    {
      title: "DDAS: Data Download Duplication Alert System",
      description: "Designed a duplication detection system that reduced redundant file downloads by 60%, using metadata hashing (MD5/SHA) and network traffic monitoring via TCP/IP.",
      techStack: ["Python", "TCP/IP", "Hashing Algorithms"],
      githubLink: "#"
    },
    {
      title: "AquaMesh: Smart Real-Time Irrigation System",
      description: "Developed an IoT-based irrigation platform to automate water scheduling based on soil moisture using Arduino sensors. Leveraged Flask API and Kafka message queues for real-time communication; implemented route optimization with Dijkstra's algorithm.",
      techStack: ["Python", "Arduino", "Kafka", "Flask", "MongoDB", "Dijkstra's Algorithm"],
      githubLink: "#"
    }
    // {
    //   title: "Project 4: New Portfolio Feature",
    //   description: "Added dark mode and project pagination to portfolio website with smooth transitions and animations.",
    //   techStack: ["React", "CSS3", "JavaScript"],
    //   githubLink: "#"
    // },
    // {
    //   title: "Project 5: E-commerce Dashboard",
    //   description: "Built an analytics dashboard for e-commerce platforms with real-time sales tracking and customer behavior insights.",
    //   techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    //   githubLink: "#"
    // },
    // {
    //   title: "Project 6: Fitness Tracker App",
    //   description: "Mobile application for tracking workouts and nutrition with AI-powered recommendations.",
    //   techStack: ["React Native", "Firebase", "TensorFlow.js"],
    //   githubLink: "#"
    // }
  ];

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Show more projects with slide effect
  const showMoreProjects = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setProjectsToShow(projectsData.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Show less projects
  const showLessProjects = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setProjectsToShow(3);
      setIsTransitioning(false);
    }, 300);
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`portfolio ${theme}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">Abhishek<span>.</span></a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </div>
          <div className="mobile-menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Abhishek Kumar Pandey</h1>
              <h2>Full Stack Developer & MCA Graduate</h2>
              <p className="tagline">Building scalable solutions for real-world problems</p>
              <p className="summary">
                MCA graduate specializing in MERN stack development with experience in 
                RESTful API design, real-time systems, and network-based applications. 
                Passionate about creating secure, efficient software solutions.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn primary">Get in Touch</a>
                <a 
                  href = {resume} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn secondary"
                >
                  View Resume
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-wrapper">
                <img 
                  src={image} 
                  alt="Abhishek Kumar Pandey" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Master's in Computer Applications graduate from Amity University Jharkhand 
                with a passion for creating impactful software solutions. My journey in technology 
                began during my Bachelor's in Computer Applications at NSHM Knowledge Campus, 
                where I developed a strong foundation in programming and problem-solving.
              </p>
              <p>
                I specialize in full-stack development using the MERN stack and have hands-on 
                experience with real-time systems, IoT applications, and network-based solutions. 
                My approach combines technical expertise with creative problem-solving to build 
                efficient, scalable applications.
              </p>
              <p>
                When I'm not coding, you'll find me solving Data Structures & Algorithms problems 
                on LeetCode (300+ solved), exploring new technologies, or contributing to open-source 
                projects. I was also a finalist in the Smart India Hackathon 2024, which honed my 
                skills in innovation and teamwork.
              </p>
            </div>
            <div className="education">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Master's in Computer Applications</h4>
                <p>Amity University Jharkhand, Ranchi (2023-2025)</p>
                <p>CGPA: 8.7/10</p>
              </div>
              <div className="education-item">
                <h4>Bachelor's in Computer Applications</h4>
                <p>NSHM Knowledge Campus, Durgapur (2020-2023)</p>
                <p>CGPA: 9.0/10</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Languages</h3>
              <div className="skills-list">
                <span>C++</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>Python</span>
                <span>SQL</span>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Databases</h3>
              <div className="skills-list">
                <span>MongoDB</span>
                <span>PostgreSQL</span>
                <span>MySQL</span>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Runtime/Platform</h3>
              <div className="skills-list">
                <span>Node.js</span>
                <span>Arduino</span>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Cloud/Data Tools</h3>
              <div className="skills-list">
                <span>GCP (BigQuery)</span>
                <span>Kafka</span>
                <span>Git</span>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Tools</h3>
              <div className="skills-list">
                <span>Visual Studio</span>
                <span>Jupyter</span>
                <span>GitHub</span>
                <span>Postman</span>
              </div>
            </div>
            
            <div className="skills-category">
              <h3>Libraries/Frameworks</h3>
              <div className="skills-list">
                <span>React</span>
                <span>Express.js</span>
                <span>Flask</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className={`projects-grid ${isTransitioning ? 'transitioning' : ''}`}>
            {projectsData.slice(0, projectsToShow).map((project, index) => (
              <div className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="github-link">GitHub Repository</a>
                </div>
              </div>
            ))}
          </div>
          {projectsData.length > 3 && (
            <div className="projects-toggle">
              {projectsToShow <= 3 ? (
                <button className="btn primary" onClick={showMoreProjects}>
                  Show More Projects
                </button>
              ) : (
                <button className="btn secondary" onClick={showLessProjects}>
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <h3>Software Development Trainee</h3>
              <h4>National Informatics Centre (NIC)</h4>
            </div>
            <div className="experience-details">
              <div className="responsibilities">
                <h5>Responsibilities & Achievements:</h5>
                <ul>
                  <li>Developed a full-stack web-based Tenant Management System using HTML, CSS, JavaScript, PHP, and MySQL</li>
                  <li>Built responsive UI components and secure backend modules for CRUD operations</li>
                  <li>Collaborated with team members to implement system requirements and optimize performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-list">
            <div className="certification-item">
              <h3>Software Engineering Virtual Experience Program</h3>
              <a href={'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_qRmN3sgDNCsqaQRNJ_1673926158841_completion_certificate.pdf'} className="github-link" target="_blank" 
  rel="noopener noreferrer">Certificate Link</a>
            </div>
            <div className="certification-item">
              <h3>Agile Methodology Virtual Experience Program</h3>
              <a href={'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/ZZswQd6xGydd758vz_Cognizant%20USA_qRmN3sgDNCsqaQRNJ_1683233703680_completion_certificate.pdf'} className="github-link" target="_blank" 
  rel="noopener noreferrer">Certificate Link</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>Feel free to reach out to me for collaboration or opportunities!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="icon">✉️</i>
                  <span>ababhishek3005@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="icon">👤</i>
                  <a 
                    href="https://linkedin.com/in/abhishek-k-0181b5229/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="contact-item">
                  <i className="icon">💻</i>
                  <a 
                    href="https://github.com/BLITzZ0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input type="text" name="user_name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="user_email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn primary">Send Message</button>
            </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Abhishek Kumar Pandey. All rights reserved.</p>
          <div className="social-links">
            <a 
              href="https://linkedin.com/in/abhishek-k-0181b5229/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="icon">👤</i>
            </a>
            <a 
              href="https://github.com/BLITzZ0" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="icon">💻</i>
            </a>
            <a 
              href="mailto:ababhishek3005@gmail.com" 
              aria-label="Email"
            >
              <i className="icon">✉️</i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;