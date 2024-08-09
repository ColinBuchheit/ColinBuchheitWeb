import React from 'react';
import Home from '../components/Home/Home';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';
import Education from '../components/Education/Education';

const MainPage: React.FC = () => {
  return (
    <div>
      <Home />
      <Portfolio />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default MainPage;





