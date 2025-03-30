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
      title: 'Senior Machine Learning Engineer',
      company: 'Hike',
      date: 'Jan 2024 – Sep 2024',
      bullets: [
        'Led development of text-to-speech pipeline for support automation.',
        'Designed and fine-tuned mascot voice.',
        'Built full-stack chatbot using FastAPI + React with TTS/STT.'
      ]
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Hike',
      date: 'Jan 2023 – Dec 2023',
      bullets: [
        'Built content automation platform for AAA game in Rush app.',
        'Optimized 2D/3D art gen using Stable Diffusion + ControlNet.',
        'Reduced content gen time by 50%.'
      ]
    },
    {
      title: 'Software Development Engineer',
      company: 'Hike',
      date: 'Aug 2021 – Dec 2022',
      bullets: [
        'Prototyped tools for mesh cleanup, LoD gen, and asset QA.',
        'Generated 1000+ outfit patterns & built approval system.',
        'Created Unity tools for avatar data annotation.'
      ]
    },
    {
      title: 'Software Graphics Intern',
      company: 'Hike',
      date: 'Jun 2020 – Jul 2021',
      bullets: [
        'Built face landmark detection for 2D avatars (OpenCV + dlib).',
        'Automated normal map generation from textures.'
      ]
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
                <h3>{exp.title} <span>@ {exp.company}</span></h3>
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
