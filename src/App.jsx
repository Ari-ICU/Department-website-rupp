import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepages from './pages/Home';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Program from './pages/Program';
import Degree from './pages/Degree';
import Admission from './pages/Admission';
import Scholarship from './pages/Scholarship';
import Facilities from './pages/Facilities';
import News from './pages/News';
import ScholarshipDetails from './pages/ScholarshipDetails';
import ResearchDetails from './pages/ResearchDetails';
import CareerDetails from './pages/CareerDetails';
import Research from './pages/Research';
import EventsNewDetails from './pages/EventsNewDetails';
import Faculty from './pages/Faculty';
import LabDetails from './pages/LabDetails';
import DeveloperTeam from './pages/DeveloperTeam';
import FacultyDetails from './pages/FacultyDetails';
import NewsDetails from './pages/NewsDetails';
import NotFoundPage from './pages/404';
import UnderConstructionPage from './pages/UnderConstructionPage';
import FooterNotfound from './components/footer/FooterNotfound';

const AppContent = () => {
  const location = useLocation();

  // Check if the current route is not found (404)
  const isNotFoundPage = location.pathname !== "/" && !validPaths.includes(location.pathname);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/programs/:degree" element={<Degree />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/scholars" element={<Scholarship />} />
        <Route path="/scholars/:id" element={<ScholarshipDetails />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:id" element={<ResearchDetails />} />
        <Route path="/researchlab/:id" element={<LabDetails />} />
        <Route path="/career/:id" element={<CareerDetails />} />
        <Route path="/news&events" element={<News />} />
        <Route path="/news&events/:id" element={<EventsNewDetails />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/developer" element={<DeveloperTeam />} />
        <Route path="/undercontruction" element={<UnderConstructionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Show FooterNotfound only on 404 pages */}
      {isNotFoundPage ? <FooterNotfound /> : <Footer />}
    </>
  );
};

// Define valid paths to check against
const validPaths = [
  "/",
  "/about",
  "/contact",
  "/faculty",
  "/faculty/:id",
  "/programs",
  "/programs/:degree",
  "/admissions",
  "/scholars",
  "/scholars/:id",
  "/research",
  "/research/:id",
  "/researchlab/:id",
  "/career/:id",
  "/news&events",
  "/news&events/:id",
  "/news/:id",
  "/facilities",
  "/developer",
  "/undercontruction",
];



const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
