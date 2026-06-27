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
          <img src="https://wismun.in/img/logo-brand/witty.png"  alt="Witty International School" className="navbar__logo-img" />
          <img src="https://wismun.in/img/logo-brand/gsg.png"    alt="GSG"     className="navbar__logo-img" />
          <img src="https://wismun.in/img/logo-brand/wismun.png" alt="WISMUN"  className="navbar__logo-img navbar__logo-img--wismun" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">WISMUN</span>
            <span className="navbar__logo-sub">Witty International Model United Nations</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          <li><NavLink to="/"          end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/register"  onClick={closeMenu}>Register</NavLink></li>
          <li><NavLink to="/brochure"  onClick={closeMenu}>Brochure</NavLink></li>
          <li><NavLink to="/contact"   onClick={closeMenu}>Contact</NavLink></li>
        </ul>

        {/* CTA */}
        <Link to="/register" className="navbar__cta" onClick={closeMenu}>
          Apply Now
        </Link>

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
        <NavLink to="/"         end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/register"     onClick={closeMenu}>Register</NavLink>
        <NavLink to="/brochure"     onClick={closeMenu}>Brochure</NavLink>
        <NavLink to="/contact"      onClick={closeMenu}>Contact</NavLink>
        <Link to="/register" className="navbar__mobile-cta" onClick={closeMenu}>Apply Now</Link>
      </div>
    </nav>
  );
}
