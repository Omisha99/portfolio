import { FiSun, FiMoon } from 'react-icons/fi';
import '../App.css';

export default function ThemeToggle({ theme, toggleTheme, className = '' }) {
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      {isLight ? <FiMoon /> : <FiSun />}
    </button>
  );
}