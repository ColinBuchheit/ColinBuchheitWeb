import React from 'react';
import { 
  Box, 
  Typography, 
  Link, 
  Container, 
  Grid, 
  IconButton,
  Divider
} from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Email as EmailIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Box sx={{ bgcolor: '#0a0a0a', color: '#ffffff' }}>
      {/* Scroll to top button */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: -5,
          position: 'relative',
          zIndex: 10
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              backgroundColor: '#6d9eeb',
              color: '#ffffff',
              width: 50,
              height: 50,
              '&:hover': {
                backgroundColor: '#4a7cc3',
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <KeyboardArrowUpIcon fontSize="large" />
          </IconButton>
        </motion.div>
      </Box>
      
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={3} 
          sx={{ 
            py: 5, 
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: { xs: 3, md: 0 } }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#ffffff', fontWeight: 600 }}>
                Colin Buchheit
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, maxWidth: '300px' }}>
                Information Technology student and software developer based in Columbia, Missouri.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
                  <IconButton 
                    href="https://github.com/ColinBuchheit" 
                    target="_blank"
                    aria-label="GitHub"
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      }
                    }}
                  >
                    <GitHub />
                  </IconButton>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
                  <IconButton 
                    href="https://www.linkedin.com/in/colin-buchheit-02a3aa22b/" 
                    target="_blank"
                    aria-label="LinkedIn"
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      }
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
                  <IconButton 
                    component={RouterLink}
                    to="/contact"
                    aria-label="Contact"
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      }
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                </motion.div>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: '#6d9eeb', fontWeight: 600 }}>
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                component={RouterLink} 
                to="/" 
                underline="none"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s'
                }}
              >
                Home
              </Link>
              <Link 
                component={RouterLink} 
                to="/skills-education" 
                underline="none"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s'
                }}
              >
                Skills & Education
              </Link>
              <Link 
                component={RouterLink} 
                to="/experience" 
                underline="none"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s'
                }}
              >
                Experience
              </Link>
              <Link 
                component={RouterLink} 
                to="/contact" 
                underline="none"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s'
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: '#4ecca3', fontWeight: 600 }}>
              Education
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                University of Missouri
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                B.S. Information Technology
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Expected Graduation: 2025
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom sx={{ color: '#6d9eeb', fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                St. Louis, Missouri, USA
              </Typography>
              <Link 
                href="mailto:colinbuchheit@gmail.com" 
                underline="none"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': {
                    color: '#ffffff',
                  },
                  transition: 'color 0.3s'
                }}
              >
                colinbuchheit@gmail.com
              </Link>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ py: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            © {currentYear} Colin Buchheit. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)', display: 'block', mt: 1 }}>
            Built with React, TypeScript, and Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;