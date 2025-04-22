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
  BugReportOutlined,
  PeopleOutlined,
  TimerOutlined,
  AssignmentOutlined,
  VerifiedUserOutlined,
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

// Function to render skill categories
interface SkillCategoryProps {
  title: string;
  icon: React.ReactElement;
  skillsList: string[];
  color?: string;
  showAsList?: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ 
  title, 
  icon, 
  skillsList,
  color = '#6d9eeb',
  showAsList = false
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <Card 
        elevation={0}
        sx={{ 
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: `1px solid rgba(${color === '#6d9eeb' ? '109, 158, 235' : '78, 204, 163'}, 0.1)`,
          borderRadius: '12px',
          mb: 3,
          overflow: 'visible',
          position: 'relative'
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Category Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Box 
              sx={{ 
                mr: 2, 
                backgroundColor: `rgba(${color === '#6d9eeb' ? '109, 158, 235' : '78, 204, 163'}, 0.1)`, 
                p: 1.5,
                borderRadius: '8px'
              }}
            >
              {React.cloneElement(icon, { sx: { color: color, fontSize: '1.8rem' } })}
            </Box>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600,
                color: color
              }}
            >
              {title}
            </Typography>
          </Box>
          
          {showAsList ? (
            // Display as bullet list
            <Box sx={{ pl: 2 }}>
              {skillsList.map((skill: string, index: number) => (
                <Typography 
                  key={index} 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.9)', 
                    mb: 1,
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}
                >
                  <Box 
                    component="span" 
                    sx={{ 
                      color: color, 
                      mr: 1,
                      fontSize: '1.3rem',
                      lineHeight: 1
                    }}
                  >
                    •
                  </Box>
                  {skill}
                </Typography>
              ))}
            </Box>
          ) : (
            // Display as skill chips
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skillsList.map((skill: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Chip
                    label={skill}
                    sx={{
                      backgroundColor: `rgba(${color === '#6d9eeb' ? '109, 158, 235' : '78, 204, 163'}, 0.15)`,
                      color: '#ffffff',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      py: 2.5,
                      mb: 1.5,
                      '&:hover': {
                        backgroundColor: `rgba(${color === '#6d9eeb' ? '109, 158, 235' : '78, 204, 163'}, 0.25)`,
                      }
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TechnicalSkills: React.FC = () => {
  // Programming Languages
  const programmingLanguages = [
    "C#", "Python", "Java", 
    "JavaScript", "TypeScript",
    "SQL", "NoSQL", "YAML"
  ];
  
  // Cloud & DevOps
  const cloudDevOps = [
    "Microsoft Azure: Azure Pipelines, Blob Storage, Kubernetes, Brick",
    "Docker",
    "GitHub Actions",
    "CI/CD Best Practices",
    "Linux Environments (Ubuntu, Debian, Kali, Parrot Security)",
    "WireGuard VPN Configuration & Deployment"
  ];
  
  // Scripting & Markup
  const scriptingMarkup = [
    "Bash, PowerShell",
    "HTML, CSS",
    "JSON, YAML",
    "Markdown"
  ];
  
  // Databases & Storage
  const databaseStorage = [
    "PostgreSQL, MongoDB, MySQL",
    "Microsoft SQL Server",
    "Redis, Firebase",
    "Azure Blob Storage"
  ];
  
  // Frameworks & Libraries
  const frameworksLibraries = [
    "React / Next.js",
    "Node.js / Express.js",
    "Tailwind CSS, Material UI",
    ".NET / ASP.NET Core",
    "FastAPI",
    "Redux",
    "Three.js",
    "BeautifulSoup, Scrapy",
    "CrewAI"
  ];
  
  // AI & Machine Learning
  const aiMachineLearning = [
    "OpenAI API (GPT-4, GPT-4o)",
    "Claude 3.7 Sonnet API",
    "LangChain",
    "Scikit-learn, TensorFlow, PyTorch",
    "NLP & Prompt Engineering",
    "Decision Trees, Neural Networks",
    "Reinforcement Learning",
    "ML Model Training & Evaluation",
    "Multi-Agent AI Networks (CrewAI Orchestration & Pipelines)"
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <CodeIcon sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
        <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
          Technical Skills
        </Typography>
      </Box>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4,
          color: 'rgba(255,255,255,0.7)',
          maxWidth: '800px',
        }}
      >
        A comprehensive overview of my technical proficiencies across various domains,
        including programming languages, frameworks, cloud technologies, and AI development.
      </Typography>
      
      {/* Programming Languages */}
      <SkillCategory 
        title="Programming Languages"
        icon={<CodeIcon />} 
        skillsList={programmingLanguages} 
        color="#6d9eeb"
      />
      
      {/* Cloud & DevOps */}
      <SkillCategory 
        title="Cloud & DevOps"
        icon={<CloudOutlined />} 
        skillsList={cloudDevOps} 
        color="#4ecca3"
        showAsList={true}
      />
      
      {/* Scripting & Markup */}
      <SkillCategory 
        title="Scripting & Markup"
        icon={<TerminalOutlined />} 
        skillsList={scriptingMarkup} 
        color="#6d9eeb"
        showAsList={true}
      />
      
      {/* Databases & Storage */}
      <SkillCategory 
        title="Databases & Storage"
        icon={<StorageIcon />} 
        skillsList={databaseStorage} 
        color="#4ecca3"
        showAsList={true}
      />
      
      {/* Frameworks & Libraries */}
      <SkillCategory 
        title="Frameworks & Libraries"
        icon={<DeveloperModeOutlined />} 
        skillsList={frameworksLibraries} 
        color="#6d9eeb"
        showAsList={true}
      />
      
      {/* AI & Machine Learning */}
      <SkillCategory 
        title="AI & Machine Learning"
        icon={<MemoryIcon />} 
        skillsList={aiMachineLearning} 
        color="#4ecca3"
        showAsList={true}
      />
    </Box>
  );
};

const SkillsEducationPage: React.FC = () => {
  // Define interface for soft skills
  interface SoftSkill {
    name: string;
    icon: React.ReactElement;
  }
  
  // Soft skills
  const softSkills: SoftSkill[] = [
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
                  {/* Integrated TechnicalSkills component */}
                  <TechnicalSkills />
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Professional & Soft Skills Section */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              id="softSkills"
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
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    <PeopleOutlined sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
                    Professional & Soft Skills
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4,
                      color: 'rgba(255,255,255,0.7)',
                      maxWidth: '800px'
                    }}
                  >
                    Beyond technical expertise, I've developed strong interpersonal and professional skills
                    that enhance my effectiveness in collaborative environments.
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {softSkills.map((skill, index: number) => (
                      <Grid item xs={12} sm={6} md={4} key={skill.name}>
                        <motion.div
                          variants={item}
                          custom={index}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <Box 
                            sx={{ 
                              p: 3, 
                              backgroundColor: 'rgba(255,255,255,0.03)',
                              borderRadius: '12px',
                              border: '1px solid rgba(255,255,255,0.05)',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              textAlign: 'center',
                              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                              }
                            }}
                          >
                            <Box 
                              sx={{ 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(78, 204, 163, 0.1)',
                                mb: 2
                              }}
                            >
                              {React.cloneElement(skill.icon, { sx: { fontSize: '1.8rem' } })}
                            </Box>
                            <Typography 
                              variant="h6" 
                              sx={{ 
                                color: '#ffffff',
                                fontWeight: 600 
                              }}
                            >
                              {skill.name}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
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
