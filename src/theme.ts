// theme.ts
import { createTheme, Theme } from '@mui/material/styles';
import { useState, useMemo } from 'react';

export const useMode = (): [Theme, () => void] => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#FFD700', // Gold
          },
          secondary: {
            main: '#000000', // Black
          },
          background: {
            default: mode === 'light' ? '#FFFFFF' : '#121212', // Light and Dark backgrounds
          },
          text: {
            primary: mode === 'light' ? '#212121' : '#FFFFFF',
          },
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleColorMode];
};
