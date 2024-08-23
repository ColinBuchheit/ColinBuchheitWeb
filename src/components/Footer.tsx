import React from 'react';
import { Box, Typography, Link, Container, Grid } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', padding: '2rem 0', marginTop: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" color="textSecondary">
              © {new Date().getFullYear()} Colin Buchheit. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" color="textSecondary">
              <Link href="#home" color="inherit" underline="hover">Home</Link> |{' '}
              <Link href="#skills-education" color="inherit" underline="hover">Skills & Education</Link> |{' '}
              <Link href="#experience" color="inherit" underline="hover">Experience</Link> |{' '}
              <Link href="#contact" color="inherit" underline="hover">Contact</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'right' }}>
            <Link href="https://www.linkedin.com/in/colin-buchheit-02a3aa22b/" target="_blank" color="inherit" sx={{ mr: 2 }}>
              <LinkedIn />
            </Link>
            <Link href="https://github.com/your-github-username" target="_blank" color="inherit">
              <GitHub />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
