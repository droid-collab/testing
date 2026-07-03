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
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <img src="https://wismun.in/img/logo-brand/gsg.png"    alt="GSG"     className="navbar__logo-img" />
          <img src="https://wismun.in/img/logo-brand/wismun.png" alt=""  className="navbar__logo-img navbar__logo-img--wismun" />
          <img src="https://wismun.in/img/logo-brand/witty.png"  alt="Witty International School" className="navbar__logo-img" />
                  </Link>

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
