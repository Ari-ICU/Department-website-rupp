import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepages from './pages/Home';
import Header from './components/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="sticky top-0 z-50">
        <Header />
        </div>
        <Routes>
          <Route path="/" element={<Homepages />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
