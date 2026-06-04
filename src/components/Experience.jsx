import { useState } from 'react';
import { Link } from 'react-router';
import '../App.css';

const experienceTabs = [
  {
    id: 'kaiser',
    number: '01',
    company: 'Kaiser Permanente',
    label: 'Data Science Intern',
    date: '2025',
    eyebrow: 'Healthcare AI + Data Science',
    roleSummary: 'Data Science Intern',
    summary:
      'Worked on AI-assisted analytics and data science workflows for healthcare operations, with a focus on practical, reliable and interpretable systems.',
    roles: [
      {
        title: 'Data Science Intern',
        date: 'Jun 2025 – Aug 2025',
      },
    ],
    focus: [
      'Built data workflows for operational analytics and decision support.',
      'Explored AI-assisted tooling for faster analysis, reporting and insight generation.',
      'Built predictive models on healthcare membership data to analyze engagement patterns.',
      'Performed exploratory data analysis (EDA) on large healthcare datasets to uncover key behavioral trends impacting member experience.',
    ],
    tags: ['Healthcare AI', 'Data Science', 'Analytics', 'ML Workflows'],
    projects: [],
  },
  {
    id: 'hike',
    number: '02',
    company: 'Hike Pvt. Ltd.',
    label: 'Senior Machine Learning Engineer',
    date: '2020–2024',
    eyebrow: 'Production AI + Creative ML Systems',
    roleSummary:
      'Senior Machine Learning Engineer', 
      // → Machine Learning Engineer → Software Development Engineer → Software Graphics Intern',
    summary:
      'Built AI products, ML tooling, game-tech systems and artist-facing workflows across LLMs, voice AI, generative models, computer vision and 3D pipelines.',
    roles: [
      {
        title: 'Senior Machine Learning Engineer',
        date: 'Jan 2024 – Sept 2024',
      },
      {
        title: 'Machine Learning Engineer',
        date: 'Jan 2023 – Dec 2023',
      },
      {
        title: 'Software Development Engineer',
        date: 'Aug 2021 – Dec 2022',
      },
      {
        title: 'Software Graphics Intern',
        date: 'Jun 2020 – Aug 2021',
      },
    ],
    focus: [
      'Developed voice AI, chatbot and AI platform systems for product and game teams.',
      'Built LLM-powered tools for document workflows, support automation and internal productivity.',
      'Created creative ML tooling using Stable Diffusion, ControlNet, image pipelines and artist-facing automation.',
      'Built graphics, Unity, mesh-processing and 3D asset tooling for production workflows.',
    ],
    tags: [
      'LLMs',
      'Voice AI',
      'Creative AI',
      'Game AI',
      'Computer Vision',
      'Unity',
      '3D Tooling',
    ],
    projects: [
      {
        label: 'Google Docs Assistant',
        slug: 'google-docs-assistant',
      },
      {
        label: 'Voice AI Chatbot',
        slug: 'voice-ai-customer-support-bot',
      },
      {
        label: 'AAA Cricket Content Automation Platform',
        slug: 'cricket-content-automation',
      },
      {
        label: 'Generative AI/ML-Art Pipeline',
        slug: 'creative-ml-art-pipeline',
      },
      {
        label: '3D Asset QA Automation',
        slug: '3d-asset-qa-automation',
      },
    ],
  },
];

export default function Experience() {
  const [activeId, setActiveId] = useState('hike');
  const activeExperience =
    experienceTabs.find((item) => item.id === activeId) || experienceTabs[0];

  return (
    <section
      className="experience-section experience-browser-section"
      id="experience"
      data-aos="fade-up"
    >
      <div className="experience-browser-shell">
        <div className="experience-browser-heading">
          <p className="section-kicker">Work</p>
          <h2 className="experience-heading">Experience</h2>
        </div>

        <div className="experience-browser">
          <div className="experience-browser-tabs" aria-label="Experience tabs">
            {experienceTabs.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`experience-browser-tab ${
                  activeId === item.id ? 'is-active' : ''
                }`}
                onClick={() => setActiveId(item.id)}
              >
                <span className="experience-tab-number">{item.number}</span>

                <span className="experience-tab-copy">
                  <span className="experience-tab-company">{item.company}</span>
                  <span className="experience-tab-label">{item.label}</span>
                </span>

                <span className="experience-tab-date">{item.date}</span>
              </button>
            ))}
          </div>

          <article className="experience-browser-panel">
            <div className="experience-panel-topline">
              <p className="experience-panel-eyebrow">
                {activeExperience.eyebrow}
              </p>
              <span>{activeExperience.date}</span>
            </div>

            <h3>{activeExperience.company}</h3>

            <p className="experience-panel-role">
              {activeExperience.roleSummary}
            </p>

            <p className="experience-panel-summary">
              {activeExperience.summary}
            </p>

            <div className="experience-panel-grid">
              <div>
                <h4>Roles</h4>

                <div className="experience-role-stack">
                  {activeExperience.roles.map((role) => (
                    <div className="experience-role-pill" key={role.title}>
                      <strong>{role.title}</strong>
                      <span>{role.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4>Focus</h4>

                <ul className="experience-focus-list">
                  {activeExperience.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="experience-tag-row">
              {activeExperience.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {activeExperience.projects.length > 0 && (
              <div className="experience-related">
                <h4>Related projects</h4>

                <div className="experience-project-chip-row">
                  {activeExperience.projects.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/projects/${project.slug}`}
                      state={{
                        backTo: '/#experience',
                        backLabel: 'Back to Experience',
                      }}
                      className="experience-project-chip"
                    >
                      {project.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
         <div className="career-timeline-cta" data-aos="fade-up">
          <span>Want the full path?</span>
          <Link to="/career-timeline">View full career timeline →</Link>
        </div>
      </div>
    </section>
  );
}