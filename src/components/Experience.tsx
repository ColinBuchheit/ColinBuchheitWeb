import React, { useState, useEffect  } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Link,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import { 
  WorkOutline as WorkIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  Timeline as TimelineIcon,
  Build as BuildIcon,
  Memory as MemoryIcon,
  Download as DownloadIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Security as SecurityIcon,
  OpenInNew as OpenInNewIcon,
  AutoAwesome as AutoAwesomeIcon  

} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.2 }
  }
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const SecureResumeSection: React.FC = () => {
  const [isBlurred, setIsBlurred] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleViewToggle = () => {
    setIsBlurred(!isBlurred);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Colin_Buchheit_Resume.pdf';
    link.download = 'Colin_Buchheit_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open('/Colin_Buchheit_Resume.pdf', '_blank');
  };

  return (
    <Paper 
      elevation={0}
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #1e1e1e 0%, #262626 100%)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.05)',
        position: 'relative'
      }}
    >
      {/* Header with gradient */}
      <Box 
        sx={{ 
          p: 0.5, 
          background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)'
        }}
      />
      
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        {/* Resume Header */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          justifyContent: 'space-between', 
          gap: 2,
          mb: 3 
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SecurityIcon sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
            <Typography variant="h4" color="primary" sx={{ 
              fontWeight: 600,
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}>
              Resume
            </Typography>
          </Box>
          
          {/* Action Buttons */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            width: { xs: '100%', sm: 'auto' }
          }}>
            {/* Toggle View Button for all screen sizes */}
            <Button
              variant="outlined"
              startIcon={isBlurred ? <VisibilityIcon /> : <VisibilityOffIcon />}
              onClick={handleViewToggle}
              fullWidth={isMobile}
              sx={{
                borderColor: '#6d9eeb',
                color: '#6d9eeb',
                py: 1.2,
                minWidth: '140px',
                '&:hover': {
                  borderColor: '#4a7cc3',
                  backgroundColor: 'rgba(109, 158, 235, 0.1)'
                }
              }}
            >
              {isBlurred ? 'View Resume' : 'Hide Resume'}
            </Button>
            
            {/* Open in New Tab - Additional option for mobile */}
            {isMobile && (
              <Button
                variant="outlined"
                startIcon={<OpenInNewIcon />}
                onClick={handleOpenInNewTab}
                fullWidth
                sx={{
                  borderColor: '#4ecca3',
                  color: '#4ecca3',
                  py: 1.2,
                  '&:hover': {
                    borderColor: '#3c9d7c',
                    backgroundColor: 'rgba(78, 204, 163, 0.1)'
                  }
                }}
              >
                Open in New Tab
              </Button>
            )}
            
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              fullWidth={isMobile}
              sx={{
                background: 'linear-gradient(90deg, #6d9eeb 0%, #4a7cc3 100%)',
                py: 1.2,
                minWidth: '140px',
                '&:hover': {
                  background: 'linear-gradient(90deg, #5a8ad6 0%, #3b6db4 100%)',
                }
              }}
            >
              Download PDF
            </Button>
          </Box>
        </Box>

        {/* Resume Content Container */}
        <Box
          sx={{
            position: 'relative',
            backgroundColor: 'rgba(255,255,255,0.02)',
            borderRadius: '12px',
            overflow: 'hidden',
            // Responsive heights based on screen size
            height: { 
              xs: '500px',   // Mobile
              sm: '600px',   // Small tablets
              md: '700px',   // Medium screens
              lg: '800px',   // Large screens
              xl: '900px'    // Extra large screens
            }
          }}
        >
          {/* Overlay to prevent interaction when blurred */}
          {isBlurred && (
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.2)',
                }
              }}
              onClick={handleViewToggle}
              onContextMenu={(e) => e.preventDefault()}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'rgba(255,255,255,0.8)',
                  textAlign: 'center',
                  px: 2,
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                {isMobile ? 'Tap to view resume' : 'Click to view resume'}
              </Typography>
            </Box>
          )}

          {/* PDF Content */}
          <Box
            sx={{
              filter: isBlurred ? 'blur(12px)' : 'none',
              transition: 'filter 0.3s ease',
              height: '100%',
              width: '100%',
              userSelect: isBlurred ? 'none' : 'auto'
            }}
          >
            {/* Full PDF embed for all screen sizes */}
            <iframe
              src="/Colin_Buchheit_Resume.pdf#toolbar=0&navpanes=0&scrollbar=1&zoom=FitH"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                backgroundColor: '#ffffff'
              }}
              title="Colin Buchheit Resume"
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

const ExperiencePage: React.FC = () => {
  // Skill tags for easy reuse
  const skillChip = (label: string) => (
    <Chip 
      label={label} 
      size="small"
      sx={{ 
        bgcolor: 'rgba(109, 158, 235, 0.1)', 
        color: '#ffffff',
        m: 0.5
      }} 
    />
  );
  
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
        pt: { xs: 8, md: 12 },
        pb: 8,
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Box sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="overline" 
              color="primary"
              sx={{ letterSpacing: 2, fontWeight: 500 }}
            >
              PROFESSIONAL JOURNEY
            </Typography>
            <Typography 
              variant="h3" 
              color="primary" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Work Experience
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '800px',
                mx: { xs: 'auto', md: 0 }
              }}
            >
              A showcase of my professional experience, projects, and technical contributions.
            </Typography>
          </Box>
        </motion.div>
        
        {/* Experience Timeline */}
        <Grid container spacing={4}>
{/* MX Holdings Internship */}
<Grid item xs={12}>
  <motion.div
    initial="hidden"
    animate="visible"
    variants={slideInRight}
  >
    <Paper 
      elevation={0}
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #1e1e1e 0%, #262626 100%)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      {/* Header with gradient */}
      <Box 
        sx={{ 
          p: 0.5, 
          background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)'
        }}
      />
      
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WorkIcon sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
              <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                MX Holdings
              </Typography>
            </Box>
            
            <Typography variant="h5" sx={{ mb: 2, color: '#ffffff' }}>
              Enterprise Software Developer Internship
            </Typography>
            
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 3, 
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500
              }}
            >
              Summer 2024 - December 2024
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3,
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.8
              }}
            >
              During my internship at MX Holdings, I engaged in various challenging projects 
              that significantly advanced my technical skills in software development and IT 
              infrastructure management. Working within enterprise environments provided valuable 
              experience with production-grade systems and development methodologies.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box 
                component="img"
                src="/images/InternPresentation.jpg"
                alt="Intern Presentation"
                sx={{ 
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        {/* AI Chat Project */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            color="primary" 
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            <MemoryIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            AI-Powered Inventory & Order Management System
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 2, 
              fontWeight: 500,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Developed an innovative conversational AI system allowing customers to examine inventory, 
            check pricing, and place orders for aluminum products through a natural language interface.
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography 
              variant="subtitle2" 
              color="primary"
              sx={{ mb: 1 }}
            >
              Technical Highlights:
            </Typography>
            
            <Box 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.03)',
                p: 2,
                borderRadius: '8px',
                borderLeft: '4px solid #6d9eeb'
              }}
            >
              <Typography variant="body2" sx={{ mb: 1.5, color: '#ffffff' }}>
                • <strong>ML Intent Recognition:</strong> Trained and implemented a custom machine learning model 
                to identify user intents and extract key parameters from natural language queries.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, color: '#ffffff' }}>
                • <strong>GPT API Integration:</strong> Integrated OpenAI's GPT models to enhance conversational 
                capabilities, providing natural and contextually relevant responses to customer inquiries.
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff' }}>
                • <strong>Multi-Data Stream Architecture:</strong> Designed and implemented a system that connects 
                multiple data sources including real-time pricing, inventory management, order processing, and user 
                authentication services into a unified chat interface.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
            {skillChip('Machine Learning')}
            {skillChip('OpenAI API')}
            {skillChip('Intent Recognition')}
            {skillChip('NLP')}
            {skillChip('Full-Stack Development')}
            {skillChip('API Integration')}
          </Box>
        </Box>
        
        {/* Project 1 */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            color="primary" 
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Internal System Diagnostics Dashboard
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 2, 
              fontWeight: 500,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Developed a robust internal diagnostics dashboard providing a centralized platform 
            to monitor and diagnose recurring and critical errors across all enterprise applications.
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography 
              variant="subtitle2" 
              color="primary"
              sx={{ mb: 1 }}
            >
              Technical Highlights:
            </Typography>
            
            <Box 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.03)',
                p: 2,
                borderRadius: '8px',
                borderLeft: '4px solid #6d9eeb'
              }}
            >
              <Typography variant="body2" sx={{ mb: 1.5, color: '#ffffff' }}>
                • <strong>API Development:</strong> Engineered APIs using C# in the back-end to efficiently 
                aggregate and retrieve error data from multiple data sources.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, color: '#ffffff' }}>
                • <strong>Web Dashboard:</strong> Leveraged React.js and Material-UI libraries to design 
                a dynamic and user-friendly interface, offering real-time insights and analytics on system performance.
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff' }}>
                • <strong>State Management:</strong> Utilized Redux for scalable state management, 
                ensuring seamless data flow and responsiveness within the application.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
            {skillChip('C#')}
            {skillChip('React')}
            {skillChip('Redux')}
            {skillChip('Material-UI')}
            {skillChip('API Development')}
          </Box>
        </Box>
        
        {/* Project 2 */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            color="primary" 
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            <StorageIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Market Pricing Application
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 2, 
              fontWeight: 500,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Developed an advanced software application for detailed analysis and visualization 
            of metal commodity prices, facilitating strategic market insights.
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography 
              variant="subtitle2" 
              color="primary"
              sx={{ mb: 1 }}
            >
              Technical Highlights:
            </Typography>
            
            <Box 
              sx={{ 
                backgroundColor: 'rgba(255,255,255,0.03)',
                p: 2,
                borderRadius: '8px',
                borderLeft: '4px solid #4ecca3'
              }}
            >
              <Typography variant="body2" sx={{ mb: 1.5, color: '#ffffff' }}>
                • <strong>Data Visualization:</strong> Implemented interactive charts enabling users to explore 
                daily, monthly, and quarterly price trends.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, color: '#ffffff' }}>
                • <strong>Backend Integration:</strong> Created backend services with Node.js that handled 
                complex data queries and transformations, providing accurate pricing information.
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff' }}>
                • <strong>Automation & Deployment:</strong> Deployed the application using YAML pipeline scripts 
                on Azure DevOps, ensuring consistent and automated builds and deployments.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
            {skillChip('Node.js')}
            {skillChip('Data Visualization')}
            {skillChip('Azure DevOps')}
            {skillChip('YAML')}
            {skillChip('Material-UI')}
          </Box>
        </Box>
        
        {/* Additional Contributions */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            color="primary" 
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            <BuildIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Additional Contributions
          </Typography>
          
          <Box 
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.03)',
              p: 2,
              borderRadius: '8px',
              borderLeft: '4px solid #6d9eeb'
            }}
          >
            <Typography variant="body2" sx={{ mb: 1.5, color: '#ffffff' }}>
              • <strong>Pipeline Deployment:</strong> Developed and optimized YAML-based CI/CD pipelines on Azure DevOps, 
              facilitating automated testing and deployment workflows across multiple environments.
            </Typography>
            <Typography variant="body2" sx={{ color: '#ffffff' }}>
              • <strong>NPM Package Creation:</strong> Created reusable npm packages to standardize internal templates 
              and streamline development processes across different projects, enhancing code reusability and consistency.
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
            {skillChip('CI/CD')}
            {skillChip('YAML')}
            {skillChip('NPM')}
            {skillChip('Azure DevOps')}
          </Box>
        </Box>
        
        {/* Images Section - Fixed layout with better styling */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Box
                component="img"
                src="/images/MoultonTrip.jpg"
                alt="Moulton Trip"
                sx={{ 
                  width: '300%', 
                  height: { xs: 'auto', md: '350px' },
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
            </motion.div>
          </Grid>
          
        </Grid>
        
        {/* Conclusion */}
        <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(109, 158, 235, 0.05)', borderRadius: '8px' }}>
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
            This internship provided a comprehensive experience in full-stack development, AI implementation, and IT infrastructure 
            management within a fast-paced enterprise environment. I not only honed my technical skills but also 
            gained valuable insights into the importance of scalable software design, AI integration in business processes, 
            efficient pipeline management, and the critical role of IT infrastructure in supporting business operations.
          </Typography>
        </Box>
      </Box>
    </Paper>
  </motion.div>
</Grid>
          {/* Mizzou IT Capstone */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #1e1e1e 0%, #262626 100%)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {/* Header with gradient */}
                <Box 
                  sx={{ 
                    p: 0.5, 
                    background: 'linear-gradient(90deg, #4ecca3 0%, #6d9eeb 100%)'
                  }}
                />
                
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <StorageIcon sx={{ color: '#4ecca3', mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                      Mizzou Engineering IT Capstone Project
                    </Typography>
                  </Box>
                  
                  <Typography variant="h5" sx={{ mb: 2, color: '#ffffff' }}>
                    DiscordAI Assistant - Featured Capstone Project
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3,
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8
                    }}
                  >
                    Our team was selected to represent the Mizzou Engineering IT department's capstone for the 
                    Fall 2024 semester, earning recognition in a Mizzou Engineering article for developing an educational AI 
                    Discord bot that demonstrates advanced conversation management and context-awareness.
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Link 
                      href="https://engineering.missouri.edu/2024/information-technology-students-develop-an-educational-ai-bot-for-capstone-project/" 
                      target="_blank"
                      sx={{ 
                        color: '#4ecca3',
                        display: 'inline-block',
                        fontWeight: 500,
                        py: 1,
                        px: 2,
                        borderRadius: '4px',
                        backgroundColor: 'rgba(78, 204, 163, 0.1)',
                        textDecoration: 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(78, 204, 163, 0.2)',
                        }
                      }}
                    >
                      Read the Mizzou Engineering Article
                    </Link>
                  </Box>
                  
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={5}>
                      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                        <Box
                          component="img"
                          src="/images/CapstoneTeam.jpg"
                          alt="Capstone Team Members"
                          sx={{ 
                            width: '100%', 
                            height: 'auto', 
                            borderRadius: '12px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.1)'
                          }}
                        />
                      </motion.div>
                    </Grid>
                    
                    <Grid item xs={12} md={7}>
                      <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                        Project Overview
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: 1.8,
                          mb: 2
                        }}
                      >
                        Our team developed a conversational AI Discord bot that maintains context-aware conversations, 
                        stores interaction history, and uses the latest OpenAI technologies. The system was built using a 
                        microservice architecture with Docker containerization, enabling seamless deployment and scalability.
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                        {skillChip('TypeScript')}
                        {skillChip('Docker')}
                        {skillChip('MongoDB')}
                        {skillChip('OpenAI API')}
                        {skillChip('Discord.js')}
                        {skillChip('Express.js')}
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Box sx={{ my: 4 }}>
                    <Typography 
                      variant="h5" 
                      color="primary" 
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      <CodeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                      Technical Implementation & Features
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ 
                          bgcolor: 'rgba(255,255,255,0.03)',
                          p: 3,
                          borderRadius: '12px',
                          borderLeft: '4px solid #6d9eeb',
                          height: '100%'
                        }}>
                          <Typography variant="h6" gutterBottom sx={{ color: '#6d9eeb' }}>
                            Architecture Design
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
                            • <strong>Containerized Microservices:</strong> Discord bot, API server, and MongoDB database in separate Docker containers
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
                            • <strong>RESTful API:</strong> Express.js server with endpoint-based communication between services
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • <strong>Persistence Layer:</strong> MongoDB with structured conversation history, ensuring context is maintained across conversations
                          </Typography>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <Box sx={{ 
                          bgcolor: 'rgba(255,255,255,0.03)',
                          p: 3,
                          borderRadius: '12px',
                          borderLeft: '4px solid #4ecca3',
                          height: '100%'
                        }}>
                          <Typography variant="h6" gutterBottom sx={{ color: '#4ecca3' }}>
                            AI Implementation
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
                            • <strong>OpenAI Integration:</strong> Leveraging the Assistant API for more coherent, context-aware responses
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
                            • <strong>Conversation Memory:</strong> Temporal storage of conversation history, enabling the AI to recall past interactions
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#ffffff' }}>
                            • <strong>Rate Limiting & Error Handling:</strong> Robust system protections to ensure stability and prevent API abuse
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  
                  <Box 
                    sx={{ 
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 4
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                      <Box
                        component="img"
                        src="/images/DiscordAILogo.png"
                        alt="DiscordAI Assistant Logo"
                        sx={{ 
                          width: '100%', 
                          maxWidth: '680px',
                          height: 'auto', 
                          borderRadius: '12px',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      />
                    </motion.div>
                  </Box>
                  
                  <Box 
                    sx={{ 
                      mt: 4, 
                      p: 3, 
                      backgroundColor: 'rgba(78, 204, 163, 0.05)', 
                      borderRadius: '8px',
                      border: '1px solid rgba(78, 204, 163, 0.1)'
                    }}
                  >
                    <Typography variant="h6" color="primary" gutterBottom>
                      Project Outcomes:
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ color: '#ffffff' }}>
                      <ul style={{ paddingLeft: '1.5rem' }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                          Selected as the featured IT capstone project for Fall 2024, demonstrating technical excellence and real-world applicability
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          Featured in a Mizzou Engineering article highlighting the project's educational value and innovative approach to AI integration
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                          Successfully implemented context-aware AI conversations with memory capabilities, providing a superior user experience compared to standard chatbots
                        </li>
                        <li>
                          Developed a fully containerized, production-ready application with enterprise-level architecture patterns and best practices
                        </li>
                      </ul>
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Mizzou Hackathon */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #1e1e1e 0%, #262626 100%)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {/* Header with gradient */}
                <Box 
                  sx={{ 
                    p: 0.5, 
                    background: 'linear-gradient(90deg, #4ecca3 0%, #6d9eeb 100%)'
                  }}
                />
                
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TimelineIcon sx={{ color: '#4ecca3', mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                      TigerHacks 2023
                    </Typography>
                  </Box>
                  
                  <Typography variant="h5" sx={{ mb: 2, color: '#ffffff' }}>
                    Rapid Reels Project - First Place Winner
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 3,
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8
                    }}
                  >
                    As part of a four-person team, I developed "Rapid Reels," an innovative application that automates the creation of short-form video content. Our solution was awarded first place in the developer category at TigerHacks 2023, the University of Missouri's annual hackathon, competing against 33 other projects.
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Link 
                      href="https://devpost.com/software/rapidreels" 
                      target="_blank"
                      sx={{ 
                        color: '#4ecca3',
                        display: 'inline-block',
                        fontWeight: 500,
                        py: 1,
                        px: 2,
                        borderRadius: '4px',
                        backgroundColor: 'rgba(78, 204, 163, 0.1)',
                        textDecoration: 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(78, 204, 163, 0.2)',
                        }
                      }}
                    >
                      View Project on Devpost
                    </Link>
                  </Box>
                  
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={6}>
                      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                        <Box
                          component="img"
                          src="/images/HomePage.png"
                          alt="Rapid Reels Home Page"
                          sx={{ 
                            width: '100%', 
                            height: 'auto', 
                            borderRadius: '12px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.1)'
                          }}
                        />
                      </motion.div>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                        Project Overview
                      </Typography>
                      
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: 1.8
                        }}
                      >
                        Rapid Reels addresses the challenges content creators face with short-form video content on platforms like TikTok, Instagram Reels, and YouTube Shorts. Our solution automates the process of identifying and trimming the most engaging parts of longer videos by analyzing viewer engagement patterns - specifically the segments users rewatch the most.
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                        <Chip label="Python" size="small" sx={{ bgcolor: 'rgba(78, 204, 163, 0.1)', color: '#ffffff', m: 0.5 }} />
                        <Chip label="Flask" size="small" sx={{ bgcolor: 'rgba(78, 204, 163, 0.1)', color: '#ffffff', m: 0.5 }} />
                        <Chip label="JavaScript" size="small" sx={{ bgcolor: 'rgba(78, 204, 163, 0.1)', color: '#ffffff', m: 0.5 }} />
                        <Chip label="Signal Processing" size="small" sx={{ bgcolor: 'rgba(78, 204, 163, 0.1)', color: '#ffffff', m: 0.5 }} />
                        <Chip label="Data Analysis" size="small" sx={{ bgcolor: 'rgba(78, 204, 163, 0.1)', color: '#ffffff', m: 0.5 }} />
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                      Technical Implementation
                    </Typography>
                    
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: 1.8
                          }}
                        >
                          Our data processing pipeline involved downloading video and replay rate heatmaps, applying a signal processing algorithm to find maxima within the heatmap, and generating clip boundaries to create highlight reels. We utilized Python with libraries like NumPy, Pandas, and SciPy for data analysis, MoviePy for video manipulation, and Flask for the backend server.
                        </Typography>
                        
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: 'rgba(255,255,255,0.9)',
                            lineHeight: 1.8,
                            mt: 2
                          }}
                        >
                          My contributions included assisting in the core algorithms for analyzing viewer engagement patterns, assisted in implementing the signal processing components to identify optimal clip boundaries, and collaborating on both backend and frontend development.
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                          <Box
                            component="img"
                            src="/images/Histogram1.png"
                            alt="Signal Processing Visualization"
                            sx={{ 
                              width: '100%', 
                              height: 'auto', 
                              borderRadius: '12px',
                              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                              border: '1px solid rgba(255,255,255,0.1)'
                            }}
                          />
                        </motion.div>
                      </Grid>
                    </Grid>
                  </Box>
                  
                  <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6}>
                      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                        <Box
                          component="img"
                          src="/images/Histogram2.png"
                          alt="Clip Boundary Identification"
                          sx={{ 
                            width: '100%', 
                            height: 'auto', 
                            borderRadius: '12px',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255,255,255,0.1)'
                          }}
                        />
                      </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box
                        sx={{ 
                          mt: { xs: 2, sm: 0 }, 
                          p: 3, 
                          backgroundColor: 'rgba(78, 204, 163, 0.05)', 
                          borderRadius: '8px',
                          border: '1px solid rgba(78, 204, 163, 0.1)',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography variant="h6" color="primary" gutterBottom>
                          Data Processing Steps:
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ color: '#ffffff' }}>
                          <ol style={{ paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>
                              Download the data: video and replay rate heatmap from YouTube.
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                              Apply signal processing algorithm to identify engagement maxima and create clip boundaries.
                            </li>
                            <li>
                              Extract and save video segments based on identified high-engagement points.
                            </li>
                          </ol>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Box 
                    sx={{ 
                      mt: 4, 
                      p: 3, 
                      backgroundColor: 'rgba(78, 204, 163, 0.05)', 
                      borderRadius: '8px',
                      border: '1px solid rgba(78, 204, 163, 0.1)'
                    }}
                  >
                    <Typography variant="h6" color="primary" gutterBottom>
                      Achievement:
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#ffffff' }}>
                      Winning first place validated our innovative approach and technical implementation. The judges were particularly impressed by our use of data science techniques to solve a real-world content creation challenge, as well as the complete end-to-end implementation achieved during the hackathon's limited timeframe.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

{/* MaiQuery Project - COMPLETE FINAL VERSION */}
<Grid item xs={12}>
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={slideInRight}
  >
    <Paper 
      elevation={0}
      sx={{ 
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #1e1e1e 0%, #262626 100%)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        border: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      {/* Header with gradient */}
      <Box 
        sx={{ 
          p: 0.5, 
          background: 'linear-gradient(90deg, #4ecca3 0%, #6d9eeb 100%)'
        }}
      />
      
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <MemoryIcon sx={{ color: '#4ecca3', mr: 2, fontSize: '2rem' }} />
          <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
            MaiQuery - AI Database Platform
          </Typography>
        </Box>
        
        <Typography variant="h5" sx={{ mb: 2, color: '#ffffff' }}>
          Multi-Agent AI Database Query & Analysis System
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 3,
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.8
          }}
        >
          Developed an AI-powered platform that allows users to query multiple database types using natural language. 
          The system employs specialized AI agents for query generation, validation, visualization, and security, 
          supporting 8+ database types including PostgreSQL, MongoDB, MySQL, and more.
        </Typography>
        
        {/* Main Dashboard Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 5 }}>
          <Grid item xs={12} md={6}>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Box
                component="img"
                src="/images/MaiQuery_Dashboard.png"
                alt="MaiQuery Dashboard Interface"
                sx={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              />
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              color="primary" 
              gutterBottom 
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Natural Language Database Queries
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.7,
                mb: 2.5,
                fontSize: '1rem'
              }}
            >
              Users can ask questions about their data in plain English, and the AI system automatically 
              generates optimized queries, executes them safely, and provides both raw results and 
              intelligent visualizations.
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.7,
                mb: 3,
                fontSize: '1rem'
              }}
            >
              The dashboard provides real-time database monitoring, connection management, and 
              comprehensive query history for enterprise-grade database operations.
            </Typography>

            {/* Key Benefits List */}
            <Box sx={{ 
              backgroundColor: 'rgba(78, 204, 163, 0.05)',
              border: '1px solid rgba(78, 204, 163, 0.1)',
              borderRadius: '8px',
              p: 2.5,
              mb: 3
            }}>
              <Typography variant="subtitle2" sx={{ color: '#4ecca3', fontWeight: 600, mb: 1.5 }}>
                Key Capabilities:
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff', mb: 1 }}>
                • Natural language to SQL/NoSQL conversion
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff', mb: 1 }}>
                • Multi-database type support (8+ databases)
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff', mb: 1 }}>
                • Intelligent query validation and security
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff' }}>
                • Auto-generated data visualizations
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        {/* Platform Features - Reorganized Layout */}
        <Box sx={{ mb: 5 }}>
          <Typography 
            variant="h5" 
            color="primary" 
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Platform Features & Database Management
          </Typography>
          
          {/* Schema Discovery - Full Width for Better Visibility */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
              Intelligent Schema Discovery & Analysis
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3, lineHeight: 1.7, maxWidth: '800px' }}>
              Automatically analyzes database structures across different types, providing intelligent insights 
              and suggestions for optimal query generation. The system maps relationships, identifies data types, 
              and creates comprehensive schema visualizations.
            </Typography>
            
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
              <Box
                component="img"
                src="/images/MaiQuery_Schema.png"
                alt="Database Schema Analysis and Discovery Interface"
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(0,0,0,0.2)'
                }}
              />
            </motion.div>
          </Box>
          
          {/* Connection Monitoring - Full Width for Better Visibility */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
              Real-Time Connection Monitoring
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3, lineHeight: 1.7, maxWidth: '800px' }}>
              Monitor and manage connections across different database types with real-time health status, 
              performance metrics, and automated diagnostics. Track connection uptime, query performance, 
              and system resources across your entire database infrastructure.
            </Typography>
            
            <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
              <Box
                component="img"
                src="/images/MaiQuery_Connections.png"
                alt="Real-time Database Connection Monitoring Dashboard"
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backgroundColor: 'rgba(0,0,0,0.2)'
                }}
              />
            </motion.div>
          </Box>
          
          {/* Connection Setup & Technical Innovation - Side by Side Layout */}
          <Grid container spacing={4} alignItems="flex-start">
            {/* Left Side - Connection Setup */}
            <Grid item xs={12} md={5}>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 2 }}>
                Universal Database Connection Setup
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3, lineHeight: 1.7 }}>
                Streamlined setup wizard supporting multiple database types with intelligent configuration validation 
                and automated parameter detection across SQL and NoSQL databases.
              </Typography>
              
              <Box sx={{ 
                backgroundColor: 'rgba(109, 158, 235, 0.05)',
                border: '1px solid rgba(109, 158, 235, 0.1)',
                borderRadius: '8px',
                p: 2.5,
                mb: 3
              }}>
                <Typography variant="body2" sx={{ color: '#ffffff', mb: 1 }}>
                  • <strong>8+ Database Types:</strong> PostgreSQL, MongoDB, MySQL, Firebase, and more
                </Typography>
                <Typography variant="body2" sx={{ color: '#ffffff', mb: 1 }}>
                  • <strong>Driver Support:</strong> Individual Drivers for database type configs and connections
                </Typography>
                <Typography variant="body2" sx={{ color: '#ffffff', mb: 1 }}>
                  • <strong>Smart Validation:</strong> Automatic connection testing and verification
                </Typography>
                <Typography variant="body2" sx={{ color: '#ffffff', mb: 1 }}>
                  • <strong>Secure Setup:</strong> Encrypted credentials and connection pooling
                </Typography>
                <Typography variant="body2" sx={{ color: '#ffffff' }}>
                  • <strong>Universal Interface:</strong> Consistent setup across SQL and NoSQL databases
                </Typography>
              </Box>
              
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Box
                  component="img"
                  src="/images/MaiQuery_AddConnection.png"
                  alt="Universal Database Connection Setup Wizard"
                  sx={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                />
              </motion.div>
            </Grid>
            
            {/* Right Side - Technical Innovation Boxes Stacked */}
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h5" 
                color="primary" 
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Technical Innovation & Implementation
              </Typography>
              
              <Grid container spacing={3}>
                {/* AI Architecture - Top */}
                <Grid item xs={12}>
                  <Box sx={{ 
                    backgroundColor: 'rgba(109, 158, 235, 0.05)',
                    border: '1px solid rgba(109, 158, 235, 0.1)',
                    borderRadius: '12px',
                    p: 3
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <MemoryIcon sx={{ color: '#6d9eeb', mr: 1.5, fontSize: '1.5rem' }} />
                      <Typography variant="h6" sx={{ color: '#6d9eeb', fontWeight: 600 }}>
                        Advanced AI Orchestration
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#ffffff', mb: 2, lineHeight: 1.6 }}>
                      Built using <strong>CrewAI framework</strong> for sophisticated multi-agent coordination, 
                      allowing specialized AI agents to work together seamlessly for complex database operations.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      Each agent has a specific role: schema analysis, query generation, validation, and visualization, 
                      creating a robust pipeline that handles enterprise-level database complexity.
                    </Typography>
                  </Box>
                </Grid>
                
                {/* Security & Performance - Bottom */}
                <Grid item xs={12}>
                  <Box sx={{ 
                    backgroundColor: 'rgba(78, 204, 163, 0.05)',
                    border: '1px solid rgba(78, 204, 163, 0.1)',
                    borderRadius: '12px',
                    p: 3
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SecurityIcon sx={{ color: '#4ecca3', mr: 1.5, fontSize: '1.5rem' }} />
                      <Typography variant="h6" sx={{ color: '#4ecca3', fontWeight: 600 }}>
                        Enterprise Security & Performance
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#ffffff', mb: 2, lineHeight: 1.6 }}>
                      Implements <strong>multi-layered security</strong> with HMAC authentication, comprehensive 
                      input validation, and SQL injection prevention to ensure safe database operations.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      <strong>Redis caching</strong> and connection pooling optimize performance, while rate limiting 
                      and audit trails provide enterprise-grade monitoring and control.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              
              {/* Key Features & Architecture - Nested under Technical Innovation */}
              <Grid container spacing={3} sx={{ mt: 3 }}>
                {/* Multi-Agent AI System */}
                <Grid item xs={12}>
                  <Box sx={{ 
                    backgroundColor: 'rgba(109, 158, 235, 0.05)',
                    border: '1px solid rgba(109, 158, 235, 0.1)',
                    borderRadius: '12px',
                    p: 3
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AutoAwesomeIcon sx={{ color: '#6d9eeb', mr: 1.5, fontSize: '1.5rem' }} />
                      <Typography variant="h6" sx={{ color: '#6d9eeb', fontWeight: 600 }}>
                        Multi-Agent AI System
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#ffffff', mb: 1.5, lineHeight: 1.6 }}>
                      • <strong>Schema Agent:</strong> Automatically analyzes database structures and identifies relationships
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff', mb: 1.5, lineHeight: 1.6 }}>
                      • <strong>Query Agent:</strong> Converts natural language to optimized SQL/NoSQL using GPT-4
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff', mb: 1.5, lineHeight: 1.6 }}>
                      • <strong>Validation Agent:</strong> Ensures query safety and prevents SQL injection attacks
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      • <strong>Visualization Agent:</strong> Auto-generates interactive charts and data insights
                    </Typography>
                  </Box>
                </Grid>
                
                {/* Universal Database Support */}
                <Grid item xs={12}>
                  <Box sx={{ 
                    backgroundColor: 'rgba(78, 204, 163, 0.05)',
                    border: '1px solid rgba(78, 204, 163, 0.1)',
                    borderRadius: '12px',
                    p: 3
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <StorageIcon sx={{ color: '#4ecca3', mr: 1.5, fontSize: '1.5rem' }} />
                      <Typography variant="h6" sx={{ color: '#4ecca3', fontWeight: 600 }}>
                        Universal Database Support & Performance
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#ffffff', mb: 1.5, lineHeight: 1.6 }}>
                      <strong>SQL Databases:</strong> PostgreSQL, MySQL, SQLite, MS SQL Server with optimized query generation
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff', mb: 1.5, lineHeight: 1.6 }}>
                      <strong>NoSQL Databases:</strong> MongoDB, Firebase, CouchDB, DynamoDB with intelligent document querying
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                      <strong>Enterprise Features:</strong> HMAC authentication, Redis caching, connection pooling, and comprehensive audit trails
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        {/* Project Impact */}
        <Box 
          sx={{ 
            p: 3, 
            backgroundColor: 'rgba(78, 204, 163, 0.05)', 
            borderRadius: '8px',
            border: '1px solid rgba(78, 204, 163, 0.1)'
          }}
        >
          <Typography variant="body1" sx={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
            This platform democratizes database access by allowing non-technical users to query complex databases using natural language, 
            while maintaining enterprise-grade security and performance standards. The multi-agent architecture showcases advanced AI 
            orchestration and demonstrates practical implementation of large language models in production environments.
          </Typography>
        </Box>
      </Box>
    </Paper>
  </motion.div>
</Grid>

      {/* Resume Section */}
          <Grid item xs={12}>
            <motion.div
              id="resume"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
              <SecureResumeSection />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ExperiencePage;