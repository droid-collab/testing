import React, { useState } from 'react';
import './Register.css';

const WISMUN_EMAIL = 'wismun.official@gmail.com';

const committees = [
  'UN Security Council (UNSC)',
  'UN General Assembly (UNGA)',
  'World Health Organization (WHO)',
  'UN Human Rights Council (UNHRC)',
  'Economic & Social Council (ECOSOC)',
  'International Court of Justice (ICJ)',
  'International Press (IP)',
  'Economic & Financial Committee (ECOFIN)',
  'UN Women (UNW)',
  'Ad Hoc Committee (ADHOC)',
  'All India Political Parties Meet (AIPPM)',
  'Lok Sabha (LOKSABHA)',
  'International Whaling Commission (IWC)',
  'UN Office on Drugs & Crime (UNODC)',
  'Historical Crisis Committee (HCC)',
  'International Atomic Energy Agency (IAEA)',
];

const roles = ['Delegate', 'Press Corps', 'Chair / Board (by invitation)', 'Faculty Advisor'];

const initialForm = {
  firstName: '', lastName: '', email: '', phone: '',
  institution: '', grade: '', country: '',
  committee1: '', committee2: '',
  role: 'Delegate',
  experience: '',
  dietary: '', accessibility: '',
  agreement: false,
};

export default function Register() {
  const [form, setForm]        = useState(initialForm);
  const [submitted, setSubmit] = useState(false);
  const [errors, setErrors]    = useState({});

  const validate = () => {
    const e = {};
    if (!form.firstName.trim())                 e.firstName   = 'First name is required.';
    if (!form.lastName.trim())                  e.lastName    = 'Last name is required.';
    if (!/\S+@\S+\.\S+/.test(form.email))      e.email       = 'Enter a valid email address.';
    if (!form.institution.trim())               e.institution = 'Institution is required.';
    if (!form.country.trim())                   e.country     = 'Country of representation is required.';
    if (!form.committee1)                        e.committee1  = 'Select your first committee preference.';
    if (!form.agreement)                         e.agreement   = 'You must agree to continue.';
    return e;
  };

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmit(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="page-wrapper">
        <div className="reg-success container">
          <div className="reg-success__icon">✓</div>
          <h1>Application Received</h1>
          <p>
            Thank you, <strong>{form.firstName}</strong>. Your registration for WISMUN 2K26 has been
            submitted successfully. A confirmation email will be sent to{' '}
            <strong>{form.email}</strong> within 48 hours, along with your committee allocation and
            next steps.
          </p>
          <p className="reg-success__note">
            Please check your spam folder if you don't receive our email. For urgent queries, contact{' '}
            <a href={`mailto:${WISMUN_EMAIL}`}>{WISMUN_EMAIL}</a>.
          </p>
          <button className="reg-success__btn" onClick={() => { setForm(initialForm); setSubmit(false); }}>
            Submit Another Registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">

      {/* Page header */}
      <div className="reg-hero">
        <div className="container">
          <span className="section-label">WISMUN 2K26 · 6th Edition</span>
          <h1>Delegate Registration</h1>
          <p>Complete the form below to apply for WISMUN 2K26. All fields marked with * are required.</p>
        </div>
      </div>

      <div className="container reg-layout">

        {/* Sidebar */}
        <aside className="reg-sidebar">
          <div className="reg-info-card">
            <h3>Fee Structure</h3>
            <div className="reg-fee-row"><span>Individual Delegate</span><strong>₹800</strong></div>
            <div className="reg-fee-row"><span>Group (5+ delegates)</span><strong>₹650/head</strong></div>
            <div className="reg-fee-row"><span>Press Corps</span><strong>₹500</strong></div>
            <p className="reg-fee-note">Payment details will be sent via email after registration approval.</p>
          </div>

          <div className="reg-info-card">
            <h3>Key Dates</h3>
            <div className="reg-date-row"><span>Registration Deadline</span><strong>TBA</strong></div>
            <div className="reg-date-row"><span>Position Paper Due</span><strong>TBA</strong></div>
            <div className="reg-date-row"><span>Conference Dates</span><strong>TBA</strong></div>
          </div>

          <div className="reg-info-card reg-info-card--gold">
            <h3>Need Help?</h3>
            <p>Contact the WISMUN 2K26 team for registration assistance.</p>
            <a href={`mailto:${WISMUN_EMAIL}`}>{WISMUN_EMAIL}</a>
          </div>
        </aside>

        {/* Form */}
        <form className="reg-form" onSubmit={submit} noValidate>

          <fieldset className="reg-fieldset">
            <legend>Personal Information</legend>
            <div className="reg-row">
              <div className="reg-field">
                <label htmlFor="firstName">First Name *</label>
                <input id="firstName" name="firstName" type="text" value={form.firstName} onChange={handle} placeholder="Jane" />
                {errors.firstName && <span className="reg-error">{errors.firstName}</span>}
              </div>
              <div className="reg-field">
                <label htmlFor="lastName">Last Name *</label>
                <input id="lastName" name="lastName" type="text" value={form.lastName} onChange={handle} placeholder="Doe" />
                {errors.lastName && <span className="reg-error">{errors.lastName}</span>}
              </div>
            </div>
            <div className="reg-row">
              <div className="reg-field">
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" value={form.email} onChange={handle} placeholder="jane@example.com" />
                {errors.email && <span className="reg-error">{errors.email}</span>}
              </div>
              <div className="reg-field">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+91 98765 43210" />
              </div>
            </div>
          </fieldset>

          <fieldset className="reg-fieldset">
            <legend>Academic Details</legend>
            <div className="reg-row">
              <div className="reg-field reg-field--full">
                <label htmlFor="institution">Institution / School / University *</label>
                <input id="institution" name="institution" type="text" value={form.institution} onChange={handle} placeholder="Witty International School" />
                {errors.institution && <span className="reg-error">{errors.institution}</span>}
              </div>
            </div>
            <div className="reg-row">
              <div className="reg-field">
                <label htmlFor="grade">Grade / Year</label>
                <input id="grade" name="grade" type="text" value={form.grade} onChange={handle} placeholder="Grade 11 / 2nd Year" />
              </div>
              <div className="reg-field">
                <label htmlFor="role">Applying As *</label>
                <select id="role" name="role" value={form.role} onChange={handle}>
                  {roles.map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset className="reg-fieldset">
            <legend>Committee Preferences</legend>
            <div className="reg-row">
              <div className="reg-field">
                <label htmlFor="country">Country of Representation *</label>
                <input id="country" name="country" type="text" value={form.country} onChange={handle} placeholder="e.g. Brazil" />
                {errors.country && <span className="reg-error">{errors.country}</span>}
              </div>
            </div>
            <div className="reg-row">
              <div className="reg-field">
                <label htmlFor="committee1">1st Preference *</label>
                <select id="committee1" name="committee1" value={form.committee1} onChange={handle}>
                  <option value="">— Select Committee —</option>
                  {committees.map(c => <option key={c}>{c}</option>)}
                </select>
                {errors.committee1 && <span className="reg-error">{errors.committee1}</span>}
              </div>
              <div className="reg-field">
                <label htmlFor="committee2">2nd Preference</label>
                <select id="committee2" name="committee2" value={form.committee2} onChange={handle}>
                  <option value="">— Select Committee —</option>
                  {committees.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <div className="reg-field">
              <label htmlFor="experience">Prior MUN Experience</label>
              <textarea id="experience" name="experience" rows={3} value={form.experience} onChange={handle}
                placeholder="List any previous MUN conferences, committees, and awards received (or 'None')" />
            </div>
          </fieldset>

          <fieldset className="reg-fieldset">
            <legend>Accessibility & Dietary</legend>
            <div className="reg-row">
              <div className="reg-field">
                <label htmlFor="dietary">Dietary Requirements</label>
                <input id="dietary" name="dietary" type="text" value={form.dietary} onChange={handle} placeholder="e.g. Vegetarian, Vegan, Halal, None" />
              </div>
              <div className="reg-field">
                <label htmlFor="accessibility">Accessibility Needs</label>
                <input id="accessibility" name="accessibility" type="text" value={form.accessibility} onChange={handle} placeholder="e.g. Wheelchair access, None" />
              </div>
            </div>
          </fieldset>

          <div className="reg-checkbox-row">
            <input type="checkbox" id="agreement" name="agreement" checked={form.agreement} onChange={handle} />
            <label htmlFor="agreement">
              I confirm that all information provided is accurate and I agree to abide by the WISMUN 2K26 Code of Conduct. *
            </label>
          </div>
          {errors.agreement && <span className="reg-error" style={{ marginTop: '-0.5rem' }}>{errors.agreement}</span>}

          <button type="submit" className="reg-submit">Submit Application</button>

        </form>
      </div>
    </div>
  );
}
