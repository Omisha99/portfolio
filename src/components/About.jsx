import '../App.css';
import realPhoto from '../assets/ogme.png';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content about-split">
        <div className="about-copy">
          <h2 className="about-heading">About Me</h2>
            <p className="about-paragraph">
  I’m a Machine Learning Engineer with 4+ years of experience building AI systems, ML tooling, and full-stack intelligent products. My work spans LLM-powered workflows, computer vision pipelines, generative AI systems, speech interfaces, and creative automation, with a focus on reliability, evaluation, and production deployment.
</p>

<p className="about-paragraph">
  I hold an M.S. in Computer Science and a Graduate Certificate in Deep Learning &amp; AI Robotics from the University of Utah. I bring a systems-first approach to AI: designing model workflows, product interfaces, and engineering pipelines that are practical, scalable, and usable by real teams.
</p>

<p className="about-paragraph">
  Across my experience, I’ve often worked at the intersection of artists and engineers, translating creative direction into technical requirements and technical constraints into artist-friendly workflows. That cross-functional perspective shapes how I build AI products that are both technically strong and thoughtfully designed.
</p>
        </div>

        <div className="about-photo-card" aria-label="Photo">
        <div className="about-photo-frame">
          <img src={realPhoto} alt="Omisha" className="about-photo" />
        </div>
        </div>
      </div>
    </section>
  );
}
