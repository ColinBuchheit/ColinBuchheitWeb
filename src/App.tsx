import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SkillsEducationPage from './pages/SkillsEducation';
import ExperiencePage from './pages/Experience';
import ContactPage from './pages/Contact';
import './styles/GlobalStyles.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <CssBaseline />
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills-education" element={<SkillsEducationPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
