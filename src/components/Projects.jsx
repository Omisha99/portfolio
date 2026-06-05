import { Link } from 'react-router';
import { projects, projectSourceLabels } from '../data/projects';
import '../App.css';

const featuredProjectSlugs = [
  'synaptica-ai',
  'plant-viability-cv-system',
  // 'google-docs-assistant',
  'voice-ai-customer-support-bot',
];

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

export default function Projects() {
  return (
    <section
      className="projects-section featured-projects-section"
      id="projects"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="projects-content">
        <div className="featured-projects-header">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 className="projects-heading featured-projects-heading">Featured Projects</h2>
          </div>

          <Link className="project-gallery-link" to="/project-gallery">
            View full project gallery →
          </Link>
        </div>

        <div className="project-grid featured-project-grid">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              // state={{ backTo: '/#projects', backLabel: 'Back to Featured Projects' }}
              state={{
                backTo: '/',
                backLabel: 'Back to Featured Projects',
                backState: { scrollTo: 'projects' }
              }}
              className="project-card project-card-clickable project-card-link featured-project-card"
              aria-label={`Open ${project.title} project writeup`}
            >
              <div className="project-card-meta-row">
                <p className="project-card-eyebrow">{project.category || project.eyebrow}</p>
                <span className={`project-source-pill project-source-${project.source}`}>
                  {projectSourceLabels[project.source]}
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="project-tags">
                {project.tech.slice(0, 5).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {project.metrics?.[0] && (
                <p className="project-card-metric">{project.metrics[0]}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
