import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Registrations from './pages/Registrations';
import WittyDelegates from './pages/WittyDelegates';
import ExternalDelegates from './pages/ExternalDelegates';
import Brochure from './pages/Brochure';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/registrations"          element={<Registrations />} />
        <Route path="/registrations/witty"    element={<WittyDelegates />} />
        <Route path="/registrations/external" element={<ExternalDelegates />} />
        <Route path="/brochure"   element={<Brochure />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
