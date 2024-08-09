import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="footer" py={2} textAlign="center">
      <Typography variant="body1" color="inherit">
        © 2024 My Portfolio
      </Typography>
    </Box>
  );
};

export default Footer;
