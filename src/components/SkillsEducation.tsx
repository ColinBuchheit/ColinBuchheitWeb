import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Box, 
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
  CloudOutlined,
  PeopleOutlined,
  TimerOutlined,
  AssignmentOutlined,
  VerifiedUserOutlined,
  Memory as MemoryIcon,
  Build as BuildIcon,
  Psychology as PsychologyIcon,
  AutoAwesome as AutoAwesomeIcon,
  Lightbulb as LightbulbIcon,
  TrendingUp as TrendingUpIcon,
  Groups as GroupsIcon
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

// Core competency areas based on actual capabilities
const coreCompetencies = {
  development: [
    {
      area: "Full-Stack Web Development",
      description: "End-to-end web application development with modern frameworks and databases"
    },
    {
      area: "Enterprise Software Architecture",
      description: "Design and implementation of scalable, maintainable business applications"
    },
    {
      area: "API Development & Integration",
      description: "RESTful services, third-party integrations, and microservices architecture"
    },
    {
      area: "Database Design & Management",
      description: "Relational and NoSQL databases, data modeling, and optimization"
    }
  ],
  aiml: [
    {
      area: "AI Solution Implementation",
      description: "Integration of AI services and models into business applications"
    },
    {
      area: "Machine Learning Applications",
      description: "Model training, deployment, and integration for practical business use cases"
    },
    {
      area: "Natural Language Processing",
      description: "Text analysis, intent recognition, and conversational AI systems"
    },
    {
      area: "Computer Vision Integration",
      description: "Image processing and analysis within larger application ecosystems"
    }
  ],
  infrastructure: [
    {
      area: "Cloud Architecture & Deployment",
      description: "Azure cloud services, containerization, and scalable infrastructure design"
    },
    {
      area: "DevOps & Automation",
      description: "CI/CD pipelines, deployment automation, and infrastructure as code"
    },
    {
      area: "System Integration",
      description: "Connecting disparate systems and services for unified functionality"
    },
    {
      area: "Security Implementation",
      description: "Secure coding practices, authentication systems, and data protection"
    }
  ]
};

const SkillsEducationPage: React.FC = () => {
  // Relevant coursework
  const relevantCoursework = [
    {
      category: "Software Development",
      courses: [
        "Object-Oriented Programming",
        "Web Application Development", 
        "Database Systems Design",
        "Software Engineering Principles",
        "Full-Stack Development"
      ]
    },
    {
      category: "AI & Machine Learning",
      courses: [
        "Artificial Intelligence Fundamentals",
        "Machine Learning Algorithms",
        "Neural Networks & Deep Learning",
        "Computer Vision Systems",
        "Natural Language Processing"
      ]
    },
    {
      category: "Cybersecurity",
      courses: [
        "Network Security",
        "Ethical Hacking & Penetration Testing",
        "Digital Forensics",
        "Risk Management",
        "Secure Software Development"
      ]
    },
    {
      category: "Systems & Infrastructure",
      courses: [
        "Cloud Computing Architecture",
        "Linux System Administration",
        "Network Administration",
        "IT Project Management",
        "Systems Integration"
      ]
    }
  ];

  // Professional development areas
  const professionalSkills = [
    {
      name: "Problem Solving & Analysis",
      icon: <PsychologyIcon sx={{ color: '#4ecca3' }} />,
      description: "Demonstrated through hackathon wins and complex system debugging during internship"
    },
    {
      name: "Rapid Learning & Adaptation",
      icon: <TrendingUpIcon sx={{ color: '#4ecca3' }} />,
      description: "Completed degree in 3 years while maintaining high GPA and gaining practical experience"
    },
    {
      name: "Team Leadership & Collaboration",
      icon: <GroupsIcon sx={{ color: '#4ecca3' }} />,
      description: "Led capstone project team to featured recognition and successful enterprise deployments"
    },
    {
      name: "Technical Communication",
      icon: <LanguageOutlined sx={{ color: '#4ecca3' }} />,
      description: "Presented technical solutions to stakeholders and documented complex systems"
    },
    {
      name: "Project Management",
      icon: <AssignmentOutlined sx={{ color: '#4ecca3' }} />,
      description: "Managed multiple concurrent projects during internship with tight deadlines"
    },
    {
      name: "Innovation & Creative Thinking",
      icon: <LightbulbIcon sx={{ color: '#4ecca3' }} />,
      description: "Developed novel AI solutions and automated workflows that improved business processes"
    }
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
              ACADEMIC & PROFESSIONAL DEVELOPMENT
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
              A detailed look at my academic foundation, practical skill applications, and professional development journey.
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
                                primary="Graduated: May 2025 • Cum Laude" 
                                primaryTypographyProps={{ color: 'rgba(255,255,255,0.8)' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                <VerifiedUserOutlined sx={{ color: '#6d9eeb', fontSize: '1.2rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="Overall GPA: 3.78, Major GPA: 3.96" 
                                primaryTypographyProps={{ color: 'rgba(255,255,255,0.8)' }}
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                <School sx={{ color: '#6d9eeb', fontSize: '1.2rem' }} />
                              </ListItemIcon>
                              <ListItemText 
                                primary="High Dean's List Every Semester" 
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
                  
                  {/* Relevant Coursework */}
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                      Relevant Coursework
                    </Typography>
                    
                    <Grid container spacing={3}>
                      {relevantCoursework.map((courseCategory, index) => (
                        <Grid item xs={12} sm={6} lg={3} key={courseCategory.category}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Box sx={{ 
                              p: 2,
                              backgroundColor: 'rgba(255,255,255,0.03)',
                              borderRadius: '8px',
                              height: '100%',
                              borderLeft: `4px solid ${index % 2 === 0 ? '#6d9eeb' : '#4ecca3'}`
                            }}>
                              <Typography variant="h6" sx={{ 
                                color: index % 2 === 0 ? '#6d9eeb' : '#4ecca3', 
                                fontWeight: 600, 
                                mb: 2,
                                fontSize: '1rem'
                              }}>
                                {courseCategory.category}
                              </Typography>
                              {courseCategory.courses.map((course, courseIndex) => (
                                <Typography 
                                  key={courseIndex}
                                  variant="body2" 
                                  sx={{ 
                                    color: 'rgba(255,255,255,0.8)', 
                                    mb: 0.5,
                                    fontSize: '0.85rem'
                                  }}
                                >
                                  • {course}
                                </Typography>
                              ))}
                            </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Core Competencies */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
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
                <Box 
                  sx={{ 
                    p: 0.5, 
                    background: 'linear-gradient(90deg, #6d9eeb 0%, #4ecca3 100%)'
                  }}
                />
                
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <BuildIcon sx={{ color: '#6d9eeb', mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
                      Core Competencies
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
                    Core competency areas developed through academic study, practical application, and professional experience.
                  </Typography>
                  
                  <Grid container spacing={4}>
                    {/* Development Competencies */}
                    <Grid item xs={12} md={4}>
                      <Card 
                        elevation={0}
                        sx={{ 
                          background: 'rgba(109, 158, 235, 0.05)',
                          border: '1px solid rgba(109, 158, 235, 0.1)',
                          borderRadius: '12px',
                          height: '100%'
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <CodeIcon sx={{ color: '#6d9eeb', mr: 1.5, fontSize: '1.8rem' }} />
                            <Typography variant="h6" sx={{ color: '#6d9eeb', fontWeight: 600 }}>
                              Software Development
                            </Typography>
                          </Box>
                          
                          {coreCompetencies.development.map((competency, index) => (
                            <Box key={index} sx={{ mb: 2.5 }}>
                              <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 0.5 }}>
                                {competency.area}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                                {competency.description}
                              </Typography>
                            </Box>
                          ))}
                        </CardContent>
                      </Card>
                    </Grid>
                    
                    {/* AI/ML Competencies */}
                    <Grid item xs={12} md={4}>
                      <Card 
                        elevation={0}
                        sx={{ 
                          background: 'rgba(78, 204, 163, 0.05)',
                          border: '1px solid rgba(78, 204, 163, 0.1)',
                          borderRadius: '12px',
                          height: '100%'
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <MemoryIcon sx={{ color: '#4ecca3', mr: 1.5, fontSize: '1.8rem' }} />
                            <Typography variant="h6" sx={{ color: '#4ecca3', fontWeight: 600 }}>
                              AI & Machine Learning
                            </Typography>
                          </Box>
                          
                          {coreCompetencies.aiml.map((competency, index) => (
                            <Box key={index} sx={{ mb: 2.5 }}>
                              <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 0.5 }}>
                                {competency.area}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                                {competency.description}
                              </Typography>
                            </Box>
                          ))}
                        </CardContent>
                      </Card>
                    </Grid>
                    
                    {/* Infrastructure Competencies */}
                    <Grid item xs={12} md={4}>
                      <Card 
                        elevation={0}
                        sx={{ 
                          background: 'rgba(109, 158, 235, 0.05)',
                          border: '1px solid rgba(109, 158, 235, 0.1)',
                          borderRadius: '12px',
                          height: '100%'
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <CloudOutlined sx={{ color: '#6d9eeb', mr: 1.5, fontSize: '1.8rem' }} />
                            <Typography variant="h6" sx={{ color: '#6d9eeb', fontWeight: 600 }}>
                              Infrastructure & DevOps
                            </Typography>
                          </Box>
                          
                          {coreCompetencies.infrastructure.map((competency, index) => (
                            <Box key={index} sx={{ mb: 2.5 }}>
                              <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600, mb: 0.5 }}>
                                {competency.area}
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                                {competency.description}
                              </Typography>
                            </Box>
                          ))}
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          {/* Professional Skills */}
          <Grid item xs={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
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
                    Professional Skills & Competencies
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4,
                      color: 'rgba(255,255,255,0.7)',
                      maxWidth: '800px'
                    }}
                  >
                    Essential professional skills developed through academic projects, internship experience, and leadership roles.
                  </Typography>
                  
                  <Grid container spacing={3}>
                    {professionalSkills.map((skill, index) => (
                      <Grid item xs={12} sm={6} lg={4} key={skill.name}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
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
                                mb: 2
                              }}
                            >
                              <Box 
                                sx={{ 
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: 50,
                                  height: 50,
                                  borderRadius: '50%',
                                  backgroundColor: 'rgba(78, 204, 163, 0.1)',
                                  mr: 2
                                }}
                              >
                                {React.cloneElement(skill.icon, { sx: { fontSize: '1.5rem' } })}
                              </Box>
                              <Typography 
                                variant="h6" 
                                sx={{ 
                                  color: '#ffffff',
                                  fontWeight: 600,
                                  fontSize: '1rem'
                                }}
                              >
                                {skill.name}
                              </Typography>
                            </Box>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: 'rgba(255,255,255,0.8)',
                                lineHeight: 1.6,
                                flexGrow: 1
                              }}
                            >
                              {skill.description}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                  
                  {/* Learning & Development */}
                  <Box sx={{ mt: 5 }}>
                    <Typography variant="h5" color="primary" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                      Continuous Learning & Development
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ 
                          p: 3,
                          backgroundColor: 'rgba(109, 158, 235, 0.05)',
                          borderRadius: '12px',
                          borderLeft: '4px solid #6d9eeb'
                        }}>
                          <Typography variant="h6" sx={{ color: '#6d9eeb', fontWeight: 600, mb: 2 }}>
                            Current Focus Areas
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                            • Advanced Azure AI Services and OpenAI integration
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                            • Multi-agent AI systems and workflow automation
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                            • Enterprise-scale software architecture patterns
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                            • DevOps best practices and infrastructure as code
                          </Typography>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <Box sx={{ 
                          p: 3,
                          backgroundColor: 'rgba(78, 204, 163, 0.05)',
                          borderRadius: '12px',
                          borderLeft: '4px solid #4ecca3'
                        }}>
                          <Typography variant="h6" sx={{ color: '#4ecca3', fontWeight: 600, mb: 2 }}>
                            Learning Approach
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                            • Hands-on project-based learning with real-world applications
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                            • Active participation in developer communities and forums
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', mb: 2 }}>
                            • Regular experimentation with emerging technologies
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                            • Documentation and knowledge sharing through projects
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
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