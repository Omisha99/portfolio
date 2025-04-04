import {
    FaPython, FaJsSquare, FaGitAlt, FaMobileAlt, FaGithub, FaUnity, FaReact,
    FaHtml5, FaCss3Alt
  } from 'react-icons/fa';
  import {
    SiCplusplus, SiOpengl, SiOpenai, SiTensorflow,
    SiPytorch, SiFastapi, SiBlender, SiMongodb, SiAutodesk,
    SiFlask, SiKrita, SiLangchain, SiStreamlit, SiHuggingface
  } from 'react-icons/si';
  import '../App.css';
  
  export default function Skills() {
    const sections = [
      {
        title: "Programming Languages",
        skills: [
          { name: "Python", icon: <FaPython /> },
          { name: "C++", icon: <SiCplusplus /> },
          { name: "C#", icon: <FaUnity /> },
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "CSS", icon: <FaCss3Alt /> },
          { name: "JavaScript", icon: <FaJsSquare /> },
        ]
      },
      {
        title: "Libraries & Frameworks",
        skills: [
          { name: "FastAPI", icon: <SiFastapi /> },
          { name: "Flask", icon: <SiFlask /> },
          { name: "React", icon: <FaReact /> },
          { name: "OpenGL", icon: <SiOpengl /> },
          { name: "TensorFlow", icon: <SiTensorflow /> },
          { name: "PyTorch", icon: <SiPytorch /> },
          { name: "LangChain", icon: <SiLangchain /> },
          { name: "Streamlit", icon: <SiStreamlit  /> },
          { name: "Gradio", icon: <SiHuggingface /> },
          { name: "D3.js", icon: <FaJsSquare /> },
        ]
      },
      {
        title: "Tools & Software",
        skills: [
          { name: "Unity3D", icon: <FaUnity /> },
          { name: "Autodesk Maya", icon: <SiAutodesk /> },
          { name: "Blender", icon: <SiBlender /> },
          { name: "MongoDB", icon: <SiMongodb /> },
          { name: "Git", icon: <FaGitAlt /> },
          { name: "GitHub", icon: <FaGithub /> },
          { name: "Krita", icon: <SiKrita /> }
        ]
      },
      {
        title: "Concepts & Experience",
        skills: [
          { name: "Machine Learning", icon: <SiOpenai /> },
          { name: "Generative AI", icon: <SiOpenai /> },
          { name: "Stable Diffusion", icon: <SiOpenai /> },
          { name: "3D Pipelines", icon: <FaUnity /> },
          { name: "Game Dev", icon: <FaUnity /> },
          { name: "Conversational Bots", icon: <FaReact /> },
          { name: "Avatar Systems", icon: <SiOpengl /> },
          { name: "UI/UX Design", icon: <FaMobileAlt /> }
        ]
      }
    ];
  
    return (
        <div data-aos="fade-up" data-aos-delay="200">
      <section className="skills-section" id="skills">
        <h2 className="skills-heading">Skills</h2>
  
       <div className="skills-categories">
          {sections.map((section, i) => (
            <div className="skills-group" key={i}>
              <h3>{section.title}</h3>
              <div className="skills-grid">
                {section.skills.map((skill, j) => (
                  <div className="skill-item" key={j}>
                    <div className="skill-icon">{skill.icon}</div>
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> 
      </section>
        </div>
    );
  }
  