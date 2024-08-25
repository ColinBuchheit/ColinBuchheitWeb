import React from 'react';
import { Container, Grid, Typography, Paper, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';

const ExperiencePage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '8rem', paddingBottom: '4rem' }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Experience
      </Typography>

      {/* MX Holdings Internship */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', color: '#ffffff', marginBottom: '2rem', borderRadius: '8px' }}>
          <Typography variant="h4" color="primary" gutterBottom>
            MX Holdings: Enterprise Software Developer Internship
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
            <strong>Duration:</strong> Summer 2024 - Present (Continuing Part-Time)
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
            During my internship at MX Holdings, I engaged in a variety of challenging projects that significantly advanced my technical skills in software development and IT infrastructure management. Here are some key contributions:
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary" gutterBottom>
                Internal System Diagnostics Dashboard
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
                <strong>Project Overview:</strong> Developed a robust internal diagnostics dashboard providing a centralized platform to monitor and diagnose recurring and critical errors across all enterprise applications.
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '1rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
                <strong>Technical Highlights:</strong>
                <ul>
                  <li><strong>API Development:</strong> Engineered APIs using C# in the back-end to efficiently aggregate and retrieve error data from multiple data sources.</li>
                  <li><strong>Web Dashboard:</strong> Leveraged React.js and Material-UI libraries to design a dynamic and user-friendly interface, offering real-time insights and analytics on system performance.</li>
                  <li><strong>State Management:</strong> Utilized Redux for scalable state management, ensuring seamless data flow and responsiveness within the application.</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary" gutterBottom>
                Market Pricing Application
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
                <strong>Project Overview:</strong> Developed an advanced software application for detailed analysis and visualization of metal commodity prices, facilitating strategic market insights.
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '1rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
                <strong>Technical Highlights:</strong>
                <ul>
                  <li><strong>Data Visualization:</strong> Implemented and enabled users to explore daily, monthly, and quarterly price trends. In progress project with plans to expand features covering data visualization displays as well as multiple other utilities.</li>
                  <li><strong>Backend Integration:</strong> Worked with Node.js as well as Material-UI library imports to create backend services that handled complex data queries and transformations, providing accurate and timely pricing information. Offered detailed price breakdowns for transparency.</li>
                  <li><strong>Automation & Deployment:</strong> Deployed the application using YAML pipeline scripts on Azure DevOps, ensuring consistent and automated builds and deployments.</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary" gutterBottom>
                Additional Contributions
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
                <ul>
                  <li><strong>Pipeline Deployment:</strong> Developed and optimized YAML-based CI/CD pipelines on Azure DevOps, facilitating automated testing and deployment workflows across multiple environments.</li>
                  <li><strong>NPM Package Creation:</strong> Created reusable npm packages to standardize internal templates and streamline development processes across different projects, enhancing code reusability and consistency.</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>

          {/* Images Section */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src="/images/MoultonTrip.jpg"
                alt="Moulton Trip"
                sx={{ width: '80%', height: 'auto', borderRadius: '8px', margin: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src="/images/InternPresentation.jpg"
                alt="Intern Presentation"
                sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: '2rem' }}>
            <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
              This internship provided a comprehensive experience in full-stack development and IT infrastructure management within a fast-paced enterprise environment. I not only honed my technical skills but also gained valuable insights into the importance of scalable software design, efficient pipeline management, and the critical role of IT infrastructure in supporting business operations.
            </Typography>
          </Box>
        </Paper>
      </motion.div>

      {/* Mizzou Hackathon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} sx={{ padding: '2.5rem', backgroundColor: '#2a2a2a', color: '#ffffff', marginBottom: '2rem', borderRadius: '8px' }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Mizzou Hackathon 2023: Rapid Reels Project
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '1.5rem', fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
            Rapid Reels, a project developed by <Link href="https://www.linkedin.com/in/michael-joyce-827443229/" target="_blank" color="primary">Mikey Joyce</Link>, <Link href="https://www.linkedin.com/in/zack-murry/" target="_blank" color="primary">Zack Murry</Link>, <Link href="https://www.linkedin.com/in/thegagesmith/" target="_blank" color="primary">Gage Smith</Link>, and Colin Buchheit, secured first place in the developer category at TigerHacks 2023, the University of Missouri's annual hackathon. Our project automates the process of trimming the most engaging parts of longer videos, addressing the rising popularity of short-form video content on platforms like TikTok, Instagram Reels, and YouTube Shorts. Check out our project on <Link href="https://devpost.com/software/rapidreels" target="_blank" color="primary">Devpost</Link>.
          </Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src="/images/HomePage.png"
                alt="Rapid Reels Home Page"
                sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" color="primary" gutterBottom>
                Data Processing and Signal Analysis
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
                Our data processing pipeline involved downloading video and replay rate heatmaps, applying a signal processing algorithm to find maxima within the heatmap, and generating clip boundaries to create highlight reels. The following graphs illustrate our signal processing methodology.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} alignItems="center" sx={{ marginTop: '2rem' }}>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src="/images/Histogram1.png"
                alt="Histogram 1"
                sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                component="img"
                src="/images/Histogram2.png"
                alt="Histogram 2"
                sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>

          <Box sx={{ marginTop: '2rem' }}>
            <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#ffffff' }}>
              Data Processing Steps:
              <ol>
                <li>Download the data: video and replay rate heatmap.</li>
                <li>Utilize a signal processing algorithm to find the maxima of the heatmap and create bounds that represent the beginning and ends of clips.</li>
                <li>Clip up the video at the timestamp of the given bounds and save it to the filesystem.</li>
              </ol>
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ExperiencePage;
