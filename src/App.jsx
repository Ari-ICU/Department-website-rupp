import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from './pages/Home';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Program from './pages/Program';
import Degree from './pages/Degree';
import Admission from './pages/Admission';
import Scholarship from './pages/Scholarship'
import Facilities from './pages/Facilities';
import News from './pages/News';
import ScholarshipDetails from './pages/ScholarshipDetails';
import ResearchDetails from './pages/ResearchDetails';
import CareerDetails from './pages/CareerDetails';
import Research from './pages/Research';



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
        <Route path="/programs" element={<Program />} />
        <Route path="/programs/:degree" element={<Degree />} />
        <Route path='/admissions' element={<Admission />} />
        <Route path='/scholars' element={<Scholarship />} />
        {/* Scholarship Detail Page (Dynamic) */}
        <Route path="/scholars/:id" element={<ScholarshipDetails />} />
        <Route path='/research/' element={<Research/>} />
        <Route path='/research/:id' element={<ResearchDetails />} />
        <Route path='/career/:id' element={<CareerDetails />} />
        <Route path='/events&news/:id' />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/events&news' element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
