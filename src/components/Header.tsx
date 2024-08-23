import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import MotionButton from './MotionButton';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Colin Buchheit
        </Typography>
        <Box sx={{ display: 'flex', gap: '1rem' }}>  {/* Add spacing between buttons */}
          <MotionButton to="/">Home</MotionButton>
          <MotionButton to="/skills-education">Skills & Education</MotionButton>
          <MotionButton to="/experience">Experience</MotionButton>
          <MotionButton to="/contact">Contact</MotionButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
