import React from "react";
import realPhoto from "../assets/ogme.png";

function About() {

  const aboutPoints = [
    "4+ years of industry experience building AI systems, ML tooling and full-stack intelligent products.",
    "Work spanning LLM-powered workflows, computer vision pipelines, generative AI, speech interfaces and creative automation.",
    "Experience across full-stack systems, AI-powered tools, real-time rendering workflows and 2D/3D production pipelines.",
    "M.S. in Computer Science and Graduate Certificate in Deep Learning from the University of Utah.",
    "Cross-functional approach to turning ambiguous ideas into structured systems that are practical to ship and intuitive to use."
];

  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-content about-split">
        <div className="about-copy">
          <h2 className="about-heading" data-aos="fade-up" data-aos-delay="100">
            About Me
          </h2>

          <p
            className="about-paragraph about-lede"
            data-aos="fade-up"
            data-aos-delay="180"
          >
            Bridging machine learning, product engineering and creative technology.
          </p>

          <ul className="about-points">
            {aboutPoints.map((point, index) => (
              <li
                key={point}
                data-aos="fade-right"
                data-aos-delay={260 + index * 110}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="about-photo-card"
          data-aos="fade-left"
          data-aos-delay="360"
        >
          <div className="about-photo-frame">
            <img
              src={realPhoto}
              alt="Portrait"
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;