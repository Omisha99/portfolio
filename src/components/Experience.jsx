import '../App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
  }, []);

  const experiences = [
    {
      title: 'Data Science Graduate Intern',
      company: 'Kaiser Permanente',
      stack: 'Python, PySpark, Databricks',
      date: 'June 2025 – August 2025',
      bullets: [
        'Performed exploratory data analysis (EDA) on large-scale healthcare datasets to uncover key behavioral and demographic trends',
        'Generated actionable insights to support data-driven strategy for member engagement initiatives',
        'Implemented predictive models to improve membership experience and loyalty program engagement'
      ]
    },
    {
      title: 'Senior Machine Learning Engineer',
      company: 'Hike Pvt. Ltd.',
      stack: 'Python, FastAPI, React, MongoDB',
      date: 'Jan 2024 – Sep 2024',
      bullets: [
        'Led the development of text-to-speech pipeline, optimizing automated customer support interactions for better efficiency and user experience.',
        'Designed and fine-tuned a distinctive voice for the customer support mascot, strengthening brand identity and engagement.',
        'Developed a full-stack AI-powered customer support chatbot (FastAPI, React), integrating speech-to-text  and text-to-speech  for real-time bot interaction testing and evaluation.'
      ],
      link: 'https://www.linkedin.com/company/hike/'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Hike Pvt. Ltd.',
      stack: ' Python, FastAPI, React, Stable Diffusion, ControlNet, MongoDB',
      date: 'Jan 2023 – Dec 2023',
      bullets: [
        'Developed a full-stack content automation platform and API for AAA game in Rush app.',
        'Optimized 2D/3D art generation using Stable Diffusion + ControlNet.',
        'Reduced content generation time by 50%.'
      ],
      link: 'https://www.linkedin.com/company/hike/'
    },
    {
      title: 'Software Development Engineer',
      company: 'Hike Pvt. Ltd.',
      stack: 'Python, C#, Unity3D, Autodesk Maya, Blender, MongoDB, PyMel',
      date: 'Aug 2021 – Dec 2022',
      bullets: [
        'Prototyped tools for mesh cleanup, LoD generation, and asset QA.',
        'Generated 1000+ outfit patterns & Unity based standalone built approval tool.',
        'Created standalone Unity tools for avatar data annotation.'
      ],
      link: 'https://www.linkedin.com/company/hike/'
    },
    {
      title: 'Software Graphics Intern',
      company: 'Hike Pvt. Ltd.',
      stack: 'Python, C#, Unity3D',
      date: 'Jun 2020 – Jul 2021',
      bullets: [
        'Built face landmark detection for 2D avatars (OpenCV + dlib).',
        'Automated normal map generation from textures.'
      ],
      link: 'https://www.linkedin.com/company/hike/'
    }
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="200">

    <section className="experience-section timeline-container">
      <div className="experience-content">
        <h2 className="experience-heading">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item" data-aos="fade-up">
              <div className="timeline-dot" />
              <div className="timeline-content">
                {/* <h3>{exp.title}<a href="linke.in"><span> @ {exp.company}</span></a></h3> */}
                <h3>{exp.title}
                   {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        <span> @ {exp.company}</span>
                      </a>
                    ) : (
                      <span> @ {exp.company}</span>
                    )}
                </h3>
                {/* <h3>{exp.title}<span> @ {exp.company}</span></h3> */}
                <p className="exp-date">{exp.stack}</p>
                <p className="exp-date">{exp.date}</p>
                <ul>
                  {exp.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
  );
}
