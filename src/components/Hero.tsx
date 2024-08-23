import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', padding: '4rem 0' }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h2" color="primary" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            I am a Senior IT Student passionate about Software Development
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Learn More
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero;
