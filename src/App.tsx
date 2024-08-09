// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import { useMode } from './theme';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, rotateY: 90, scale: 0.8 },
    animate: { opacity: 1, rotateY: 0, scale: 1, transition: { duration: 0.7, ease: 'easeInOut' } },
    exit: { opacity: 0, rotateY: -90, scale: 0.8, transition: { duration: 0.7, ease: 'easeInOut' } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial="initial" animate="animate" exit="exit" variants={pageTransition}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [theme, toggleColorMode] = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleColorMode={toggleColorMode} />
        <AppContent />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

