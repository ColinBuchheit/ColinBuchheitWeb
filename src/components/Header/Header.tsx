// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  toggleColorMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleColorMode }) => {
  const theme = useTheme();

  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <div className="nav-container">
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/portfolio">
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/skills">
            Skills
          </Button>
          <Button color="inherit" component={Link} to="/experience">
            Experience
          </Button>
          <Button color="inherit" component={Link} to="/education">
            Education
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </div>
        <IconButton edge="end" color="inherit" onClick={toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

