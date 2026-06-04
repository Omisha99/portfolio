import {
  FaPython,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaUnity,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

import {
  SiCplusplus,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
  SiFastapi,
  SiBlender,
  SiMongodb,
  SiAutodesk,
  SiDatabricks,
  SiFlask,
  SiLangchain,
  SiStreamlit,
  SiHuggingface,
  SiScikitlearn,
  SiD3Dotjs,
  SiDocker,
  SiKubernetes,
  SiKrita,
} from 'react-icons/si';

import { TbApi, TbWaveSine } from 'react-icons/tb';
import { MdRecordVoiceOver } from 'react-icons/md';
import { LuEye, LuSparkles } from 'react-icons/lu';

import '../App.css';

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'D3.js', icon: <SiD3Dotjs /> },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'Hugging Face', icon: <SiHuggingface /> },
      { name: 'OpenAI API', icon: <SiOpenai /> },
      { name: 'LangChain', icon: <SiLangchain /> },
      { name: 'RAG', icon: <TbApi /> },
      { name: 'LLM Fine-Tuning', icon: <SiOpenai /> },
    ],
  },
  {
    title: 'Generative + Multimodal',
    skills: [
      { name: 'Stable Diffusion', icon: <LuSparkles /> },
      { name: 'ControlNet', icon: <LuSparkles /> },
      { name: 'Prompt Engineering', icon: <TbApi /> },
      { name: 'Computer Vision', icon: <LuEye /> },
      { name: 'Speech-to-Text', icon: <TbWaveSine /> },
      { name: 'Text-to-Speech', icon: <MdRecordVoiceOver /> },
      { name: 'Generative AI', icon: <LuSparkles /> },
    ],
  },
  {
    title: 'Backend + Web',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Streamlit', icon: <SiStreamlit /> },
      { name: 'Gradio', icon: <SiHuggingface /> },
      { name: 'REST APIs', icon: <TbApi /> },
    ],
  },
  {
    title: 'Data + Tools',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Databricks', icon: <SiDatabricks /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Kubernetes', icon: <SiKubernetes /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
    ],
  },
  {
    title: 'Creative Tech / 3D',
    skills: [
      { name: 'Unity3D', icon: <FaUnity /> },
      { name: 'Autodesk Maya', icon: <SiAutodesk /> },
      { name: 'Blender', icon: <SiBlender /> },
      { name: 'Krita', icon: <SiKrita /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section skills-minimal-section" id="skills" data-aos="fade-up">
      <div className="skills-minimal-shell">
        <h2 className="skills-heading">Skill Stack</h2>

        <div className="skills-minimal-grid">
          {skillGroups.map((group) => (
            <article className="skills-minimal-card" key={group.title}>
              <h3>{group.title}</h3>

              <ul className="skills-minimal-list">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span className="skills-minimal-icon" aria-hidden="true">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}