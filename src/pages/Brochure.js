import React, { useState } from 'react';
import './Brochure.css';

const schedule = [
  {
    day: 'Day 1', title: 'Opening Ceremony & Committee Orientation',
    events: [
      { time: '08:00', label: 'Registration & Badge Collection' },
      { time: '09:30', label: 'Inaugural Ceremony — Welcome Address by Secretary-General' },
      { time: '11:00', label: 'Committee Session I — General Speakers List Opens' },
      { time: '13:00', label: 'Lunch Break' },
      { time: '14:00', label: 'Committee Session II — Moderated Caucus' },
      { time: '17:30', label: 'Evening Social — Delegate Mixer' },
    ],
  },
  {
    day: 'Day 2', title: 'Core Debate, Voting & Closing',
    events: [
      { time: '09:00', label: 'Committee Session III — Unmoderated Caucus & Working Papers' },
      { time: '11:00', label: 'Committee Session IV — Draft Resolution Readings & Amendments' },
      { time: '13:00', label: 'Lunch Break' },
      { time: '14:00', label: 'Voting Procedure on Draft Resolutions' },
      { time: '15:30', label: 'Closing Plenary — Resolution Adoption' },
      { time: '16:30', label: 'Awards Ceremony & Valedictory Address' },
      { time: '17:30', label: 'Photographs & Farewell' },
    ],
  },
];

const allCommittees = [
  {
    abbr: 'UNSC', name: 'UN Security Council',
    topic: 'Addressing Emerging Threats to International Peace in Contested Maritime Regions',
    desc: "The UNSC is the UN's most powerful body. Delegates represent the five permanent members and ten rotating members, debating urgent security crises with veto powers in play.",
  },
  {
    abbr: 'UNGA', name: 'UN General Assembly',
    topic: 'Reforming Global Financial Architecture to Address Sovereign Debt Crises in Developing Nations',
    desc: 'The largest UN body representing all member states. This committee debates economic and financial solutions for the most vulnerable nations in the global system.',
  },
  {
    abbr: 'WHO', name: 'World Health Organization',
    topic: 'Strengthening Global Pandemic Preparedness and Equitable Vaccine Distribution Frameworks',
    desc: 'Delegates explore how the global health system can be reformed to ensure that no country is left behind during health emergencies.',
  },
  {
    abbr: 'UNHRC', name: 'UN Human Rights Council',
    topic: 'Protecting the Rights of Climate Refugees and Internally Displaced Persons',
    desc: 'With millions displaced by climate-induced disasters, this committee addresses the legal and humanitarian frameworks needed to protect the world\'s most vulnerable.',
  },
  {
    abbr: 'ECOSOC', name: 'Economic & Social Council',
    topic: 'Accelerating SDG Progress Through Inclusive Digital Economy Policies',
    desc: 'ECOSOC focuses on development and economic policy, examining how digital economies can drive sustainable development across the global south.',
  },
  {
    abbr: 'ICJ', name: 'International Court of Justice',
    topic: 'State Responsibility for Transboundary Environmental Harm',
    desc: 'A courtroom simulation where delegates serve as judges and counsel, arguing legal positions on state liability for cross-border pollution and ecological damage.',
  },
  {
    abbr: 'IP', name: 'International Press',
    topic: 'Reporting Global Conflicts, Diplomatic Negotiations, and Humanitarian Crises with Integrity',
    desc: 'Press delegates act as journalists covering the conference in real time — writing articles, conducting interviews, and producing bulletins that influence committee dynamics.',
  },
  {
    abbr: 'ECOFIN', name: 'Economic & Financial Committee',
    topic: 'Designing Equitable Global Tax Frameworks to Combat Illicit Financial Flows',
    desc: 'ECOFIN addresses the intersection of global finance and development, focusing on tax justice, illicit capital flight, and multilateral financial governance.',
  },
  {
    abbr: 'UNW', name: 'UN Women',
    topic: 'Eliminating Gender-Based Violence and Advancing Economic Empowerment for Women Worldwide',
    desc: 'UN Women delegates debate policy solutions to gender inequality, from legislative reform to grassroots economic empowerment initiatives across diverse regions.',
  },
  {
    abbr: 'ADHOC', name: 'Ad Hoc Committee',
    topic: 'Responding to Emerging Crises and Unforeseen Geopolitical Developments in Real Time',
    desc: 'The Ad Hoc Committee deals with surprise crisis scenarios revealed at the conference — testing delegates\' ability to respond swiftly and diplomatically under pressure.',
  },
  {
    abbr: 'AIPPM', name: 'All India Political Parties Meet',
    topic: 'Deliberating Legislative Reforms on National Security, Education, and Economic Policy',
    desc: 'AIPPM is a uniquely Indian committee format where delegates represent political parties rather than nations, debating domestic policy through the lens of Indian parliamentary discourse.',
  },
  {
    abbr: 'LOKSABHA', name: 'Lok Sabha',
    topic: 'Parliamentary Debate on Constitutional Amendments and Federal Governance in India',
    desc: 'Delegates simulate the lower house of India\'s Parliament, following parliamentary procedure to deliberate bills, questions, and motions on pressing national issues.',
  },
  {
    abbr: 'IWC', name: 'International Whaling Commission',
    topic: 'Balancing Conservation Imperatives with Indigenous Cultural Rights in Marine Ecosystems',
    desc: 'This specialised committee debates one of the most contested environmental policy areas — the tension between international conservation law and indigenous maritime traditions.',
  },
  {
    abbr: 'UNODC', name: 'UN Office on Drugs & Crime',
    topic: 'Combating Transnational Organised Crime and Strengthening International Drug Control Frameworks',
    desc: 'UNODC delegates develop multilateral strategies to dismantle drug trafficking networks, address narco-terrorism, and support rehabilitation-centred drug policy.',
  },
  {
    abbr: 'HCC', name: 'Historical Crisis Committee',
    topic: 'Simulating Pivotal Cold War Decisions and Their Lasting Impact on the International Order',
    desc: 'HCC plunges delegates into a historical scenario, requiring them to make decisions under the constraints of a specific era — combining historical research with crisis diplomacy.',
  },
  {
    abbr: 'IAEA', name: 'International Atomic Energy Agency',
    topic: 'Preventing Nuclear Proliferation and Advancing Safe Civilian Nuclear Energy Development',
    desc: 'IAEA delegates navigate the delicate balance between nuclear security and the global energy transition, debating inspections, treaties, and civilian reactor safety standards.',
  },
];

const faqs = [
  { q: 'Who can participate in WISMUN 2K26?', a: 'WISMUN 2K26 is open to all students from Class 8 through undergraduate level. There is no upper age limit for faculty advisors.' },
  { q: 'Do I need prior MUN experience?', a: 'No — delegates of all experience levels are welcome. WISMUN 2K26 has committees suited to every background, from first-timers to seasoned delegates.' },
  { q: 'How is the country allocation done?', a: 'Country preferences are noted during registration. The Secretariat allocates countries based on availability and committee balance. You will be notified of your allocation via email.' },
  { q: 'What is a Position Paper?', a: "A Position Paper is a pre-conference document outlining your country's stance on the committee topic. It is mandatory for all delegates and must be submitted before the deadline announced in the confirmation email." },
  { q: 'Is accommodation available?', a: 'The conference does not provide accommodation. However, we can share a list of nearby hotels and PGs upon request — write to wismun.official@gmail.com.' },
  { q: 'What is the dress code?', a: 'Western or Indian formal attire is expected throughout all committee sessions. Smart casual is acceptable during social events.' },
  { q: 'How are awards decided?', a: 'Awards are given by committee chairs based on participation quality, position paper, research depth, negotiation skills, and contributions to the final resolution.' },
];

export default function Brochure() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wrapper">

      {/* Header */}
      <div className="brochure-hero">
        <div className="container">
          <span className="section-label">Conference Brochure</span>
          <h1>Everything you need to know about WISMUN 2K26</h1>
          <p>Programme details, schedule, committees, rules of procedure, and FAQs — all in one place.</p>
        </div>
      </div>

      <div className="container brochure-body">

        {/* Overview */}
        <section className="br-section">
          <span className="section-label">Overview</span>
          <h2>About WISMUN 2K26</h2>
          <div className="gold-rule" />
          <div className="br-text-cols">
            <p>
              WISMUN 2K26 is the sixth annual edition of the Witty International Model United Nations,
              uniting student delegates from schools and universities across the country for two days of
              immersive diplomatic simulation.
            </p>
            <p>
              Each participant represents an assigned nation in one of sixteen committees, engaging in
              formal parliamentary debate, caucusing, drafting working papers, and ultimately passing
              resolutions that mirror the processes of the real United Nations.
            </p>
          </div>

          <div className="br-highlights">
            {[
              { label: 'Format',     value: 'In-person, 2 days' },
              { label: 'Language',   value: 'English' },
              { label: 'Committees', value: '16 committees' },
              { label: 'Delegates',  value: '300+ expected' },
              { label: 'Awards',     value: 'Best, Outstanding, Commendation' },
              { label: 'Procedure',  value: 'UN Parliamentary Rules' },
            ].map(h => (
              <div key={h.label} className="br-highlight">
                <span className="br-highlight__label">{h.label}</span>
                <span className="br-highlight__value">{h.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Committees */}
        <section className="br-section">
          <span className="section-label">Committees & Agenda</span>
          <h2>Sixteen Committees. One Purpose.</h2>
          <div className="gold-rule" />

          <div className="br-committees">
            {allCommittees.map(c => (
              <div key={c.abbr} className="br-committee">
                <div className="br-committee__head">
                  <div>
                    <span className="br-committee__abbr">{c.abbr}</span>
                    <h3>{c.name}</h3>
                  </div>
                </div>
                <p className="br-committee__topic">"{c.topic}"</p>
                <p className="br-committee__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section className="br-section">
          <span className="section-label">Programme Schedule</span>
          <h2>Two Days of Diplomacy</h2>
          <div className="gold-rule" />

          <div className="br-schedule">
            {schedule.map((day) => (
              <div key={day.day} className="br-day">
                <div className="br-day__header">
                  <span className="br-day__tag">{day.day}</span>
                  <h3>{day.title}</h3>
                </div>
                <div className="br-day__events">
                  {day.events.map(ev => (
                    <div key={ev.time} className="br-event">
                      <span className="br-event__time">{ev.time}</span>
                      <span className="br-event__label">{ev.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rules of Procedure */}
        <section className="br-section">
          <span className="section-label">Rules of Procedure</span>
          <h2>How Debate Works</h2>
          <div className="gold-rule" />

          <div className="br-rules">
            {[
              { title: 'General Speakers List (GSL)', desc: 'The primary forum for formal speeches. Each delegate may address the committee for a set time. The GSL remains open throughout the session.' },
              { title: 'Moderated Caucus', desc: 'A structured, focused debate on a specific sub-topic. Delegates make short speeches through the chair in a fast-paced format.' },
              { title: 'Unmoderated Caucus', desc: 'An informal session allowing delegates to network, negotiate, and collaborate on working papers and draft resolutions.' },
              { title: 'Working Papers', desc: 'Pre-resolution documents outlining ideas for addressing the agenda topic. Multiple working papers can be merged into a draft resolution.' },
              { title: 'Draft Resolutions', desc: 'Formal documents with operative and preambulatory clauses. They are debated, amended, and voted upon by the committee.' },
              { title: 'Voting Procedure', desc: 'Once debate is closed, delegates vote on all amendments and final draft resolutions. A simple majority is required in most committees; the UNSC requires consensus among the P5.' },
            ].map(r => (
              <div key={r.title} className="br-rule">
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="br-section">
          <span className="section-label">FAQs</span>
          <h2>Frequently Asked Questions</h2>
          <div className="gold-rule" />

          <div className="br-faqs">
            {faqs.map((faq, i) => (
              <div key={i} className={`br-faq ${openFaq === i ? 'br-faq--open' : ''}`}>
                <button className="br-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="br-faq__icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="br-faq__a">{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
