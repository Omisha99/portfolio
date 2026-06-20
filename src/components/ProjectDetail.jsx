import { Link, useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { getProjectBySlug } from '../data/projects';
import '../App.css';

function isUsableHref(href) {
  return Boolean(href && !href.startsWith('ADD_'));
}

function getBackLink(location) {
  const stateBackTo = location.state?.backTo;
  const stateBackLabel = location.state?.backLabel;

  return {
    to: stateBackTo || '/#projects',
    label: stateBackLabel || 'Projects',
  };
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const project = getProjectBySlug(slug);
  const backLink = getBackLink(location);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <main className="project-detail-page project-reader-page">
        <div className="project-reader-shell">
          <Link to={backLink.to} className="project-reader-back">
            ← Back to {backLink.label}
          </Link>
          <h1 className="project-reader-title">Project not found</h1>
          <p className="project-reader-summary">This project writeup does not exist yet.</p>
        </div>
      </main>
    );
  }

  const usableLinks = project.links?.filter((link) => isUsableHref(link.href)) ?? [];
  const placeholderLinks = project.links?.filter((link) => !isUsableHref(link.href)) ?? [];

  return (
    <main className="project-detail-page project-reader-page">
      <article className="project-reader-shell">
        {/* <nav className="project-reader-topbar" aria-label="Project navigation">
          <Link to={backLink.to} className="project-reader-back">
            ← {backLink.label}
          </Link>
        </nav> */}
        <nav className="project-reader-topbar" aria-label="Project navigation">
          {/* <Link className="project-reader-back" to="/#projects">
            ← Back to portfolio
          </Link> */}
          <Link
              className="project-reader-back"
              to={backLink.to}
              state={{ scrollTo: 'projects' }}
            >
              ← {backLink.label}
            </Link>
        </nav>

        <header className="project-reader-hero">
          <div className="project-reader-hero-copy">
            <p className="project-reader-kicker">{project.eyebrow}</p>
            <h1 className="project-reader-title">{project.title}</h1>
            <p className="project-reader-summary">{project.summary}</p>

            {(usableLinks.length > 0 || placeholderLinks.length > 0) && (
              <div className="project-reader-actions" aria-label="Project links">
                {usableLinks.map((link) => (
                  <a
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    className={`project-reader-button ${link.type === 'paper' ? 'project-reader-button-paper' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}

                {placeholderLinks.map((link) => (
                  <span
                    key={`${link.label}-${link.href}`}
                    className="project-reader-button project-reader-button-disabled"
                    title={`Replace ${link.href} in src/data/projects.js`}
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            )}
          </div>

          <aside className="project-reader-meta" aria-label="Project snapshot">
            <h2>Snapshot</h2>

            {project.metrics?.length > 0 && (
              <div className="project-reader-metrics">
                {project.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            )}

            <div className="project-reader-tech">
              <p>Stack</p>
              <div>
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </aside>
        </header>
        {project.gallery?.length > 0 && (
            <section className="project-render-gallery" data-aos="fade-up">
              <div className="project-render-gallery-header">
                <p className="section-kicker">Rendered Output</p>
                {/* <h2>Results from the renderer</h2> */}
              </div>

              <div className="project-render-grid">
                {project.gallery.map((image) => (
                  <figure className="project-render-card" key={image.src}>
                    <img src={image.src} alt={image.alt} />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
        <div className="project-reader-body">
          <aside className="project-reader-toc" aria-label="Project sections">
            <a href="#overview">Overview</a>
            <a href="#problem">Problem</a>
            <a href="#approach">Approach</a>
            <a href="#outcome">Outcome</a>
            <a href="#learnings">Learnings</a>
          </aside>

          <div className="project-reader-content">
            <section className="project-reader-section" id="overview">
              <span className="project-reader-section-number">01</span>
              <h2>Overview</h2>
              <p>{project.readme.overview}</p>
            </section>

            <section className="project-reader-section" id="problem">
              <span className="project-reader-section-number">02</span>
              <h2>Problem</h2>
              <p>{project.readme.problem}</p>
            </section>

            <section className="project-reader-section" id="approach">
              <span className="project-reader-section-number">03</span>
              <h2>Approach</h2>
              <ul>
                {project.readme.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="project-reader-section" id="outcome">
              <span className="project-reader-section-number">04</span>
              <h2>Outcome</h2>
              <p>{project.readme.outcome}</p>
            </section>

            <section className="project-reader-section" id="learnings">
              <span className="project-reader-section-number">05</span>
              <h2>What I learned</h2>
              <ul>
                {project.readme.learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
