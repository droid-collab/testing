import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Brochure from './pages/Brochure';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/register"   element={<Register />} />
        <Route path="/brochure"   element={<Brochure />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
