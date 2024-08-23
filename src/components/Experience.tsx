import React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom color="primary">
          Experience
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Paper elevation={3} sx={{ padding: '1.5rem' }}>
              <Typography variant="h4" color="primary" gutterBottom>
                MX Holdings - Enterprise Software Developer Intern
              </Typography>
              <Typography variant="body1" color="textSecondary">
                May 2024 – Present<br />
                - Developed a real-time monitoring tool to track and diagnose critical errors, reducing downtime.<br />
                - Enhanced price transparency with an internal web application, aiding strategic decisions.<br />
                - Optimized system performance with full-stack/API development using Redux and TypeScript.<br />
                - Collaborated in Agile Scrum teams to automate job processes.
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* Repeat for other experiences */}
      </Grid>
    </Container>
  );
};

export default Experience;
