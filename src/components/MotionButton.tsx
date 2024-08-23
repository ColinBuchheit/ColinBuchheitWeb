import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MotionButtonProps {
  to: string;
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
}

const MotionButton: React.FC<MotionButtonProps> = ({ to, children, color = 'primary' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Button
        variant="contained"
        color={color}
        component={Link}
        to={to}
        sx={{
          padding: '0.5rem 1.5rem',
          fontSize: '0.875rem',
          borderRadius: '20px',  // Rounded corners
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',  // Soft shadow
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default MotionButton;
