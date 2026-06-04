import { Link } from 'react-router';
import { FaGraduationCap, FaBriefcase, FaIdBadge } from 'react-icons/fa';

import '../App.css';

const timelineItems = [
  {
    id: 'uofu-grad',
    track: 'education',
    icon: <FaGraduationCap />,
    year: '2024–2026',
    label: 'Master of Science',
    title: 'University of Utah',
    subtitle: 'M.S. Computer Science',
    body:
      'Formalized my AI foundation through graduate work in Machine Learning, Deep Learning, Neuro-Symbolic Modeling, NLP, Interactive Computer Graphics and applied ML systems.',
    tags: ['Graduate CS', 'Machine Learning', 'Deep Learning', 'Research Projects'],
  },
  {
    id: 'uofu-grad',
    track: 'education',
    icon: <FaGraduationCap />,
    year: '2025–2026',
    label: 'Graduate Certificate',
    title: 'University of Utah',
    subtitle: 'Deep Learning in AI & Robotics Graduate Certificate',
    // body:
    //   'Formalized my AI foundation through graduate work in Machine Learning, Deep Learning, Neuro-Symbolic Modeling, NLP, Interactive Computer Graphics and applied ML systems.',
    tags: ['Machine Learning', 'Deep Learning', 'Research Projects'],
  },
  {
    id: 'kaiser',
    track: 'work',
    icon: <FaIdBadge />,
    year: '2025',
    label: 'Internship',
    title: 'Kaiser Permanente',
    subtitle: 'Data Science Intern',
    body:
      'Applied AI and data science to healthcare operations, focusing on analytics workflows, stakeholder-facing insight, and practical systems where reliability and interpretability matter.',
    tags: ['Healthcare AI', 'Data Science', 'Analytics', 'Responsible AI'],
  },
  {
    id: 'hike',
    track: 'work',
    icon: <FaBriefcase />,
    year: '2020–2024',
    label: 'Full Time',
    title: 'Hike Pvt. Ltd.',
    subtitle: 'AI systems, ML tooling, creative automation, and 3D production pipelines',
    body:
      'Built AI products, ML tooling, game-tech systems, and artist-facing workflows across LLMs, voice AI, generative models, computer vision, Unity, and 3D pipelines.',
    roles: [
      { title: 'Senior Machine Learning Engineer', date: 'Jan 2024 – Aug 2024' },
      { title: 'Machine Learning Engineer', date: 'Jan 2023 – Dec 2023' },
      { title: 'Software Development Engineer', date: 'Aug 2021 – Dec 2022' },
      { title: 'Software Graphics Intern', date: 'Jan 2020 – Jul 2021' },
    ],
    tags: ['LLMs', 'Voice AI', 'Creative AI', 'Game AI', 'Computer Vision', 'Unity', '3D Tooling'],
  },
  {
    id: 'hcl-internship',
    track: 'work',
    icon: <FaIdBadge />,
    year: 'Jun 2019 – Jul 2019',
    label: 'Internship',
    title: 'HCL Technologies',
    subtitle: 'Cloud Computing + NoSQL Intern',
    body:
      'Built an early foundation in cloud computing and database systems through hands-on exposure to AWS services, serverless concepts, and MongoDB architecture and operations.',
    tags: ['AWS', 'Cloud Computing', 'NoSQL', 'MongoDB'],
  },
  {
    id: 'cube-square-internship',
    track: 'work',
    icon: <FaIdBadge />,
    year: 'Jun 2018 – Jul 2018',
    label: 'Internship',
    title: 'Cube Square Technologies',
    subtitle: 'Software Development Intern',
    body:
      'Developed an Android application for scholarship discovery and application management, integrating APIs and search/filter workflows to help students find and track scholarship opportunities.',
    tags: ['Android Studio', 'Android Development', 'APIs', 'Mobile Apps'],
  },
  {
    id: 'undergrad',
    track: 'education',
    icon: <FaGraduationCap />,
    year: '2017–2021',
    label: 'Undergraduate',
    title: 'Guru Gobind Singh Indraprastha University',
    subtitle: 'BTech Computer Science & Engineering',
    // body:
    //   'Built the technical base that led me toward graphics, AI tooling, and human-centered engineering. This period shaped how I think about systems: not just as code, but as tools people actually use.',
    tags: ['Computer Science', 'Programming', 'Creative Tech'],
  },
];

const principles = [
  'Build AI systems that move from prototype to product.',
  'Translate creative workflows into practical ML and engineering tools.',
  'Work across LLMs, computer vision, speech, generative AI, and 3D pipelines.',
];

export default function CareerTimeline() {
  return (
    <main className="career-page career-page-split">
      <div className="career-shell">
        <div className="career-topbar">
          <Link className="project-reader-back career-back-link" to="/#experience">
            ← Back to Experience
          </Link>
          <span className="career-page-label">Full Path</span>
        </div>

        <section className="career-hero career-hero-split" data-aos="fade-up">
          <p className="section-kicker">Career Timeline</p>
          <h1>How I got here.</h1>
          {/* <p>
           Journey  through the education and work experiences that shaped my work across AI systems,
            ML tooling, creative technology, 3D pipelines, graduate research, and healthcare data science.
          </p> */}
        </section>

        <div className="career-track-legend" aria-label="Timeline legend">
          {/* <span className="career-legend-education">Education</span>
          <span className="career-legend-work">Work</span> */}
        </div>

        <section className="career-split-map" aria-label="Career milestones">
          {timelineItems.map((item) => (
            <article
              className={`career-split-item career-split-item-${item.track}`}
              key={item.id}
              data-aos="fade-up"
            >
              <div className="career-split-card">
                <div className="career-milestone-topline">
                  <p>{item.label}</p>
                  <time>{item.year}</time>
                </div>

                <h2>{item.title}</h2>
                <h3>{item.subtitle}</h3>
                <p>{item.body}</p>

                {item.roles && (
                  <div className="career-role-stack" aria-label="Hike roles">
                    {item.roles.map((role) => (
                      <div className="career-role-row" key={`${role.title}-${role.date}`}>
                        <strong>{role.title}</strong>
                        <span>{role.date}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="career-tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="career-split-marker" aria-hidden="true">
                {item.icon}
              </div>
            </article>
          ))}
        </section>

        {/* <section className="career-principles" data-aos="fade-up">
          <div>
            <p className="section-kicker">Throughline</p>
            <h2>The pattern behind the path</h2>
          </div>

          <div className="career-principle-grid">
            {principles.map((principle) => (
              <p key={principle}>{principle}</p>
            ))}
          </div>
        </section> */}
      </div>
    </main>
  );
}
