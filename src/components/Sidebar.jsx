import { useState, useEffect } from "react";
import {
  FaUser,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaHome,
  FaImages,
  FaCog,
  FaFileDownload,
} from "react-icons/fa";
import "../App.css";
import profile from "../assets/me.png";

export default function Sidebar() {
  const [activeId, setActiveId] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "gallery", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="sidebar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        {/* <div className="sidebar-profile">
          <img src={profile} />
        </div> */}

        <ul className="sidebar-links" onClick={() => setMenuOpen(false)}>
          <li className={activeId === "hero" ? "sidebar-active" : ""}>
            <a href="#hero" title="Home"><FaHome /></a>
          </li>
          <li className={activeId === "about" ? "sidebar-active" : ""}>
            <a href="#about" title="About"><FaUser /></a>
          </li>
          <li className={activeId === "experience" ? "sidebar-active" : ""}>
            <a href="#experience" title="Experience"><FaBriefcase /></a>
          </li>
          <li className={activeId === "projects" ? "sidebar-active" : ""}>
            <a href="#projects" title="Projects"><FaCode /></a>
          </li>
          <li className={activeId === "skills" ? "sidebar-active" : ""}>
            <a href="#skills" title="Skills"><FaCog /></a>
          </li>
          {/* <li className={activeId === "gallery" ? "sidebar-active" : ""}>
            <a href="#gallery" title="Gallery"><FaImages /></a>
          </li> */}
          <li className={activeId === "contact" ? "sidebar-active" : ""}>
            <a href="#contact" title="Contact"><FaEnvelope /></a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1KvstXP2beLIyj9ptbu7pVHbAdSxfWuVP/view?usp=sharing"
              title="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileDownload />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
