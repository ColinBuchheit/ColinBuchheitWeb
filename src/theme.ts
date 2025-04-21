import { createTheme } from '@mui/material/styles';

// Create a custom theme with enhanced dark mode styling
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6d9eeb',
      dark: '#4a7cc3',
      light: '#8fb5ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4ecca3',
      dark: '#3c9d7c',
      light: '#6feecb',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#4caf50',
    },
    info: {
      main: '#2196f3',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.3,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.3,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.01071em',
    },
    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.03333em',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#2b2b2b',
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#6b6b6b',
            minHeight: 24,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#959595',
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#959595',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#959595',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
          },
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #6d9eeb 0%, #4a7cc3 100%)',
          '&:hover': {
            background: 'linear-gradient(90deg, #5a8ad6 0%, #3b6db4 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(90deg, #4ecca3 0%, #3c9d7c 100%)',
          '&:hover': {
            background: 'linear-gradient(90deg, #3cb892 0%, #2d8e6d 100%)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.2s',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6d9eeb',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6d9eeb',
              borderWidth: 2,
            },
          },
          '& .MuiFilledInput-root': {
            borderRadius: '8px 8px 0 0',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 20,
          '&:last-child': {
            paddingBottom: 20,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.08)',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 8,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.05)',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(30, 30, 30, 0.9)',
          borderRadius: 6,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          fontSize: '0.75rem',
          padding: '8px 12px',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(4px)',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiSnackbarContent-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
          },
          '& .MuiTabs-indicator': {
            height: 3,
            borderRadius: '3px 3px 0 0',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            '& .MuiSvgIcon-root': {
              filter: 'drop-shadow(0 0 3px rgba(109, 158, 235, 0.3))',
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            '& .MuiSvgIcon-root': {
              filter: 'drop-shadow(0 0 3px rgba(109, 158, 235, 0.3))',
            },
          },
        },
      },
    },
  },
});

export default theme;