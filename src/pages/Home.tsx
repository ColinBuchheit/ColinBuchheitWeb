import React from 'react';
import { Box, Typography, Container, Paper, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import MotionButton from '../components/MotionButton';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', marginTop: '6rem', paddingTop: '4rem' }}>
      {/* Headshot Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box
          component="img"
          src="/images/Headshot.jpg"
          alt="Colin Buchheit"
          sx={{
            width: 'clamp(150px, 20vw, 300px)', // Responsive width
            height: 'auto',
            borderRadius: '50%',
            marginBottom: '2rem',
            border: '4px solid #4c7faf',
            position: 'relative'
          }}
        />
        {/* Social Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '-40px' }}>
          <IconButton href="https://github.com/ColinBuchheit" target="_blank" sx={{ margin: '0 1rem' }}>
            <GitHub sx={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/colin-buchheit-02a3aa22b/" target="_blank" sx={{ margin: '0 1rem' }}>
            <LinkedIn sx={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }} />
          </IconButton>
        </Box>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Paper elevation={3} sx={{ padding: '2rem', backgroundColor: '#2a2a2a', marginBottom: '2rem', color: '#ffffff', borderRadius: '8px', textAlign: 'left' }}>
          <Typography variant="h3" gutterBottom color="primary" sx={{ textAlign: 'center', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            About Me
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', lineHeight: '2', color: '#ffffff' }}>
            Hello, My name is Colin Buchheit. I'm a senior engineering student at the University of Missouri-Columbia, 
            pursuing a Bachelor of Science in Information Technology with a focus on software development. I am actively involved in several clubs, including Mizzou Computing Association, Mizzou Space Program, and Mizzou Student Astronomical Society.
          </Typography>
          <Typography variant="h5" sx={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', lineHeight: '2', color: '#ffffff' }}>
            On track to graduate in just three years, I've gained invaluable experience in the fields of Enterprise Software Development and Information Technology. 
            My broad knowledge base and specialized skills have prepared me for an exciting future in this ever-evolving industry.
            <br />
            Explore more about me by clicking the links on the page.
          </Typography>
        </Paper>
      </motion.div>

      {/* Learn More Button */}
      <Box sx={{ marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <MotionButton to="/skills-education" color="primary">
            Find Out More About Me
          </MotionButton>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
