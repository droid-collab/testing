import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Registrations.css';

const BackArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export default function DelegatePage({ label, title, intro, registerUrl, steps }) {
  return (
    <div className="page-wrapper">

      {/* Page header */}
      <div className="reg-hero">
        <div className="container">
          <Link to="/registrations" className="reg-back"><BackArrow /> Registrations</Link>
          <span className="section-label">{label}</span>
          <h1>{title}</h1>
          <p>{intro}</p>

          {/* Two links: Instructions + Register Now */}
          <div className="reg-actions">
            <a href="#instructions" className="reg-btn reg-btn--outline">Instructions</a>
            <a href={registerUrl} className="reg-btn reg-btn--primary" target="_blank" rel="noopener noreferrer">Register Now</a>
          </div>
        </div>
      </div>

      {/* Instructions steps */}
      <div id="instructions" className="container reg-steps-section">
        <span className="section-label">Step-by-Step</span>
        <h2>Instructions</h2>
        <div className="reg-steps">
          {steps.map((text, i) => (
            <div className="reg-step" key={i}>
              <div className="reg-step__num">Step {i + 1}</div>
              <div className="reg-step__body">{text}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
