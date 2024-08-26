import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  const location = useLocation();

  const handleNavClick = (path: string, sectionId: string) => {
    if (location.pathname !== path) {
      window.location.href = path;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <AppBar position="fixed" sx={{ boxShadow: 'none', backgroundColor: '#000000', zIndex: 1300 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="home" smooth={true} duration={500}>
              <Box
                onClick={() => handleNavClick("/", "home")}
                sx={{
                  fontWeight: 'bold',
                  color: '#007bff',
                  marginRight: '1.5rem',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // Dynamic font size
                  cursor: 'pointer',
                  '&:hover': { color: '#0056b3' }
                }}
              >
                HOME
              </Box>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="skillsEducation" smooth={true} duration={500}>
              <Box
                onClick={() => handleNavClick("/skills-education", "skillsEducation")}
                sx={{
                  fontWeight: 'bold',
                  color: '#007bff',
                  marginRight: '1.5rem',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // Dynamic font size
                  cursor: 'pointer',
                  '&:hover': { color: '#0056b3' }
                }}
              >
                SKILLS & EDUCATION
              </Box>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="experience" smooth={true} duration={500}>
              <Box
                onClick={() => handleNavClick("/experience", "experience")}
                sx={{
                  fontWeight: 'bold',
                  color: '#007bff',
                  marginRight: '1.5rem',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // Dynamic font size
                  cursor: 'pointer',
                  '&:hover': { color: '#0056b3' }
                }}
              >
                EXPERIENCE
              </Box>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link to="contact" smooth={true} duration={500}>
              <Box
                onClick={() => handleNavClick("/contact", "contact")}
                sx={{
                  fontWeight: 'bold',
                  color: '#007bff',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', // Dynamic font size
                  cursor: 'pointer',
                  '&:hover': { color: '#0056b3' }
                }}
              >
                CONTACT
              </Box>
            </Link>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
