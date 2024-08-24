import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MotionButtonProps {
  to: string;
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  sx?: object; // Add this line to accept sx prop
}

const MotionButton: React.FC<MotionButtonProps> = ({ to, children, color = 'primary', sx }) => {
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
        sx={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', textTransform: 'uppercase', ...sx }} // Spread the sx prop here
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default MotionButton;
