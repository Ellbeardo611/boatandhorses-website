// /src/components/NavBar.jsx
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import './NavBar.css';

// ids of the homepage sections tracked for the scroll-spy underline
const HOME_SECTIONS = [];

const NAV_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Events & Weekly Schedule', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'The Stables Function Room', to: '/stables-function-room' },
  { label: 'Boats & Horses Forces', to: '/forces' },
  { label: 'Contact Us', to: '/contact' },
];

const NavBar = () => {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Blue underline on nav links: react-router's NavLink handles it natively
  // for real routes (Gallery, Stables, Forces). The homepage links are
  // anchors within one page, so this watches which section is centred in
  // the viewport and underlines that link instead - a normal scroll-spy.
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('');
      return undefined;
    }

    const sections = HOME_SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  // Close the mobile menu whenever navigation actually happens.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="navbar-brand-main">THE BOAT &amp; HORSES</span>
        </Link>
        <SocialLinks className="navbar-social" size={16} />
      </div>

      <button
        type="button"
        className="navbar-toggle"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links${isOpen ? ' navbar-links-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            {link.hash ? (
              <Link
                to={link.to}
                onClick={closeMenu}
                className={activeHash === link.hash ? 'navbar-link-active' : ''}
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'navbar-link-active' : '')}
              >
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
