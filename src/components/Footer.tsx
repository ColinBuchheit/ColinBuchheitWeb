import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#000000', textAlign: 'center' }}>
      <Typography variant="body2" color="primarycolor" sx={{ marginBottom: '1rem' }}>
        © 2024 Colin Buchheit. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: 'clamp(0.75rem, 2vw, 1.25rem)' }}>
        <Link href="/skills-education" color="inherit" underline="hover">
          Skills & Education
        </Link>
        <Link href="/experience" color="inherit" underline="hover">
          Experience
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
