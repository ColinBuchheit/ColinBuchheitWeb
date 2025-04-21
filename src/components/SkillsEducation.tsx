import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Link,
  LinearProgress,
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
  Code
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
  // Programming Languages with skill levels
  const programmingSkills = [
    { name: "C#", level: 90, icon: <CodeIcon /> },
    { name: "Python", level: 85, icon: <CodeIcon /> },
    { name: "JavaScript", level: 90, icon: <CodeIcon /> },
    { name: "TypeScript", level: 85, icon: <CodeIcon /> },
    { name: "Java", level: 75, icon: <CodeIcon /> },
    { name: "YAML", level: 80, icon: <TerminalOutlined /> },
    { name: "Bash", level: 70, icon: <TerminalOutlined /> },
    { name: "PowerShell", level: 75, icon: <TerminalOutlined /> }
  ];
  
  // Technologies and frameworks
  const technologies = [
    { name: "React", icon: <DeveloperModeOutlined sx={{ color: '#61dafb' }} /> },
    { name: "Azure DevOps", icon: <CloudOutlined sx={{ color: '#0078d4' }} /> },
    { name: "GitHub", icon: <GitHub sx={{ color: '#ffffff' }} /> },
    { name: ".NET", icon: <DeveloperModeOutlined sx={{ color: '#512bd4' }} /> },
    { name: "SQL Server", icon: <StorageOutlined sx={{ color: '#cc2927' }} /> },
    { name: "MongoDB", icon: <StorageOutlined sx={{ color: '#47A248' }} /> },
    { name: "Windows", icon: <DeveloperModeOutlined sx={{ color: '#0078d7' }} /> },
    { name: "Linux", icon: <DeveloperModeOutlined sx={{ color: '#FCC624' }} /> }
  ];
  
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
                                primary="Overall GPA: 3.64, Major GPA: 3.94" 
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
                              label="IT Security" 
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
                  
                  <Grid container spacing={4}>
                    {/* Programming Languages */}
                    <Grid item xs={12} md={6}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600,
                          color: '#ffffff',
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <CodeIcon sx={{ mr: 1, color: '#6d9eeb' }} />
                        Programming Languages
                      </Typography>
                      
                      <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {programmingSkills.map((skill, index) => (
                          <motion.div key={skill.name} variants={item}>
                            <Box sx={{ mb: 2.5 }}>
                              <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                alignItems: 'center', 
                                mb: 1
                              }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Box sx={{ 
                                    mr: 1.5, 
                                    color: '#6d9eeb',
                                    display: 'flex'
                                  }}>
                                    {skill.icon}
                                  </Box>
                                  <Typography variant="body1" sx={{ color: '#ffffff' }}>
                                    {skill.name}
                                  </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                                  {skill.level}%
                                </Typography>
                              </Box>
                              <LinearProgress 
                                variant="determinate" 
                                value={skill.level} 
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  backgroundColor: 'rgba(255,255,255,0.05)',
                                  '& .MuiLinearProgress-bar': {
                                    borderRadius: 4,
                                    background: index % 2 === 0 
                                      ? 'linear-gradient(90deg, #6d9eeb 0%, #4a7cc3 100%)'
                                      : 'linear-gradient(90deg, #4ecca3 0%, #3c9d7c 100%)'
                                  }
                                }}
                              />
                            </Box>
                          </motion.div>
                        ))}
                      </motion.div>
                    </Grid>
                    
                    {/* Technologies and Frameworks */}
                    <Grid item xs={12} md={6}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600,
                          color: '#ffffff',
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <DeveloperModeOutlined sx={{ mr: 1, color: '#4ecca3' }} />
                        Technologies & Platforms
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {technologies.map((tech, index) => (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              scale: 1.05, 
                              transition: { duration: 0.2 } 
                            }}
                          >
                            <Box sx={{ 
                              display: 'flex', 
                              flexDirection: 'column',
                              alignItems: 'center',
                              bgcolor: 'rgba(255,255,255,0.03)',
                              borderRadius: '8px',
                              p: 2,
                              minWidth: '100px',
                              border: '1px solid rgba(255,255,255,0.08)',
                              transition: 'all 0.3s',
                              '&:hover': {
                                bgcolor: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.15)',
                              }
                            }}>
                              <Box sx={{ mb: 1 }}>
                                {tech.icon}
                              </Box>
                              <Typography variant="body2" sx={{ color: '#ffffff', textAlign: 'center' }}>
                                {tech.name}
                              </Typography>
                            </Box>
                          </motion.div>
                        ))}
                      </Box>
                      
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600,
                          color: '#ffffff',
                          mt: 4,
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <PeopleOutlined sx={{ mr: 1, color: '#4ecca3' }} />
                        Soft Skills & Methodologies
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
                    </Grid>
                  </Grid>
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
                              primary="Information Systems and Technology Certificate" 
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
                              primary="Cybersecurity Certificate" 
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