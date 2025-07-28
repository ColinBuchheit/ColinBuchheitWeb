import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  IconButton, 
  Button,
  Paper,
  Chip
} from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Code as CodeIcon, 
  School as SchoolIcon,
  WorkOutline as WorkIcon,
  Storage as StorageIcon,
  Memory as MemoryIcon,
  AutoAwesome as AutoAwesomeIcon,
  VerifiedUser as VerifiedUserIcon,
  Security as SecurityIcon,
  Computer as ComputerIcon,
  OpenInNew as OpenInNewIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home: React.FC = () => {
  // Core Technology Stack - Aligned with defined specifications
  const technologies = [
    // Programming & Development
    { name: "C#/.NET", group: "programming" },
    { name: "Python", group: "programming" },
    { name: "TypeScript", group: "programming" },
    { name: "JavaScript", group: "programming" },
    
    // Frontend & Full-Stack
    { name: "React/Redux", group: "frontend" },
    { name: "Node.js", group: "frontend" },
    { name: "Express.js", group: "frontend" },
    
    // Azure AI & Cloud Specialization (AI-102 Certified)
    { 
      name: "Azure AI Services", 
      group: "ai", 
      tooltip: "Cognitive Services, OpenAI, Computer Vision" 
    },
    { 
      name: "Azure DevOps", 
      group: "cloud", 
      tooltip: "CI/CD pipelines, deployment automation" 
    },
    { 
      name: "Data Factory", 
      group: "cloud", 
      tooltip: "ETL pipelines and data integration" 
    },
    { 
      name: "Kubernetes", 
      group: "cloud", 
      tooltip: "Container orchestration and scaling" 
    },
    { 
      name: "Machine Learning", 
      group: "ai", 
      tooltip: "Model training and deployment" 
    },
    { 
      name: "Process Automation", 
      group: "ai", 
      tooltip: "Intelligent workflow automation" 
    },
    
    // Enterprise Development
    { name: "Full-Stack Architecture", group: "enterprise" },
    { name: "API Design", group: "enterprise" },
    { name: "Database Systems", group: "enterprise" },
    { name: "CI/CD Pipelines", group: "enterprise" }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
        pt: { xs: 4, md: 10 },
        pb: 8
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" sx={{ mb: 6 }}>
          {/* Profile Image */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box
                sx={{
                  width: { xs: '220px', md: '380px' },
                  height: { xs: '260px', md: '510px' },
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '75% / 80%',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                }}
              >
                <Box
                  component="img"
                  src="/images/Headshot.jpg"
                  alt="Colin Buchheit"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 60%',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 2,
                  background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Colin Buchheit
              </Typography>
              
              <Typography 
                variant="h5" 
                color="textSecondary" 
                gutterBottom
                sx={{ 
                  mb: 3,
                  fontWeight: 400,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Software Developer specializing in AI & Full-Stack Engineering
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3, 
                  maxWidth: '600px',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  textAlign: { xs: 'center', md: 'left' },
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                Recent University of Missouri graduate with a B.S. in Information Technology, specializing in software development and AI/ML implementation. I bring hands-on experience in full-stack development, AI agent networks, machine learning model training, and enterprise IT infrastructure — all driven by a passion for building impactful, scalable technology solutions.
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                mb: 4,
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
                  <IconButton 
                    href="https://github.com/ColinBuchheit" 
                    target="_blank"
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      padding: 1.5
                    }}
                  >
                    <GitHub sx={{ color: '#ffffff', fontSize: '1.6rem' }} />
                  </IconButton>
                </motion.div>
                
                <motion.div whileHover={{ y: -5 }} whileTap={{ y: 0 }}>
                  <IconButton 
                    href="https://www.linkedin.com/in/colin-buchheit-02a3aa22b/" 
                    target="_blank"
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      padding: 1.5
                    }}
                  >
                    <LinkedIn sx={{ color: '#ffffff', fontSize: '1.6rem' }} />
                  </IconButton>
                </motion.div>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/experience"
                    size="large"
                    sx={{
                      py: 1.2,
                      px: 3,
                      borderRadius: '50px',
                      background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #5a8ad6 0%, #3db390 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(109, 158, 235, 0.4)',
                      }
                    }}
                  >
                    View My Work
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/experience#resume"
                    size="large"
                    sx={{
                      py: 1.2,
                      px: 3,
                      borderRadius: '50px',
                      background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #5a8ad6 0%, #3db390 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(109, 158, 235, 0.4)',
                      }
                    }}
                  >
                    Resume
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/contact"
                    size="large"
                    sx={{
                      py: 1.2,
                      px: 3,
                      borderRadius: '50px',
                      background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #5a8ad6 0%, #3db390 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(109, 158, 235, 0.4)',
                      }
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        {/* Core Technologies Section - Updated to match specifications */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h6" 
            color="textSecondary" 
            gutterBottom
            sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 1 }}
          >
            Core Technology Stack
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: { xs: 'center', md: 'left' }, 
              mb: 3, 
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '700px',
              mx: { xs: 'auto', md: 0 }
            }}
          >
            
          </Typography>
          
          {/* Programming & Development */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                color: '#6d9eeb', 
                mb: 2 
              }}
            >
              <CodeIcon sx={{ mr: 1 }} /> Programming & Development
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1.5
              }}
            >
              {technologies
                .filter(tech => tech.group === 'programming' || tech.group === 'frontend')
                .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Chip
                    label={tech.name}
                    sx={{
                      backgroundColor: 'rgba(109, 158, 235, 0.15)',
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      py: 2.5,
                      '&:hover': {
                        backgroundColor: 'rgba(109, 158, 235, 0.25)',
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
          
          {/* Azure AI & Cloud Specialization */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                color: '#4ecca3', 
                mb: 2 
              }}
            >
              <MemoryIcon sx={{ mr: 1 }} /> Azure AI & Cloud Specialization
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1.5
              }}
            >
              {technologies
                .filter(tech => tech.group === 'ai' || tech.group === 'cloud')
                .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Chip
                    label={tech.name}
                    title={tech.tooltip}
                    sx={{
                      backgroundColor: 'rgba(78, 204, 163, 0.15)',
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      py: 2.5,
                      '&:hover': {
                        backgroundColor: 'rgba(78, 204, 163, 0.25)',
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
          
          {/* Enterprise Development */}
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                color: '#6d9eeb', 
                mb: 2 
              }}
            >
              <StorageIcon sx={{ mr: 1 }} /> Enterprise Development
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1.5
              }}
            >
              {technologies
                .filter(tech => tech.group === 'enterprise')
                .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Chip
                    label={tech.name}
                    sx={{
                      backgroundColor: 'rgba(109, 158, 235, 0.15)',
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      py: 2.5,
                      '&:hover': {
                        backgroundColor: 'rgba(109, 158, 235, 0.25)',
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </Box>
        
        {/* Professional Certifications Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ marginBottom: '2rem' }}
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
            
            <Box sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                gutterBottom 
                color="primary"
                sx={{ 
                  fontWeight: 600,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  mb: 4,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '60px',
                    height: '4px',
                    bottom: '-8px',
                    left: 0,
                    backgroundColor: '#4ecca3',
                    borderRadius: '2px'
                  }
                }}
              >
                <VerifiedUserIcon sx={{ mr: 2, fontSize: '2rem' }} />
                Professional Certifications
              </Typography>
              
              <Grid container spacing={3}>
                {/* Azure AI Engineer Associate */}
                <Grid item xs={12} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Box 
                      component="a"
                      href="https://learn.microsoft.com/api/credentials/share/en-us/ColinBuchheit-2794/DAC524C995B7F868?sharingId=1B033D14A58DDA25"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        p: 3,
                        backgroundColor: 'rgba(78, 204, 163, 0.1)',
                        borderRadius: '12px',
                        border: '2px solid rgba(78, 204, 163, 0.2)',
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(78, 204, 163, 0.15)',
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 25px rgba(78, 204, 163, 0.2)'
                        }
                      }}
                    >
                      <Box sx={{
                        position: 'absolute',
                        top: -12,
                        right: 16,
                        backgroundColor: '#4ecca3',
                        color: '#000',
                        px: 2,
                        py: 0.5,
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}>
                        CERTIFIED
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          component="img"
                          src="/images/microsoft-certified-associate-badge.svg"
                          alt="Microsoft Certified Associate Badge"
                          sx={{
                            width: '40px',
                            height: '40px',
                            mr: 1.5
                          }}
                          onError={(e: any) => {
                            // Fallback to icon if SVG fails to load
                            e.target.style.display = 'none';
                          }}
                        />
                        <MemoryIcon sx={{ color: '#4ecca3', fontSize: '1.8rem', display: 'none' }} id="fallback-icon" />
                        <Typography variant="h6" sx={{ color: '#4ecca3', fontWeight: 600 }}>
                          Azure AI Engineer Associate
                        </Typography>
                        <OpenInNewIcon sx={{ color: '#4ecca3', ml: 'auto', fontSize: '1.2rem' }} />
                      </Box>
                      
                      <Typography variant="body2" sx={{ color: '#ffffff', mb: 1, fontWeight: 500 }}>
                        Microsoft Certified: AI-102
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2 }}>
                        Issued: May 2025
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', flexGrow: 1 }}>
                        Validates skills in designing and implementing AI solutions using Azure Cognitive Services, Azure Machine Learning, 
                        and Knowledge Mining. Covers computer vision, natural language processing, conversational AI, and responsible AI practices.
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
                
                {/* Cybersecurity Certificate */}
                <Grid item xs={12} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Box sx={{ 
                      p: 3,
                      backgroundColor: 'rgba(109, 158, 235, 0.1)',
                      borderRadius: '12px',
                      border: '1px solid rgba(109, 158, 235, 0.2)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <SecurityIcon sx={{ color: '#6d9eeb', mr: 1.5, fontSize: '1.8rem' }} />
                        <Typography variant="h6" sx={{ color: '#6d9eeb', fontWeight: 600 }}>
                          Cybersecurity Certificate
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" sx={{ color: '#ffffff', mb: 1, fontWeight: 500 }}>
                        University of Missouri
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2 }}>
                        Issued: May 2025
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', flexGrow: 1 }}>
                        Completed a specialized certificate in cybersecurity covering network security, ethical hacking, digital forensics, and risk management. Developed skills in identifying vulnerabilities, securing systems, and implementing defensive strategies aligned with industry standards.
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
                
                {/* Information Systems Certificate */}
                <Grid item xs={12} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Box sx={{ 
                      p: 3,
                      backgroundColor: 'rgba(78, 204, 163, 0.1)',
                      borderRadius: '12px',
                      border: '1px solid rgba(78, 204, 163, 0.2)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <ComputerIcon sx={{ color: '#4ecca3', mr: 1.5, fontSize: '1.8rem' }} />
                        <Typography variant="h6" sx={{ color: '#4ecca3', fontWeight: 600 }}>
                          Information Systems & Technology
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" sx={{ color: '#ffffff', mb: 1, fontWeight: 500 }}>
                        University of Missouri
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2 }}>
                        Issued: May 2025
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', flexGrow: 1 }}>
                        Completed a 12-credit program focused on programming, database systems, and web development. Gained hands-on experience with information systems architecture, front-end design, and data management tools, preparing for roles in IT and systems integration.
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </motion.div>
        
        {/* About Me Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
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
            
            <Box sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                gutterBottom 
                color="primary"
                sx={{ 
                  fontWeight: 600,
                  position: 'relative',
                  mb: 4,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '60px',
                    height: '4px',
                    bottom: '-8px',
                    left: 0,
                    backgroundColor: '#6d9eeb',
                    borderRadius: '2px'
                  }
                }}
              >
                About Me
              </Typography>
              
              <Grid container spacing={4}>
                <Grid item xs={12} md={7}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2,
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8
                    }}
                  >
                     Hello! I'm a recent graduate from the University of Missouri-Columbia with a B.S. in Information Technology, focusing on software development and artificial intelligence.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 2,
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8
                    }}
                  >
                    I have experience with Microsoft Azure AI services, including Cognitive Services, Azure OpenAI, and Language Studio. My work spans intent recognition, natural language processing, and building intelligent applications using Azure's AI and machine learning tools. This hands-on knowledge allows me to design and deploy scalable AI-powered solutions tailored to enterprise needs.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.8
                    }}
                  >
                    Graduating in just three years, I've developed a strong foundation in enterprise software, AI modeling, and IT systems. My diverse experience and specialized skills position me to thrive in today's evolving tech landscape.
                  </Typography>
                </Grid>
                
                <Grid item xs={12} md={5}>
                  <Box sx={{ pl: { xs: 0, md: 2 } }}>
                    <motion.div 
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Education Quick Info */}
                      <motion.div variants={fadeInUp}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          mb: 3,
                          p: 2,
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          borderRadius: '8px'
                        }}>
                          <SchoolIcon sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
                          <Box>
                            <Typography variant="h6" sx={{ mb: 0.5 }}>Education</Typography>
                            <Typography variant="body2" color="textSecondary">
                              University of Missouri-Columbia<br />
                              B.S. Information Technology - May 2025
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                              Major GPA: 3.96 | Overall: 3.78<br />
                              High Dean's List Every Semester
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                      
                      {/* Work Quick Info */}
                      <motion.div variants={fadeInUp}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          mb: 3,
                          p: 2,
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          borderRadius: '8px'
                        }}>
                          <WorkIcon sx={{ color: '#4ecca3', mr: 2, fontSize: '2rem' }} />
                          <Box>
                            <Typography variant="h6" sx={{ mb: 0.5 }}>Experience</Typography>
                            <Typography variant="body2" color="textSecondary">
                              MX Holdings<br />
                              Enterprise Software Developer Intern
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                              Summer 2024 - January 2025
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                      
                      {/* Achievement Quick Info */}
                      <motion.div variants={fadeInUp}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          p: 2,
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          borderRadius: '8px'
                        }}>
                          <AutoAwesomeIcon sx={{ color: '#f0db4f', mr: 2, fontSize: '2rem' }} />
                          <Box>
                            <Typography variant="h6" sx={{ mb: 0.5 }}>Achievements</Typography>
                            <Typography variant="body2" color="textSecondary">
                              Azure AI-102 Certified<br />
                              Featured Mizzou IT Capstone<br />
                              TigerHacks 2023 First Place Winner
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;