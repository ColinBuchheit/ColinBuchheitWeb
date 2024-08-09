// Portfolio.tsx
import React from 'react';
import ThreeDScene from './ThreeDScene';
import { Box, Typography } from '@mui/material';

const Portfolio: React.FC = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        My 3D Portfolio
      </Typography>
      <ThreeDScene />
      <Typography variant="body1" textAlign="center" mt={2}>
        Click on the objects to interact and learn more about my skills, certifications, and resume.
      </Typography>
    </Box>
  );
};

export default Portfolio;
