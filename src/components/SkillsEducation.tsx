import React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';

const SkillsEducation: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom color="primary">
          Skills & Education
        </Typography>
      </motion.div>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Paper elevation={3} sx={{ padding: '1.5rem', height: '100%' }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Skills
              </Typography>
              <Typography variant="body1" color="textSecondary">
                - Front-end: HTML, CSS, TypeScript, Redux, XAML<br />
                - Back-end: Python, Java, JavaScript, C#, Bash, PowerShell, Node.js<br />
                - IDEs: Visual Studio, VS Code, Eclipse<br />
                - Operating Systems: Windows, Linux (Ubuntu, Arch Linux, Kali)<br />
                - Networking: Cisco, Wireshark, Packet Tracing<br />
                - Design: Adobe Products, AutoCAD, Inventor, Fusion 360<br />
                - Databases: MongoDB, MySQL<br />
                - DevOps: Jira, Azure DevOps, GitHub<br />
                - Cybersecurity: Pen testing, SQL injection, DoS attacks, Buffer Overflow<br />
                - Microsoft Office: Excel, PowerPoint, Word, Teams
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Paper elevation={3} sx={{ padding: '1.5rem', height: '100%' }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Education
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>University of Missouri, Columbia</strong><br />
                - BS Information Technology, College of Engineering<br />
                - GPA: 3.64, Major GPA: 3.94<br />
                - High Dean's List<br />
                - Clubs: Mizzou Computing Association, Mizzou Space Program<br /><br />
                
                <strong>St. Louis Community College</strong><br />
                - Associate Degree<br />
                - Member of Phi Theta Kappa Honors Fraternity
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillsEducation;
