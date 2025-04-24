import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  IconButton, 
  Button,
  Paper,
  Chip,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Code as CodeIcon, 
  School as SchoolIcon,
  WorkOutline as WorkIcon,
  Storage as StorageIcon,
  Memory as MemoryIcon,
  AutoAwesome as AutoAwesomeIcon
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Define key technologies with groups
  const technologies = [
    { name: "C#", group: "programming" },
    { name: "Python", group: "programming" },
    { name: "TypeScript", group: "programming" },
    { name: "JavaScript", group: "programming" },
    { name: "Java", group: "programming" },
    { name: "YAML", group: "programming" },
    { name: "React", group: "frontend" },
    { name: "Redux", group: "frontend" },
    { name: "Angular", group: "frontend" },
    { name: "Azure DevOps", group: "cloud" },
    { name: "SQL", group: "database" },
    { name: "MongoDB", group: "database" },
    { name: "Firebase", group: "database" },
    { name: "Linux", group: "os", tooltip: "Parrot Security, Kali, Ubuntu" },
    { name: "Azure Services", group: "cloud", tooltip: "Data Factory, Data Lake Storage, Databricks, Kubernetes" },
    { name: "Neural Networks", group: "ai" },
    { name: "Decision Trees", group: "ai" },
    { name: "AI Agent Networks", group: "ai" },
    { name: "Process Automation", group: "devops" }
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
          {/* Profile Image - Now centered on mobile and on the left for larger screens */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <Box
      sx={{
        width: { xs: '220px', md: '380px' },
        height: { xs: '260px', md: '510px' }, // Increased height for oval shape
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '75% / 80%', // Creates oval shape (horizontal/vertical radius)
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
          objectPosition: '50% 60%', // Adjusted to show more of upper body/face
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
                Information Technology Student & Software Developer
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
                University of Missouri senior specializing in software development and AI,
                with expertise in full-stack development, AI agent networks, and IT infrastructure. 
                On track to graduate early and passionate about creating impactful technology solutions.
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
                      background: 'linear-gradient(90deg, #6d9eeb 0%, #4a7cc3 100%)',
                      fontWeight: 600,
                      fontSize: '0.95rem'
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
                    variant="outlined"
                    component={RouterLink}
                    to="/contact"
                    size="large"
                    sx={{
                      py: 1.2,
                      px: 3,
                      borderRadius: '50px',
                      borderColor: '#6d9eeb',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.95rem'
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        {/* Technologies Section with categories - Modified to align left */}
<Box sx={{ mb: 6 }}>
  <Typography 
    variant="h6" 
    color="textSecondary" 
    gutterBottom
    sx={{ textAlign: { xs: 'center', md: 'left' }, mb: 1 }}
  >
    Key Technologies
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
    My expertise spans programming languages, frameworks, cloud platforms, and AI development
  </Typography>
  
  {/* Programming Languages Category */}
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
      <CodeIcon sx={{ mr: 1 }} /> Programming & Languages
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
        .filter(tech => tech.group === 'programming')
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
  
  {/* Frontend & Cloud Category */}
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
      <StorageIcon sx={{ mr: 1 }} /> Frameworks & Cloud Platforms
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
        .filter(tech => tech.group === 'frontend' || tech.group === 'cloud' || tech.group === 'database' || tech.group === 'os')
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
  
  {/* AI & Automation Category */}
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
      <MemoryIcon sx={{ mr: 1 }} /> AI & Automation
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
        .filter(tech => tech.group === 'ai' || tech.group === 'devops')
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
        
        {/* About Me Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <Paper 
            elevation={0}
            sx={{ 
              p: 4, 
              borderRadius: '16px',
              background: 'linear-gradient(145deg, #1e1e1e 0%, #262626 100%)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <Typography 
              variant="h4" 
              gutterBottom 
              color="primary"
              sx={{ 
                fontWeight: 600,
                position: 'relative',
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
            
            <Grid container spacing={4} sx={{ mt: 1 }}>
              <Grid item xs={12} md={7}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 2,
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.8
                  }}
                >
                  Hello! I'm a senior engineering student at the University of Missouri-Columbia, 
                  pursuing a Bachelor of Science in Information Technology with a focus on software development
                  and artificial intelligence.
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 2,
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.8
                  }}
                >
                  I'm actively involved in several clubs, including Mizzou Computing Association, 
                  Mizzou Space Program, and Mizzou Student Astronomical Society, which has helped me develop 
                  both technical and leadership skills.
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.8
                  }}
                >
                  On track to graduate in just three years, I've gained valuable experience in 
                  Enterprise Software Development, AI modeling, and Information Technology. My diverse knowledge base 
                  and specialized skills have prepared me for an exciting future in this ever-evolving industry.
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
                            B.S. Information Technology
                          </Typography>
                          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                            Saint Louis Community College<br />
                            Associate Degree in IT
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
                        </Box>
                      </Box>
                    </motion.div>
                    
                    {/* Development Quick Info */}
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
                          <Typography variant="h6" sx={{ mb: 0.5 }}>Development</Typography>
                          <Typography variant="body2" color="textSecondary">
                            Full-Stack Development<br />
                            AI Model & Agent Network Dev<br />
                            Mizzou Hackathon 2023 Winner
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;