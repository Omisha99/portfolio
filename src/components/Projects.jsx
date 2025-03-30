import '../App.css';

export default function Projects() {
  const projects = [
    {
      title: "TTS Customer Support Bot",
      description: "A full-stack voice-enabled chatbot with STT + TTS using FastAPI and React.",
      tech: ["FastAPI", "React", "gTTS", "Vosk"],
      link: "#"
    },
    {
      title: "AAA Game Content Automation",
      description: "Platform for generating game content using Stable Diffusion and ControlNet.",
      tech: ["Python", "Stable Diffusion", "ControlNet"],
      link: "#"
    },
    {
      title: "Avatar QA & Blendshape Tools",
      description: "Unity-based tools for model QA, annotation, and pattern generation.",
      tech: ["Unity", "C#", "MongoDB"],
      link: "#"
    },
    {
        title: "TTS Customer Support Bot",
        description: "A full-stack voice-enabled chatbot with STT + TTS using FastAPI and React.",
        tech: ["FastAPI", "React", "gTTS", "Vosk"],
        link: "#"
      },
      {
        title: "AAA Game Content Automation",
        description: "Platform for generating game content using Stable Diffusion and ControlNet.",
        tech: ["Python", "Stable Diffusion", "ControlNet"],
        link: "#"
      },
      {
        title: "Avatar QA & Blendshape Tools",
        description: "Unity-based tools for model QA, annotation, and pattern generation.",
        tech: ["Unity", "C#", "MongoDB"],
        link: "#"
      }
  ];

  return (
    <div data-aos="fade-up" data-aos-delay="200">

    <section className="projects-section" id="projects">
      <div className="projects-content">
        <h2 className="projects-heading">Projects</h2>
        <div className="project-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
  );
}
