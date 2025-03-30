import { FaHome } from 'react-icons/fa';
import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#hero" className="nav-logo" title="Home">
          <FaHome size={20} />
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
