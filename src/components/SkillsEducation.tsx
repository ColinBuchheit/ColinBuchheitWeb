import React from 'react';
import { Container, Grid, Typography, Paper, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { School, Code, Security, Build } from '@mui/icons-material';

const SkillsEducationPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '8rem', paddingBottom: '4rem' }}>
      <Typography variant="h3" color="primary" gutterBottom sx={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
        Skills & Education
      </Typography>

      <Grid container spacing={4} direction="column">
        {/* Education Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            id="skillsEducation"
          >
            <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', marginBottom: '2rem', borderRadius: '8px' }}>
              <Typography variant="h4" color="primary" gutterBottom sx={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
                <School sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                Education
              </Typography>
              <Box>
                <Typography variant="h5" sx={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', lineHeight: '1.8', color: '#ffffff' }}>
                  University of Missouri, Columbia
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.8', color: '#ffffff' }}>
                  - Bachelor of Science in Information Technology (Expected Graduation: May 2025)<br />
                  - Overall GPA: 3.64, Major GPA: 3.94<br />
                  - Mizzou Engineering High Dean's List
                </Typography>
                <Typography variant="h5" sx={{ marginTop: '1rem', fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', lineHeight: '1.8', color: '#ffffff' }}>
                  Saint Louis Community College
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.8', color: '#ffffff' }}>
                  - Associate Degree in Information Technology (Graduated: May 2023)<br />
                  - Phi Theta Kappa Honors Fraternity
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* Technical Skills Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            id="technicalSkills"
          >
            <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', marginBottom: '2rem', borderRadius: '8px' }}>
              <Typography variant="h4" color="primary" gutterBottom sx={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
                <Code sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                Technical Skills
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.8', color: '#ffffff' }}>
                - C#, Python, Java, JavaScript, TypeScript, YAML, Bash, PowerShell<br />
                - Windows, Arch Linux, Ubuntu<br />
                - Azure DevOps: Server management, YAML pipeline deployment, code version management<br />
                - GitHub: Version control and collaboration<br />
                - Full-Stack Development: .NET frameworks<br />
                - SQL Server: SQL query and server development<br />
                - MongoDB: Query knowledge<br />
                - Computer Networking: Wireshark, Cisco Packet Tracer<br />
                - Cybersecurity: Penetration testing, SQL injection, Buffer Overflow, DDoS, DoS attacks
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* Agile Methodologies & Soft Skills Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            id="agileSkills"
          >
            <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', marginBottom: '2rem', borderRadius: '8px' }}>
              <Typography variant="h4" color="primary" gutterBottom sx={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
                <Build sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                Agile Methodologies & Soft Skills
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.8', color: '#ffffff' }}>
                - Agile Development: Scrum, Kanban using Azure DevOps and Atlassian Jira<br />
                - Team Collaboration<br />
                - Effective Communication<br />
                - Problem Solving<br />
                - Leadership<br />
                - Time Management
              </Typography>
            </Paper>
          </motion.div>
        </Grid>

        {/* Certifications Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            id="certifications"
          >
            <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', marginBottom: '2rem', borderRadius: '8px' }}>
              <Typography variant="h4" color="primary" gutterBottom sx={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
                <Security sx={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                Certifications
              </Typography>
              <Typography variant="body1" sx={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', lineHeight: '1.8', color: '#ffffff' }}>
                - In-Progress: Information Systems and Technology Certificate<br />
                - In-Progress: Cybersecurity Certificate<br />
                - Google IT Support Certificate: <Link href="https://coursera.org/share/312d5954c9c4805f993e7222c43eab89" target="_blank" sx={{ color: 'primary.main' }}>View Certificate</Link>
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillsEducationPage;
