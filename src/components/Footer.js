import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const WISMUN_EMAIL = 'wismun.official@gmail.com';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__brand">
            <div className="footer__logo">
              <img src="https://wismun.in/img/logo-brand/witty.png"  alt="Witty International School" className="footer__logo-img" />
              <img src="https://wismun.in/img/logo-brand/gsg.png"    alt="GSG"    className="footer__logo-img" />
              <img src="https://wismun.in/img/logo-brand/wismun.png" alt="WISMUN" className="footer__logo-img footer__logo-img--wismun" />
            </div>
            <p className="footer__logo-name">WISMUN 2K26</p>
            <p className="footer__tagline">
              Witty International Model United Nations, Sixth Edition — Where global minds converge to deliberate, debate, and drive change.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/brochure">Brochure</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Quick Info</h4>
            <ul>
              <li><span>Edition</span> VI (6th)</li>
              <li><span>Format</span> In-person, 2 days</li>
              <li><span>Committees</span> 16</li>
              <li><span>Language</span> English</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${WISMUN_EMAIL}`}>{WISMUN_EMAIL}</a></li>
              <li><Link to="/contact">Submit a query →</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} WISMUN 2K26 — Witty International Model United Nations, Sixth Edition. All rights reserved.</p>
          <p className="footer__un-note">
            This conference is not affiliated with or endorsed by the United Nations.
          </p>
        </div>
      </div>
    </footer>
  );
}
