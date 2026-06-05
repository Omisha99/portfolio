import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { projectFilters, projects, projectSourceLabels } from '../data/projects';
import '../App.css';

function getFilterCount(filterId) {
  if (filterId === 'all') return projects.length;
  return projects.filter((project) => project.source === filterId).length;
}

function ProjectThumbnail({ project }) {
  const thumbnail = project.thumbnail ?? {};
  const variant = thumbnail.variant ?? 'default';
  const tone = thumbnail.tone ?? project.source;

  return (
    <div className={`project-gallery-thumb project-gallery-thumb-${variant} project-gallery-thumb-${tone}`}>
      <div className="project-gallery-thumb-grid" aria-hidden="true" />
      <div className="project-gallery-thumb-glow" aria-hidden="true" />
      <div className="project-gallery-thumb-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p>{thumbnail.label ?? project.category ?? project.eyebrow}</p>
    </div>
  );
}

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((project) => project.source === activeFilter);
  }, [activeFilter]);

  return (
    <main className="project-gallery-page project-gallery-page-visual">
      <section className="project-gallery-shell" data-aos="fade-up">
        <nav className="project-gallery-topbar" aria-label="Project gallery navigation">
          {/* <Link className="project-reader-back" to="/#projects">
            ← Back to portfolio
          </Link> */}
          <Link
              className="project-reader-back"
              to="/"
              state={{ scrollTo: 'projects' }}
            >
              ← Back to portfolio
            </Link>
        </nav>

        <header className="project-gallery-hero project-gallery-hero-visual">
          <p className="section-kicker">Project archive</p>
          <h1 className="project-gallery-title">Project Gallery</h1>
          <p className="project-gallery-intro">
            A visual archive of research, production AI systems, creative tooling,
            data visualization, and interactive projects.
          </p>
        </header>

        <div className="project-filter-bar" aria-label="Filter projects by source">
          {projectFilters.map((filter) => (
            <button
              type="button"
              key={filter.id}
              className={`project-filter-pill ${activeFilter === filter.id ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              <span>{filter.label}</span>
              <span className="project-filter-count">{getFilterCount(filter.id)}</span>
            </button>
          ))}
        </div>

        <div className="project-gallery-grid-visual">
          {visibleProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              state={{ backTo: '/project-gallery', backLabel: 'Back to Project Gallery' }}
              className="project-gallery-card-visual"
              aria-label={`Open ${project.title} project writeup`}
            >
              <ProjectThumbnail project={project} />

              <div className="project-gallery-card-body">
                <div className="project-card-meta-row">
                  <p className="project-card-eyebrow">{project.category || project.eyebrow}</p>
                  <span className={`project-source-pill project-source-${project.source}`}>
                    {projectSourceLabels[project.source]}
                  </span>
                </div>

                <h2>{project.title}</h2>
                <p>{project.summary}</p>

                <div className="project-tags project-gallery-card-tags">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
