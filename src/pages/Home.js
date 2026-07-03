import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const committees = [
  { abbr: 'UNSC',     name: 'UN Security Council',               topic: 'Addressing emerging threats to international peace in contested maritime regions' },
  { abbr: 'UNGA',     name: 'UN General Assembly',               topic: 'Reforming global financial architecture to address sovereign debt crises in developing nations' },
  { abbr: 'WHO',      name: 'World Health Organization',         topic: 'Strengthening global pandemic preparedness and equitable vaccine distribution frameworks' },
  { abbr: 'UNHRC',    name: 'UN Human Rights Council',           topic: 'Protecting the rights of climate refugees and internally displaced persons' },
  { abbr: 'ECOSOC',   name: 'Economic & Social Council',         topic: 'Accelerating SDG progress through inclusive digital economy policies' },
  { abbr: 'ICJ',      name: 'International Court of Justice',    topic: 'State responsibility for transboundary environmental harm' },
  { abbr: 'IP',       name: 'International Press',               topic: 'Reporting global conflicts, diplomatic negotiations, and humanitarian crises with integrity' },
  { abbr: 'ECOFIN',   name: 'Economic & Financial Committee',    topic: 'Designing equitable global tax frameworks to combat illicit financial flows' },
  { abbr: 'UNW',      name: 'UN Women',                          topic: 'Eliminating gender-based violence and advancing economic empowerment for women worldwide' },
  { abbr: 'ADHOC',    name: 'Ad Hoc Committee',                  topic: 'Responding to emerging crises and unforeseen geopolitical developments in real time' },
  { abbr: 'AIPPM',    name: 'All India Political Parties Meet',  topic: 'Deliberating legislative reforms on national security, education, and economic policy' },
  { abbr: 'LOKSABHA', name: 'Lok Sabha',                         topic: 'Parliamentary debate on constitutional amendments and federal governance in India' },
  { abbr: 'IWC',      name: 'International Whaling Commission',  topic: 'Balancing conservation imperatives with indigenous cultural rights in marine ecosystems' },
  { abbr: 'UNODC',    name: 'UN Office on Drugs & Crime',        topic: 'Combating transnational organised crime and strengthening international drug control frameworks' },
  { abbr: 'HCC',      name: 'Historical Crisis Committee',       topic: 'Simulating pivotal Cold War decisions and their lasting impact on the international order' },
  { abbr: 'IAEA',     name: 'International Atomic Energy Agency',topic: 'Preventing nuclear proliferation and advancing safe civilian nuclear energy development' },
];

const stats = [
  { value: '6th',  label: 'Edition' },
  { value: '300+', label: 'Expected Delegates' },
  { value: '16',   label: 'Committees' },
  { value: '2',    label: 'Days of Debate' },
];

const board = [
  { role: 'Secretary General',         name: 'To Be Announced' },
  { role: 'Deputy Secretary General',  name: 'To Be Announced' },
  { role: 'Director General',          name: 'To Be Announced' },
  { role: 'Director General',          name: 'To Be Announced' },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouse = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 20;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 20;
      hero.style.setProperty('--parallax-x', `${x}px`);
      hero.style.setProperty('--parallax-y', `${y}px`);
    };
    hero.addEventListener('mousemove', handleMouse);
    return () => hero.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="page-wrapper">

      {/* ── HERO ───────────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg-grid" />
        <div className="hero__bg-glow" />

        <div className="hero__content container">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-line" /> Sixth Edition · 2K26 <span className="hero__eyebrow-line" />
          </p>

          <h1 className="hero__title">
            WISMUN<br />
            <span className="hero__title-accent">2K26</span>
          </h1>

          <p className="hero__subtitle">
            Witty International Model United Nations — two days of high-stakes diplomacy,
            rigorous debate, and transformative collaboration. Step into the chamber.
            Represent your nation. Shape the resolution.
          </p>

          <div className="hero__actions">
            <Link to="/brochure" className="btn btn--outline">View Brochure</Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────── */}
      <section className="stats-band">
        <div className="container stats-band__inner">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────── */}
      <section className="about container">
        <div className="about__left">
          <span className="section-label">About WISMUN 2K26</span>
          <h2 className="about__heading">A legacy of diplomacy,<br />now in its sixth chapter.</h2>
          <div className="gold-rule" />
          <p>
            WISMUN — Witty International Model United Nations — is an academic simulation of the
            United Nations hosted by Witty International School, where students step into the shoes
            of global diplomats, debating pressing international issues, forging alliances, and
            drafting resolutions that mirror the real-world UN process.
          </p>
          <p>
            WISMUN 2K26 builds on five celebrated editions, bringing together the brightest student
            minds to engage with the most critical challenges of our time: climate displacement,
            global health equity, maritime security, and the future of the digital economy.
          </p>
          <Link to="/brochure" className="about__link">
            Read full programme details →
          </Link>
        </div>

        <div className="about__right">
          <div className="about__card">
            <h3>Parliamentary Procedure</h3>
            <p>Formal debate following UN Rules of Procedure — resolutions, amendments, and voting blocs.</p>
          </div>
          <div className="about__card">
            <h3>Global Perspectives</h3>
            <p>Represent nations across the geopolitical spectrum and argue positions beyond your own views.</p>
          </div>
          <div className="about__card">
            <h3>Awards & Recognition</h3>
            <p>Best Delegate, Outstanding Delegate, and Verbal Commendation awards across all committees.</p>
          </div>
          <div className="about__card">
            <h3>Research & Writing</h3>
            <p>Submit your Position Paper before the conference and demonstrate deep country research.</p>
          </div>
        </div>
      </section>

      {/* ── COMMITTEES ─────────────────────────── */}
      <section className="committees">
        <div className="container">
          <div className="committees__header">
            <span className="section-label">Committees</span>
            <h2>Sixteen arenas.<br />One conference.</h2>
          </div>
          <div className="committees__grid">
            {committees.map((c) => (
              <div key={c.abbr} className="committee-card">
                <div className="committee-card__abbr">{c.abbr}</div>
                <div className="committee-card__body">
                  <h3>{c.name}</h3>
                  <p>{c.topic}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE BOARD ────────────────────── */}
      <section className="exec-board">
        <div className="container">
          <div className="exec-board__header">
            <span className="section-label">Secretariat</span>
            <h2>Our Executive Board</h2>
            <div className="gold-rule" />
            <p className="exec-board__intro">
              The WISMUN 2K26 Secretariat oversees all aspects of the conference —
              from committee management and delegate affairs to programme coordination and resolution drafting.
            </p>
          </div>
          <div className="exec-board__grid">
            {board.map((person) => (
              <div key={person.role} className="exec-card">
                <div className="exec-card__avatar">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="exec-card__avatar-svg">
                    <circle cx="40" cy="30" r="18" fill="rgba(200,168,75,0.25)" stroke="rgba(200,168,75,0.5)" strokeWidth="1.5"/>
                    <ellipse cx="40" cy="72" rx="26" ry="18" fill="rgba(200,168,75,0.15)" stroke="rgba(200,168,75,0.4)" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="exec-card__body">
                  <span className="exec-card__role">{person.role}</span>
                  <h3 className="exec-card__name">{person.name}</h3>
                  <p className="exec-card__school">Witty International School</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────── */}
      <section className="cta-banner container">
        <div className="cta-banner__inner">
          <div className="cta-banner__text">
            <span className="section-label">WISMUN 2K26</span>
            <h2>Ready to take the floor?</h2>
            <p>Get the full conference details and committee breakdown in the brochure.</p>
          </div>
          <div className="cta-banner__actions">
            <Link to="/brochure" className="btn btn--gold">View Brochure</Link>
            <Link to="/contact"  className="btn btn--ghost">Have Questions?</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
