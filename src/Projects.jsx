import { Link } from "react-router-dom";
import "./Projects.css";
const CURRENT_YEAR = new Date().getFullYear();
const projects = [
  {
    name: "YelpCamp",
    description:
      "A campground review platform built with Node.js, Express, and MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB"],
    status: "Live project",
    link: "https://yelpcamp-snowy.vercel.app/",
    codeLink: "https://github.com/Calista557/yelpcamp",
    image: "/yelpcamp.png",
    imageAlt: "YelpCamp campground review application",
  },
  {
    name: "Aura Weather",
    description:
      "A weather application that presents weather information through a web interface.",
    technologies: ["JavaScript", "HTML", "CSS"],
    status: "Live project",
    link: "https://calista557.github.io/weatherApp/",
    codeLink: "https://github.com/Calista557/weatherApp",
    image: "/auraweather.png",
    imageAlt: "Aura Weather application",
  },
  {
    name: "SabiStock",
    description:
      "An inventory, point-of-sale, and credit management system designed for Nigerian shops.",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "In development",
    link: null,
    codeLink: null,
    image: "/sabistock.png",
    imageAlt: "SabiStock inventory and point-of-sale application",
  },
];

function Projects() {
  return (
    <div className="portfolio-app projects-page">
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            <span className="nav-logo">Nwanne Calista</span>
          </Link>

          <nav className="nav-links-desktop" aria-label="Main navigation">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/projects" className="nav-link" aria-current="page">
              Projects
            </Link>
            <Link to="/#skills" className="nav-link">
              Skills
            </Link>
            <Link to="/#about" className="nav-link">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="all-projects-section">
          <div className="section-container">
            <Link to="/" className="projects-back-link">
              <span aria-hidden="true">←</span> Back to Home
            </Link>

            <div className="projects-page-heading">
              <span className="section-eyebrow">My portfolio</span>
              <h1>Projects I Have Built</h1>
              <p>
                A collection of my work, experiments, and software solutions
                built to solve practical problems.
              </p>
            </div>

            <div className="all-projects-grid">
              {projects.map((project) => (
                <article className="all-project-card" key={project.name}>
                  <div className="all-project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="all-project-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="all-project-body">
                    <div className="all-project-title-row">
                      <h2>{project.name}</h2>
                      <span
                        className={`project-status ${
                          project.status === "In development"
                            ? "status-progress"
                            : ""
                        }`}
                      >
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

                    <div className="project-actions">
                      {project.link && (
                        <a
                          className="text-link"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {project.codeLink && (
                        <a
                          className="text-link"
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Code <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {!project.link && (
                        <span className="project-link-muted">
                          Currently in development
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-simple">
        <div className="footer-inner">
          <Link to="/" className="footer-brand">
            Nwanne Calista
          </Link>
          <p>© {CURRENT_YEAR} Nwanne Calista. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Projects;
