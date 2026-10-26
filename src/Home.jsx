import { useState } from "react";
import "./App.css";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiPython,
  SiWhatsapp,
  SiX,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
];

const skills = [
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "#5FA04E",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "#242426",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "Git",
    category: "Version control",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Python",
    category: "Currently learning",
    icon: SiPython,
    color: "#3776AB",
  },
];

const projects = [
  {
    name: "YelpCamp",
    number: "01",
    description:
      "A campground review platform where users can explore campgrounds and share reviews. Built with Node.js, Express, and MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB"],
    status: "Live project",
    demo: "https://yelpcamp-snowy.vercel.app/",
    code: "https://github.com/Calista557/yelpcamp",
    image: "/yelpcamp.png",
    imageAlt: "YelpCamp campground review application",
  },
  {
    name: "SabiStock",
    number: "02",
    description:
      "An inventory, point-of-sale, and credit management system in development for Nigerian shops and small businesses.",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "In development",
    demo: null,
    code: null,
    image: "/sabistock.png",
    imageAlt: "SabiStock inventory and point-of-sale application",
  },
  {
    name: "Aura Weather",
    number: "03",
    description:
      "A weather application with a straightforward interface for checking weather information.",
    technologies: ["JavaScript", "HTML", "CSS"],
    status: "Live project",
    demo: "https://calista557.github.io/weatherApp/",
    code: "https://github.com/Calista557/weatherApp",
    image: "/auraweather.png",
    imageAlt: "Aura Weather application",
  },
];

const values = [
  {
    number: "01",
    title: "Problem-solving",
    description:
      "I look beyond the code to understand the problem and build solutions that address real needs.",
  },
  {
    number: "02",
    title: "Built to be useful",
    description:
      "I focus on creating practical applications that make tasks simpler and easier to manage.",
  },
  {
    number: "03",
    title: "Thoughtful engineering",
    description:
      "I value intuitive interfaces, clear code, and software that is easier to maintain.",
  },
  {
    number: "04",
    title: "Learning by building",
    description:
      "I turn new knowledge into working projects, strengthening my skills through hands-on development.",
  },
];

const contactLinks = [
  {
    name: "Email Me",
    detail: "nwannecalista558@gmail.com",
    href: "mailto:nwannecalista558@gmail.com",
    icon: MdEmail,
    color: "#8B78C6",
    external: false,
  },
  {
    name: "WhatsApp",
    detail: "Chat with me",
    href: "https://wa.me/2349038495803",
    icon: SiWhatsapp,
    color: "#25D366",
    external: true,
  },
  {
    name: "LinkedIn",
    detail: "Connect professionally",
    href: "https://www.linkedin.com/in/nwanne-calista",
    icon: FaLinkedin,
    color: "#0A66C2",
    external: true,
  },
  {
    name: "X",
    detail: "Find me on X",
    href: "https://x.com/NwanneCalista1",
    icon: SiX,
    color: "#242426",
    external: true,
  },
];

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="portfolio-app">
      <header className="navbar">
        <div className="nav-container">
          <nav className="nav-links-desktop" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-contact">
            Get in Touch <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span
              className={`hamburger-bar ${
                mobileMenuOpen ? "bar-top-open" : ""
              }`}
            />
            <span
              className={`hamburger-bar ${
                mobileMenuOpen ? "bar-bottom-open" : ""
              }`}
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="nav-links-mobile"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-mobile"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="nav-link-mobile nav-mobile-contact"
              onClick={closeMobileMenu}
            >
              Get in Touch ↗
            </a>
          </nav>
        )}
      </header>

      <main>
        <section
          id="home"
          className="hero-section"
          aria-labelledby="hero-title"
        >
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true" />
                SOFTWARE DEVELOPER
              </span>

              <h1 id="hero-title" className="hero-title">
                Nwanne Calista
              </h1>

              <p className="hero-intro">
                I build full-stack web applications and practical digital
                solutions that solve real-world problems. I combine thoughtful
                design with functional, reliable software to create experiences
                that are useful, intuitive, and built around people’s needs.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View My Projects <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="portrait-wrapper">
                <div className="portrait-halo" aria-hidden="true" />

                <div className="orbit-track" aria-hidden="true">
                  <span className="orbit-dot orbit-dot-1" />
                  <span className="orbit-dot orbit-dot-2" />
                </div>

                <div className="portrait-frame">
                  <img
                    src="/calista.png"
                    alt="Portrait of Nwanne Calista"
                    className="portrait-img"
                    width="480"
                    height="480"
                    fetchPriority="high"
                  />
                </div>

                <div className="portrait-caption">
                  <span className="portrait-caption-dot" />
                  <span>Hello, I am Calista</span>
                </div>
              </div>
            </div>
          </div>

          <a href="#skills" className="hero-scroll-link">
            <span className="hero-scroll-line" aria-hidden="true" />
            Scroll to explore
          </a>
        </section>

        <section
          id="skills"
          className="skills-section"
          aria-labelledby="skills-title"
        >
          <div className="section-container">
            <SectionHeading
              eyebrow="My toolkit"
              title="Technologies I work with"
              description="The tools I use to build applications, solve problems, and keep growing as a developer."
            />

            <div className="skills-grid">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;

                return (
                  <article className="skill-item" key={skill.name}>
                    <div className="skill-icon" aria-hidden="true">
                      <SkillIcon size={38} color={skill.color} />
                    </div>
                    <h3>{skill.name}</h3>
                    <p>{skill.category}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="projects-showcase-section"
          aria-labelledby="projects-title"
        >
          <div className="section-container">
            <div className="projects-section-top">
              <SectionHeading
                eyebrow="Selected work"
                title="A few things I have built"
                description="A collection of web applications built to solve real problems, explore practical ideas, and turn concepts into functional digital experiences."
              />

              <a
                className="projects-github-link"
                href="https://github.com/Calista557"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="portfolio-projects-grid">
              {projects.map((project) => (
                <article className="portfolio-project-card" key={project.name}>
                  <div className="portfolio-project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="portfolio-project-image"
                      loading="lazy"
                      width="640"
                      height="420"
                    />
                    <span className="project-number">{project.number}</span>
                  </div>

                  <div className="portfolio-project-body">
                    <div className="portfolio-project-title-row">
                      <h3>{project.name}</h3>
                      <span
                        className={`project-status ${
                          project.status === "In development"
                            ? "status-progress"
                            : ""
                        }`}
                      >
                        <span
                          className="project-status-dot"
                          aria-hidden="true"
                        />
                        {project.status}
                      </span>
                    </div>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.technologies.map((technology) => (
                        <span className="project-tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="portfolio-project-actions">
                      {project.demo && (
                        <a
                          className="text-link"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {project.code && (
                        <a
                          className="text-link text-link-secondary"
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {!project.demo && (
                        <span className="project-link-muted">
                          Work in progress
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="about-section"
          aria-labelledby="about-title"
        >
          <div className="section-container about-layout">
            <div className="about-copy">
              <SectionHeading
                eyebrow="BEYOND THE CODE"
                title="Thoughtful work. Useful solutions."
              />

              <p>
                I am a software developer who builds full-stack web applications
                and practical software solutions for real-world needs. I combine
                technical problem-solving with thoughtful design to create
                intuitive, reliable products that make everyday tasks easier.
              </p>

              <p>
                My background also includes graphic design and photo editing
                with CorelDRAW and Adobe Photoshop. This experience has shaped
                my appreciation for visual detail, composition, and clear
                communication.
              </p>

              <p>
                Beyond technology, I have practical experience supporting
                business operations, including international product sourcing
                and logistics coordination. This has helped me understand the
                everyday challenges businesses face and the value of solutions
                that make their work easier.
              </p>

              <p>
                I am currently building SabiStock, an inventory and sales
                management product designed to help small businesses manage
                stock, track sales, and maintain better business records. It
                reflects my approach to software development: understand the
                problem, build a practical solution, and make it useful to the
                people who depend on it.
              </p>

              <a href="#contact" className="about-contact-link">
                Let us talk about your project <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="about-values-panel">
              <h2 className="values-heading">Values</h2>

              <div className="about-values">
                {values.map((value) => (
                  <article className="value-item" key={value.number}>
                    <span className="value-number">{value.number}</span>
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="section-container contact-panel">
            <div className="contact-copy">
              <span className="section-eyebrow">LET'S WORK TOGETHER</span>

              <h2 id="contact-title">Get in Touch</h2>

              <p>
                Have a project in mind, a question, or just want to say hello?
              </p>
            </div>

            <div className="contact-methods">
              {contactLinks.map((contact) => {
                const ContactIcon = contact.icon;

                return (
                  <a
                    key={contact.name}
                    className="contact-method"
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                  >
                    <span
                      className="contact-method-icon"
                      aria-hidden="true"
                      style={{ color: contact.color }}
                    >
                      <ContactIcon size={25} />
                    </span>

                    <span className="contact-method-copy">
                      <strong>{contact.name}</strong>
                      <span>{contact.detail}</span>
                    </span>

                    <span className="contact-method-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-simple">
        <div className="footer-inner">
          <p className="footer-copyright">
            © 2026 Nwanne Calista. All rights reserved.
          </p>

          <a href="#home" className="footer-back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
