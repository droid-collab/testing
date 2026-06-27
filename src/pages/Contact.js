import React, { useState } from 'react';
import './Contact.css';

const categories = [
  'General Enquiry',
  'Registration Help',
  'Committee & Allocation',
  'Payment & Fees',
  'Accommodation',
  'Press & Media',
  'Sponsorship / Partnership',
  'Other',
];

const WISMUN_EMAIL = 'wismun.official@gmail.com';

const contacts = [
  {
    role: 'Secretary-General',
    name: 'Office of the Secretary-General',
    desc: 'Conference policy, partnerships, and official correspondence.',
  },
  {
    role: 'Delegate Affairs',
    name: 'Delegate Affairs Team',
    desc: 'Registration, committee queries, country allocations, and position papers.',
  },
  {
    role: 'Press Corps',
    name: 'Press & Media Desk',
    desc: 'Press corps registration, media accreditation, and publication enquiries.',
  },
  {
    role: 'Logistics',
    name: 'Events & Logistics',
    desc: 'Venue, accommodation guidance, schedule, and on-site support.',
  },
];

const initForm = { name: '', email: '', institution: '', category: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm]        = useState(initForm);
  const [submitted, setSubmit] = useState(false);
  const [errors, setErrors]    = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())                  e.name     = 'Your name is required.';
    if (!/\S+@\S+\.\S+/.test(form.email))  e.email    = 'Enter a valid email.';
    if (!form.category)                      e.category = 'Please select a category.';
    if (!form.subject.trim())               e.subject  = 'A subject line is required.';
    if (!form.message.trim())               e.message  = 'Message cannot be empty.';
    return e;
  };

  const handle = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmit(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-wrapper">

      {/* Page header */}
      <div className="contact-hero">
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Questions, queries, or partnership enquiries — we're here to help. Expect a response within 48 hours.</p>
        </div>
      </div>

      <div className="container contact-layout">

        {/* Left: team cards */}
        <aside className="contact-sidebar">
          <h2>Our Teams</h2>
          <div className="contact-cards">
            {contacts.map(c => (
              <div key={c.role} className="contact-card">
                <span className="contact-card__role">{c.role}</span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <a href={`mailto:${WISMUN_EMAIL}`} className="contact-card__email">{WISMUN_EMAIL}</a>
              </div>
            ))}
          </div>

          <div className="contact-social">
            <h3>Follow WISMUN 2K26</h3>
            <div className="contact-social__links">
              <a href="#instagram" className="contact-social__link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                @wismun_official
              </a>
              <a href="#linkedin" className="contact-social__link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="3"/>
                  <line x1="8" y1="11" x2="8" y2="16"/>
                  <line x1="8" y1="8" x2="8" y2="8.5"/>
                  <path d="M12 16v-5m4 5v-3a2 2 0 00-4 0"/>
                </svg>
                WISMUN 2K26 — LinkedIn
              </a>
              <a href="#twitter" className="contact-social__link" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @wismun_2k26
              </a>
            </div>
          </div>

          <div className="contact-email-box">
            <span className="section-label" style={{ marginBottom: '0.5rem' }}>Direct Email</span>
            <a href={`mailto:${WISMUN_EMAIL}`} className="contact-email-box__link">
              {WISMUN_EMAIL}
            </a>
            <p>For all queries, reach us at this single address and we'll route your message to the right team.</p>
          </div>
        </aside>

        {/* Right: form */}
        <div className="contact-form-col">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success__icon">✓</div>
              <h2>Message Sent</h2>
              <p>
                Thank you, <strong>{form.name}</strong>. We've received your message and will get
                back to you at <strong>{form.email}</strong> within 48 hours.
              </p>
              <p className="contact-success__note">
                For urgent matters, email us directly at{' '}
                <a href={`mailto:${WISMUN_EMAIL}`}>{WISMUN_EMAIL}</a>.
              </p>
              <button className="contact-success__btn" onClick={() => { setForm(initForm); setSubmit(false); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit} noValidate>
              <h2>Send a Message</h2>

              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="name">Your Name *</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handle} placeholder="Jane Doe" />
                  {errors.name && <span className="cf-error">{errors.name}</span>}
                </div>
                <div className="cf-field">
                  <label htmlFor="email">Your Email Address *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handle} placeholder="jane@example.com" />
                  {errors.email && <span className="cf-error">{errors.email}</span>}
                </div>
              </div>

              <div className="cf-row">
                <div className="cf-field">
                  <label htmlFor="institution">Institution</label>
                  <input id="institution" name="institution" type="text" value={form.institution} onChange={handle} placeholder="Your school / university" />
                </div>
                <div className="cf-field">
                  <label htmlFor="category">Category *</label>
                  <select id="category" name="category" value={form.category} onChange={handle}>
                    <option value="">— Select Category —</option>
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                  {errors.category && <span className="cf-error">{errors.category}</span>}
                </div>
              </div>

              <div className="cf-field">
                <label htmlFor="subject">Subject *</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={handle} placeholder="Brief subject of your query" />
                {errors.subject && <span className="cf-error">{errors.subject}</span>}
              </div>

              <div className="cf-field">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={6} value={form.message} onChange={handle} placeholder="Describe your query in detail..." />
                {errors.message && <span className="cf-error">{errors.message}</span>}
              </div>

              <p className="cf-send-note">
                Your message will be sent to <strong>{WISMUN_EMAIL}</strong>
              </p>

              <button type="submit" className="cf-submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
