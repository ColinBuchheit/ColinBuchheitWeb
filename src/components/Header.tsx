import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Typography,
  useMediaQuery,
  useTheme,
  Slide,
  useScrollTrigger,
  Container,
  Button
} from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';

// Hide AppBar on scroll down, show on scroll up
function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Skills & Education', path: '/skills-education' },
    { title: 'Experience', path: '/experience' },
    { title: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (path: string) => {
    if (location.pathname !== path) {
      window.location.href = path;
    }
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  // Mobile drawer content
  const drawer = (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1rem'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ color: '#6d9eeb', fontWeight: 600 }}>
          Colin Buchheit
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {navItems.map((item, index) => (
          <motion.div
            key={item.title}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.1 * index,
                  duration: 0.4
                }
              }
            }}
          >
            <ListItem 
              button 
              onClick={() => handleNavClick(item.path)}
              sx={{ 
                py: 2,
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                color: location.pathname === item.path ? '#6d9eeb' : '#ffffff'
              }}
            >
              <ListItemText 
                primary={item.title} 
                primaryTypographyProps={{ 
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  fontSize: '1.1rem'
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          sx={{ 
            backgroundColor: 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
          }}
          elevation={0}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
              {/* Logo */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CodeIcon sx={{ color: '#6d9eeb', mr: 1, fontSize: '2rem' }} />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    color: '#ffffff',
                    display: { xs: 'none', sm: 'block' }
                  }}
                >
                  Colin Buchheit
                </Typography>
              </Box>
              
              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -3 }}
                      whileTap={{ y: 0 }}
                    >
                      <Button
                        component={RouterLink}
                        to={item.path}
                        sx={{
                          color: location.pathname === item.path ? '#6d9eeb' : '#ffffff',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          textTransform: 'none',
                          opacity: location.pathname === item.path ? 1 : 0.85,
                          '&:hover': {
                            opacity: 1,
                            backgroundColor: 'rgba(255,255,255,0.05)'
                          },
                          position: 'relative',
                          '&::after': location.pathname === item.path ? {
                            content: '""',
                            position: 'absolute',
                            width: '30%',
                            height: '3px',
                            bottom: 0,
                            left: '35%',
                            backgroundColor: '#6d9eeb',
                            borderRadius: '4px'
                          } : {}
                        }}
                      >
                        {item.title}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              )}
              
              {/* Mobile Menu Toggle */}
              {isMobile && (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 1 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      
      {/* Mobile Menu Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: '80%', 
            maxWidth: '300px',
            boxSizing: 'border-box',
            backgroundColor: '#121212' 
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* This Box provides spacing below the AppBar */}
      <Box sx={{ minHeight: '70px' }} />
    </>
  );
};

export default Header;