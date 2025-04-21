import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

// Import custom theme
import theme from './theme';
import store from './store';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import SkillsEducationPage from './pages/SkillsEducation';
import ExperiencePage from './pages/Experience';
import ContactPage from './pages/Contact';

// Import global styles
import './styles/GlobalStyles.css';

const App: React.FC = () => {
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app-container">
          <Router>
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills-education" element={<SkillsEducationPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;