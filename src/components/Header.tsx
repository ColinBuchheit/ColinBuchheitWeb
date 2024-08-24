import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Header: React.FC = () => {
  const location = useLocation();

  const handleNavClick = (path: string, sectionId: string) => {
    if (location.pathname !== path) {
      window.location.href = path;
    } else {
      scroll.scrollTo(document.getElementById(sectionId)?.offsetTop || 0, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  };

  return (
    <AppBar position="fixed" sx={{ boxShadow: 'none', backgroundColor: 'var(--background-color)', zIndex: 1300 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button onClick={() => handleNavClick("/", "home")} sx={{ fontWeight: 'bold', color: 'var(--primary-color)', marginRight: '1.5rem', fontSize: '1.25rem', '&:hover': { color: 'var(--secondary-color)' }}}>
            HOME
          </Button>
          <Button onClick={() => handleNavClick("/skills-education", "skillsEducation")} sx={{ fontWeight: 'bold', color: 'var(--primary-color)', marginRight: '1.5rem', fontSize: '1.25rem', '&:hover': { color: 'var(--secondary-color)' }}}>
            SKILLS & EDUCATION
          </Button>
          <Button onClick={() => handleNavClick("/experience", "experience")} sx={{ fontWeight: 'bold', color: 'var(--primary-color)', marginRight: '1.5rem', fontSize: '1.25rem', '&:hover': { color: 'var(--secondary-color)' }}}>
            EXPERIENCE
          </Button>
          <Button onClick={() => handleNavClick("/contact", "contact")} sx={{ fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '1.25rem', '&:hover': { color: 'var(--secondary-color)' }}}>
            CONTACT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
