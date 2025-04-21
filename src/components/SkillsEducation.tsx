import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Link,
  Chip,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { 
  School,
  Code as CodeIcon, 
  Security, 
  LanguageOutlined, 
  StorageOutlined,
  DeveloperModeOutlined,
  TerminalOutlined,
  CloudOutlined,
  GitHub,
  BugReportOutlined,
  PeopleOutlined,
  TimerOutlined,
  AssignmentOutlined,
  VerifiedUserOutlined,
  Code,
  Memory as MemoryIcon,
  Storage as StorageIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6 }
  }
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Stagger container animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Individual skill item animation for staggering
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const SkillsEducationPage: React.FC = () => {
  // Soft skills
  const softSkills = [
    { name: "Team Collaboration", icon: <PeopleOutlined sx={{ color: '#4ecca3' }} /> },
    { name: "Effective Communication", icon: <LanguageOutlined sx={{ color: '#4ecca3' }} /> },
    { name: "Problem Solving", icon: <BugReportOutlined sx={{ color: '#4ecca3' }} /> },
    { name: "Leadership", icon: <PeopleOutlined sx={{ color: '#4ecca3' }} /> },
    { name: "Time Management", icon: <TimerOutlined sx={{ color: '#4ecca3' }} /> },
    { name: "Agile Development", icon: <AssignmentOutlined sx={{ color: '#4ecca3' }} /> }
  ];
  
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
              QUALIFICATIONS & EXPERTISE
            </Typography>
            <Typography 
              variant="h3" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Skills & Education
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '800px',
                mx: { xs: 'auto', md: 0 }
              }}
            >
              A comprehensive overview of my academic qualifications, technical proficiencies, and professional skills.
            </Typography>
          </Box>
        </motion.div>
        
        <Grid container spacing={4}>
          {/* Education Section */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
              id="education"
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <School sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                      Education
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={4}>
                    {/* University Education */}
                    <Grid item xs={12} md={6}>
                      <Card 
                        elevation={0}
                        sx={{ 
                          background: 'rgba(109, 158, 235, 0.05)',
                          border: '1px solid rgba(109, 158, 235, 0.1)',
                          borderRadius: '12px',
                          height: '100%',
                          overflow: 'visible',
                          position: 'relative'
                        }}
                      >
                        <Box 
                          sx={{ 
                            position: 'absolute',
                            top: -15,
                            left: 20,
                            backgroundColor: '#6d9eeb',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            px: 2,
                            py: 0.5,
                            borderRadius: '4px',
                            boxShadow: '0 4px 12px rgba(109, 158, 235, 0.3)'
                          }}
                        >
                          2023 - 2025
                        </Box>
                        
                        <CardContent sx={{ p: 3 }}>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 600,
                              color: '#ffffff',
                              mb: 1
                            }}
                          >
                            University of Missouri, Columbia
                          </Typography>
                          
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: 500,
                              color: '#6d9eeb',
                              mb: 2
                            }}
                          >
                            Bachelor of Science in Information Technology
                          </Typography>
                          
                          <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                          
                          <List dense>
                            <ListItem>
                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                <School sx={{ color: '#6d9eeb', fontSize: '1.2rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Expected Graduation: May 2025" 
                                primaryTypographyProps={{ color: 'rgba(255,255,255,0.8)' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                <VerifiedUserOutlined sx={{ color: '#6d9eeb', fontSize: '1.2rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Overall GPA: 3.72, Major GPA: 3.94" 
                                primaryTypographyProps={{ color: 'rgba(255,255,255,0.8)' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                <School sx={{ color: '#6d9eeb', fontSize: '1.2rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Mizzou Engineering High Dean's List" 
                                primaryTypographyProps={{ color: 'rgba(255,255,255,0.8)' }}
                              />
                            </ListItem>
                          </List>
                          
                          <Box 
                            sx={{ 
                              display: 'flex', 
                              flexWrap: 'wrap', 
                              gap: 1,
                              mt: 2
                            }}
                          >
                            <Chip 
                              label="Software Development" 
                              size="small"
                              sx={{ 
                                bgcolor: 'rgba(109, 158, 235, 0.1)', 
                                color: '#ffffff'
                              }} 
                            />
                            <Chip 
                              label="Cyber Defense/Attack Tactics" 
                              size="small"
                              sx={{ 
                                bgcolor: 'rgba(109, 158, 235, 0.1)', 
                                color: '#ffffff'
                              }} 
                            />
                            <Chip 
                              label="Database Systems" 
                              size="small"
                              sx={{ 
                                bgcolor: 'rgba(109, 158, 235, 0.1)', 
                                color: '#ffffff'
                              }} 
                            />
                            <Chip 
                              label="Full-Stack and Deployment" 
                              size="small"
                              sx={{ 
                                bgcolor: 'rgba(109, 158, 235, 0.1)', 
                                color: '#ffffff'
                              }} 
                            />
                            <Chip 
                              label="AI ML Model Training" 
                              size="small"
                              sx={{ 
                                bgcolor: 'rgba(109, 158, 235, 0.1)', 
                                color: '#ffffff'
                              }} 
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                    
                    {/* Community College */}
                    <Grid item xs={12} md={6}>
                      <Card 
                        elevation={0}
                        sx={{ 
                          background: 'rgba(78, 204, 163, 0.05)',
                          border: '1px solid rgba(78, 204, 163, 0.1)',
                          borderRadius: '12px',
                          height: '100%',
                          overflow: 'visible',
                          position: 'relative'
                        }}
                      >
                        <Box 
                          sx={{ 
                            position: 'absolute',
                            top: -15,
                            left: 20,
                            backgroundColor: '#4ecca3',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            px: 2,
                            py: 0.5,
                            borderRadius: '4px',
                            boxShadow: '0 4px 12px rgba(78, 204, 163, 0.3)'
                          }}
                        >
                          2021 - 2023
                        </Box>
                        
                        <CardContent sx={{ p: 3 }}>
                          <Typography 
                            variant="h5" 
                            sx={{ 
                              fontWeight: 600,
                              color: '#ffffff',
                              mb: 1
                            }}
                          >
                            Saint Louis Community College
                          </Typography>
                          
                          <Typography 
                            variant="subtitle1" 
                            sx={{ 
                              fontWeight: 500,
                              color: '#4ecca3',
                              mb: 2
                            }}
                          >
                            Associate Degree in Information Technology
                          </Typography>
                          
                          <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                          
                          <List dense>
                            <ListItem>
                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                <School sx={{ color: '#4ecca3', fontSize: '1.2rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Graduated: May 2023" 
                                primaryTypographyProps={{ color: 'rgba(255,255,255,0.8)' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                <VerifiedUserOutlined sx={{ color: '#4ecca3', fontSize: '1.2rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Phi Theta Kappa Honors Fraternity" 
                                primaryTypographyProps={{ color: 'rgba(255,255,255,0.8)' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                <School sx={{ color: '#4ecca3', fontSize: '1.2rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Foundation for IT Specialization" 
                                primaryTypographyProps={{ color: 'rgba(255,255,255,0.8)' }}
                              />
                            </ListItem>
                          </List>
                          
                          <Box 
                            sx={{ 
                              display: 'flex', 
                              flexWrap: 'wrap', 
                              gap: 1,
                              mt: 2
                            }}
                          >
                            <Chip 
                              label="Core IT Fundamentals" 
                              size="small"
                              sx={{ 
                                bgcolor: 'rgba(78, 204, 163, 0.1)', 
                                color: '#ffffff'
                              }} 
                            />
                            <Chip 
                              label="Programming Basics" 
                              size="small"
                              sx={{ 
                                bgcolor: 'rgba(78, 204, 163, 0.1)', 
                                color: '#ffffff'
                              }} 
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Technical Skills Section */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              id="technicalSkills"
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Code sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                      Technical Skills
                    </Typography>
                  </Box>
                  
                  {/* Programming Languages Section */}
                  <Typography
                    variant="h5"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 600,
                      mb: 3,
                      mt: 2
                    }}
                  >
                    <CodeIcon sx={{ color: '#6d9eeb', mr: 1 }} /> Programming Languages
                  </Typography>
                  
                  <Box sx={{ mb: 4, pl: 2 }}>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                      • C#, Python, Java
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                      • JavaScript, TypeScript
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                      • SQL, NoSQL
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      • YAML
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      {/* Cloud & DevOps Section */}
                      <Typography
                        variant="h5"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        <CloudOutlined sx={{ color: '#4ecca3', mr: 1 }} /> Cloud & DevOps
                      </Typography>
                      
                      <Box sx={{ mb: 4, pl: 2 }}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • <strong>Microsoft Azure</strong>: Azure Pipelines, Blob Storage, Kubernetes, Brick
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Docker
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • GitHub Actions
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • CI/CD Best Practices
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Linux Environments (Ubuntu, Debian, Kali, Parrot Security)
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          • WireGuard VPN Configuration & Deployment
                        </Typography>
                      </Box>
                      
                      {/* Scripting & Markup Section */}
                      <Typography
                        variant="h5"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        <TerminalOutlined sx={{ color: '#6d9eeb', mr: 1 }} /> Scripting & Markup
                      </Typography>
                      
                      <Box sx={{ mb: 4, pl: 2 }}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Bash, PowerShell
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • HTML, CSS
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • JSON, YAML
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          • Markdown
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      {/* Databases & Storage Section */}
                      <Typography
                        variant="h5"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        <StorageIcon sx={{ color: '#4ecca3', mr: 1 }} /> Databases & Storage
                      </Typography>
                      
                      <Box sx={{ mb: 4, pl: 2 }}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • PostgreSQL, MongoDB, MySQL
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Microsoft SQL Server
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Redis, Firebase
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          • Azure Blob Storage
                        </Typography>
                      </Box>
                      
                      {/* Frameworks & Libraries Section */}
                      <Typography
                        variant="h5"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        <DeveloperModeOutlined sx={{ color: '#6d9eeb', mr: 1 }} /> Frameworks & Libraries
                      </Typography>
                      
                      <Box sx={{ mb: 4, pl: 2 }}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • React / Next.js
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Node.js / Express.js
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Tailwind CSS, Material UI
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • .NET / ASP.NET Core
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • FastAPI
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Redux
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Three.js
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • BeautifulSoup, Scrapy
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          • CrewAI
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  {/* AI & Machine Learning Section */}
                  <Typography
                    variant="h5"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 600,
                      mb: 2,
                      mt: 2
                    }}
                  >
                    <MemoryIcon sx={{ color: '#4ecca3', mr: 1 }} /> AI & Machine Learning
                  </Typography>
                  
                  <Box sx={{ mb: 4, pl: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • OpenAI API (GPT-4, GPT-4o)
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Claude 3.7 Sonnet API
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • LangChain
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Scikit-learn, TensorFlow, PyTorch
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          • NLP & Prompt Engineering
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Decision Trees, Neural Networks
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • Reinforcement Learning
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 1 }}>
                          • ML Model Training & Evaluation
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          • Multi-Agent AI Networks (CrewAI Orchestration & Pipelines)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  
                  {/* Professional & Soft Skills Section */}
                  <Typography
                    variant="h5"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    <PeopleOutlined sx={{ color: '#6d9eeb', mr: 1 }} /> Professional & Soft Skills
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Chip 
                          icon={skill.icon}
                          label={skill.name} 
                          sx={{ 
                            bgcolor: 'rgba(78, 204, 163, 0.1)', 
                            color: '#ffffff',
                            border: '1px solid rgba(78, 204, 163, 0.2)',
                            '& .MuiChip-icon': {
                              color: '#4ecca3'
                            }
                          }} 
                        />
                      </motion.div>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Certifications Section */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              id="certifications"
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Security sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                      Certifications
                    </Typography>
                  </Box>
                  
                  <Grid container spacing={3}>
                    {/* In-Progress Certificates */}
                    <Grid item xs={12} md={6}>
                      <Box sx={{ 
                        bgcolor: 'rgba(255,255,255,0.03)',
                        p: 3,
                        borderRadius: '12px',
                        borderLeft: '4px solid #6d9eeb',
                        mb: { xs: 2, md: 0 }
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ display: 'flex', alignItems: 'center', color: '#ffffff', mb: 2 }}
                        >
                          <Security sx={{ mr: 1.5, color: '#6d9eeb' }} />
                          In-Progress Certifications
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                              <Box 
                                sx={{ 
                                  width: 8, 
                                  height: 8, 
                                  bgcolor: '#6d9eeb',
                                  borderRadius: '50%'
                                }} 
                              />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Cybersecurity Certificate" 
                              primaryTypographyProps={{ color: 'rgba(255,255,255,0.9)' }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                              <Box 
                                sx={{ 
                                  width: 8, 
                                  height: 8, 
                                  bgcolor: '#6d9eeb',
                                  borderRadius: '50%'
                                }} 
                              />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Azure AI Engineer Associate (AI-102)" 
                              primaryTypographyProps={{ color: 'rgba(255,255,255,0.9)' }}
                            />
                          </ListItem>
                        </List>
                      </Box>
                    </Grid>
                    
                    {/* Completed Certificates */}
                    <Grid item xs={12} md={6}>
                      <Box sx={{ 
                        bgcolor: 'rgba(255,255,255,0.03)',
                        p: 3,
                        borderRadius: '12px',
                        borderLeft: '4px solid #4ecca3'
                      }}>
                        <Typography 
                          variant="h6" 
                          sx={{ display: 'flex', alignItems: 'center', color: '#ffffff', mb: 2 }}
                        >
                          <VerifiedUserOutlined sx={{ mr: 1.5, color: '#4ecca3' }} />
                          Completed Certifications
                        </Typography>
                        
                        <List dense>
                          <ListItem>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                              <Box 
                                sx={{ 
                                  width: 8, 
                                  height: 8, 
                                  bgcolor: '#4ecca3',
                                  borderRadius: '50%'
                                }} 
                              />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Information Systems and Technology Certificate" 
                              secondary="University of Missouri"
                              primaryTypographyProps={{ color: 'rgba(255,255,255,0.9)' }}
                              secondaryTypographyProps={{ color: 'rgba(255,255,255,0.7)' }}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                              <Box 
                                sx={{ 
                                  width: 8, 
                                  height: 8, 
                                  bgcolor: '#4ecca3',
                                  borderRadius: '50%'
                                }} 
                              />
                            </ListItemIcon>
                            <ListItemText 
                              primary={
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography component="span" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                                    Google IT Support Certificate
                                  </Typography>
                                  <Link 
                                    href="https://coursera.org/share/312d5954c9c4805f993e7222c43eab89" 
                                    target="_blank" 
                                    sx={{ 
                                      ml: 1, 
                                      color: '#4ecca3',
                                      textDecoration: 'none',
                                      fontSize: '0.8rem',
                                      border: '1px solid #4ecca3',
                                      borderRadius: '4px',
                                      px: 1,
                                      '&:hover': {
                                        backgroundColor: 'rgba(78, 204, 163, 0.1)'
                                      }
                                    }}
                                  >
                                    Verify
                                  </Link>
                                </Box>
                              }
                              secondary="Coursera"
                              secondaryTypographyProps={{ color: 'rgba(255,255,255,0.7)' }}
                            />
                          </ListItem>
                        </List>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsEducationPage;