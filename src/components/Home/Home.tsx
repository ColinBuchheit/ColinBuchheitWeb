import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Box mt={4} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is the home page of my portfolio where you can learn more about me, my skills, and my work.
          </Typography>
          <Button variant="contained" color="primary" size="large" component="a" href="/portfolio">
            View My Portfolio
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Home;


