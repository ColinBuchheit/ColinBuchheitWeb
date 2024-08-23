import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" color="primary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="textSecondary">
          I am a senior at the University of Missouri-Columbia pursuing a Bachelor of Science in Information Technology. I have a passion for software development and experience in full-stack development, job automation, code automation, npm package development, web framework development, and enterprise software development.
        </Typography>
      </motion.div>
    </Container>
  );
};

export default About;
