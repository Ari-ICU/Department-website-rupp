import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from './pages/Home';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Undergraduate from './pages/Undergraduate';
import Program from './pages/Program';
import Degree from './pages/Degree';
import Admission from './pages/Admission';
import Scholarship from './pages/Scholarship'

const App = () => {
  return (
    <Router>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/undergraduate" element={<Undergraduate />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/programs/:degree" element={<Degree />} />
        <Route path='/admissions' element={<Admission />} />
        <Route path='scholars' element={<Scholarship />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
