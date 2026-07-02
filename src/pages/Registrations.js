import React from 'react';
import { Link } from 'react-router-dom';
import './Registrations.css';

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Registrations() {
  return (
    <div className="page-wrapper">

      {/* Page header */}
      <div className="reg-hero">
        <div className="container">
          <span className="section-label">Register with Us</span>
          <h1>Registrations</h1>
          <p>Choose the registration path that fits you best. Follow the instructions for your category, then complete your registration.</p>
        </div>
      </div>

      {/* Two paths */}
      <div className="container reg-paths">
        <Link to="/registrations/witty" className="reg-path-card">
          <span className="reg-path-card__label">For Witty Students</span>
          <h2>Witty Delegates</h2>
          <p>Delegates from Witty International School. View the step-by-step instructions and register through the Witty registration form.</p>
          <span className="reg-path-card__go">Instructions &amp; Register <Arrow /></span>
        </Link>

        <Link to="/registrations/external" className="reg-path-card">
          <span className="reg-path-card__label">For Non-Witty Students</span>
          <h2>External Delegates</h2>
          <p>Delegates from other schools and institutions. View the step-by-step instructions and register through the external registration form.</p>
          <span className="reg-path-card__go">Instructions &amp; Register <Arrow /></span>
        </Link>
      </div>

    </div>
  );
}
