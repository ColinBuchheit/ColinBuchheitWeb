import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ padding: '1rem 0', backgroundColor: 'var(--background-color)', color: 'var(--secondary-text-color)', textAlign: 'center' }}>
      <Typography variant="body2" sx={{ color: 'var(--secondary-text-color)' }}>
        © 2024 Colin Buchheit. All rights reserved.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
        <Link href="/skills-education" sx={{ margin: '0 1rem', color: 'var(--secondary-text-color)' }}>
          Skills & Education
        </Link>
        <Link href="/experience" sx={{ margin: '0 1rem', color: 'var(--secondary-text-color)' }}>
          Experience
        </Link>
        <Link href="/contact" sx={{ margin: '0 1rem', color: 'var(--secondary-text-color)' }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
