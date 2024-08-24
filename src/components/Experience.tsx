import React from 'react';
import { Container, Grid, Typography, Paper, Box, Card, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const ExperiencePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '8rem', paddingBottom: '4rem' }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Experience
      </Typography>

      <Grid container spacing={4} direction="column">
        {/* MX Holdings Internship Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', color: '#ffffff', marginBottom: '2rem', borderRadius: '8px' }}>
              <Typography variant="h4" color="primary" gutterBottom>
                MX Holdings - Enterprise Software Developer Internship
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                <strong>Duration:</strong> Summer 2024 - Present (Continuing Part-Time)
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                During my internship at MX Holdings, I engaged in a variety of challenging projects that significantly advanced my technical skills in software development and IT infrastructure management. Here are some key contributions:
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Internal System Diagnostics Dashboard
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                    <strong>Project Overview:</strong> Developed a robust internal diagnostics dashboard providing a centralized platform to monitor and diagnose recurring and critical errors across all enterprise applications.
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: '1rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                    <strong>Technical Highlights:</strong>
                    <ul>
                      <li><strong>API Development:</strong> Engineered APIs using C# in the back-end to efficiently aggregate and retrieve error data from multiple data sources.</li>
                      <li><strong>Web Dashboard:</strong> Leveraged React.js and Material-UI to design a dynamic and user-friendly interface, offering real-time insights and analytics on system performance.</li>
                      <li><strong>State Management:</strong> Utilized Redux for scalable state management, ensuring seamless data flow and responsiveness within the application.</li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="250"
                      image="/images/MoultonTrip.jpg"
                      alt="Moulton Site Visit"
                    />
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Market Pricing Application
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                    <strong>Project Overview:</strong> Developed an advanced software application for detailed analysis and visualization of metal commodity prices, facilitating strategic market insights.
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: '1rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                    <strong>Technical Highlights:</strong>
                    <ul>
                      <li><strong>Data Visualization:</strong> Implemented and enabled users to explore daily, monthly, and quarterly price trends.</li>
                      <li><strong>Backend Integration:</strong> Worked with Node.js and Express.js to create backend services that handled complex data queries and transformations, providing accurate and timely pricing information.</li>
                      <li><strong>Automation & Deployment:</strong> Deployed the application using YAML pipeline scripts on Azure DevOps, ensuring consistent and automated builds and deployments.</li>
                    </ul>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="250"
                      image="/images/InternPresentation.jpg"
                      alt="Intern Presentation"
                    />
                  </Card>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Additional Contributions
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                    <ul>
                      <li><strong>Pipeline Deployment:</strong> Developed and optimized YAML-based CI/CD pipelines on Azure DevOps, facilitating automated testing and deployment workflows across multiple environments.</li>
                      <li><strong>NPM Package Creation:</strong> Created reusable npm packages to standardize internal templates and streamline development processes across different projects, enhancing code reusability and consistency.</li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>

              <Box sx={{ marginTop: '2rem' }}>
                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                  This internship provided a comprehensive experience in full-stack development and IT infrastructure management within a fast-paced enterprise environment. I not only honed my technical skills but also gained valuable insights into the importance of scalable software design, efficient pipeline management, and the critical role of IT infrastructure in supporting business operations.
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        {/* Mizzou Hackathon 2023 Section */}
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', color: '#ffffff', marginBottom: '2rem', borderRadius: '8px' }}>
              <Typography variant="h4" color="primary" gutterBottom>
                Mizzou Hackathon 2023 - Rapid Reels Project
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                Rapid Reels, a project developed by Mikey Joyce, Zack Murry, Colin Buchheit, and Gage Smith, secured first place in the developer category at TigerHacks 2023, the University of Missouri's annual hackathon. Our project automates the process of trimming the most engaging parts of longer videos, addressing the rising popularity of short-form video content on platforms like TikTok, Instagram Reels, and YouTube Shorts.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="250"
                      image="/images/HomePage.png"
                      alt="Rapid Reels Home Page"
                    />
                  </Card>
                </Grid>

                <Grid item xs={6}>
                  <Box>
                    <Typography variant="h5" color="primary" gutterBottom>
                      Data Processing and Signal Analysis
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#b0b0b0' }}>
                      Our data processing pipeline involved downloading video and replay rate heatmaps, applying a signal processing algorithm to find maxima within the heatmap, and generating clip boundaries to create highlight reels. The following graphs illustrate our signal processing methodology.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="250"
                      image="/images/Histogram1.png"
                      alt="Replay Rate Histogram"
                    />
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="250"
                      image="/images/Histogram2.png"
                      alt="Signal Processing Visualization"
                    />
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExperiencePage;
