import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import MotionButton from '../components/MotionButton';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', marginTop: '4rem' }}>
      {/* Headshot Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box
          component="img"
          src="/images/Headshot.jpg"  // Ensure this image is in your public/images folder
          alt="Colin Buchheit"
          sx={{
            width: '200px',
            height: 'auto',  // Maintain aspect ratio
            borderRadius: '50%',
            marginBottom: '2rem',
            border: '4px solid #ff9800',  // Add a border matching your theme
          }}
        />
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography variant="h3" gutterBottom color="primary">
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '2rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Hi! I'm Colin Buchheit, a Senior IT Student passionate about software development. I have a diverse set of skills in full-stack development, job automation, and code automation. My experience includes developing APIs, creating web frameworks, and implementing enterprise software solutions. I'm eager to apply my skills in real-world projects and contribute to innovative teams. Let's work together to build something amazing!
        </Typography>
      </motion.div>

      {/* Learn More Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <MotionButton to="/skills-education" color="primary">
          Find Out More About Me
        </MotionButton>
      </motion.div>
    </Container>
  );
};

export default Home;
