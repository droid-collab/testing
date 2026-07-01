import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Brand bar — Witty (left) · WISMUN (center) · GSG (right) */}
      <div className="navbar__brand-bar">
        <div className="navbar__brand-inner">
          <img src="https://wismun.in/img/logo-brand/witty.png" alt="Witty International School" className="navbar__brand-logo navbar__brand-logo--side navbar__brand-logo--left" />

          <Link to="/" className="navbar__brand-center" onClick={closeMenu}>
            <img src="https://wismun.in/img/logo-brand/wismun.png" alt="WISMUN" className="navbar__brand-logo navbar__brand-logo--wismun" />
            <span className="navbar__logo-text">
              <span className="navbar__logo-main">WISMUN</span>
              <span className="navbar__logo-sub">Witty International Model United Nations</span>
            </span>
          </Link>

          <img src="https://wismun.in/img/logo-brand/gsg.png" alt="GSG" className="navbar__brand-logo navbar__brand-logo--side navbar__brand-logo--right" />
        </div>
      </div>

      <div className="navbar__inner">
        {/* Desktop nav links */}
        <ul className="navbar__links">
          <li><NavLink to="/"              end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/registrations"     onClick={closeMenu}>Registrations</NavLink></li>
          <li><NavLink to="/brochure"          onClick={closeMenu}>Brochure</NavLink></li>
          <li><NavLink to="/contact"           onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <NavLink to="/"              end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/registrations"     onClick={closeMenu}>Registrations</NavLink>
        <NavLink to="/brochure"          onClick={closeMenu}>Brochure</NavLink>
        <NavLink to="/contact"           onClick={closeMenu}>Contact</NavLink>
      </div>
    </nav>
  );
}
