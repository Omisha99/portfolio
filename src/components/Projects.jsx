import '../App.css';

export default function Projects() {
  const projects = [
    {
      title: "TravelOrb",
      description: "An interactive data visualization platform for global tourism trends leveraging D3.js for dynamic charts and React for seamless UI/UX,  improving data comprehension by 30% over traditional charts.",
      tech: ["D3.js", "React"],
      link: "https://dataviscourse2024.github.io/travel-orb/"
    },
    {
      title: "Galactic Survivor",
      description: "C# based 3D game with Core Game Loop: Get the rocket from point A to B by applying thrust while avoiding obstacles.",
      tech: ["C#", "Unity3D"],
      link: "https://omisha99.github.io/Galactic-Survivor/"
    },
    {
      title: "AR Navigation",
      description: "Unity-based augmented reality indoor navigation application that seamlessly blended virtual guides with physical space for an intuitive navigation experience in the university.",
      tech: [ "C#", "Unity3D", "Vuforia", "ARKit"],
      link: "https://drive.google.com/file/d/1qAqIh2G7KbHoa40-tNDVO4BrpBDLM427/view?usp=sharing"
    },
    {
        title: "TTS Customer Support Bot @Hike Pvt. Ltd.",
        description: "A full-stack voice-enabled chatbot with STT + TTS using FastAPI and React.",
        tech: ["FastAPI", "React", "LLM API"],
        // link: "https://rush.network/"
      },
      {
        title: "AAA Game Content Automation @Hike Pvt. Ltd.",
        description: "Full-stack website and API for CricketPulse, a AAA game in the Rush app, enabling real-time, dynamic content generation and automated question selection improving content generation efficiency by 60% and accelerating time-to-market.",
        tech: ["Python", "FastAPI", "React"],
        // link: "https://rush.network/"
      },
      {
        title: "Smart Suggestion Plugin for Google Docs @Hike Pvt. Ltd.",
        description: "Developed a Google Docs plugin to improve weekly team update documents by providing AI-driven suggestions based on defined guidelines.",
        tech: ["Google Apps Script", "LLM API", "JavaScript"],
        // link: "https://rush.network/", 
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
              {project.link && (
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          ))}
        </div> 
      </div>
    </section>
      </div>
  );
}
