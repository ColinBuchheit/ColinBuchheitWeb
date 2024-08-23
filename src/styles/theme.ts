import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9800',  // Bright orange for primary elements
    },
    background: {
      default: '#121212',  // Dark background
      paper: '#1e1e1e',    // Slightly lighter for cards and containers
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ff9800',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#ff9800',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#ff9800',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#b0b0b0',
    },
  },
});

export default theme;
