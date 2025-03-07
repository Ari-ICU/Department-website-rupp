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
import Bachelor from './pages/Bachelor';
import Master from './pages/Master'
import Doctoral from './pages/Doctoral'
import Diploma from './pages/Diploma.jsx'


function App() {
  return (
    <Router>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path='/undergraduate' element={<Undergraduate />} />
        <Route path='/bachelor' element={<Bachelor />} />
        <Route path='/master' element={<Master />} />
        <Route path='/doctoral' element={<Doctoral />} />
        <Route path='/diploma' element={<Diploma />}/>
        <Route path="/about" element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/programs' element={<Program />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
