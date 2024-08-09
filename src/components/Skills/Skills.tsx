// Skills.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'C#', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'Redux', level: 'Intermediate' },
  { name: 'CSS', level: 'Advanced' },
];

const SkillCard: React.FC<{ skill: string; level: string }> = ({ skill, level }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotateY: 15 }}
      whileTap={{ scale: 0.9 }}
      style={{
        background: '#FFD700',
        color: '#000',
        padding: '20px',
        borderRadius: '10px',
        margin: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        perspective: '1000px',
      }}
    >
      <Typography variant="h6">{skill}</Typography>
      <Typography variant="body2">{level}</Typography>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap" mt={4}>
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill.name} level={skill.level} />
      ))}
    </Box>
  );
};

export default Skills;
