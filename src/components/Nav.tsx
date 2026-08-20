import { Link, NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '../lib/utils';

const links = [
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/career', label: 'Career' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/70 border-b border-token">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg text-fg hover-accent">
          Sammy Bolger
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn('hover-accent', isActive && 'text-fg')
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hover-accent"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
