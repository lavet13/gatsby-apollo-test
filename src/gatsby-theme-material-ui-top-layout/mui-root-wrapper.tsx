import * as React from 'react';
import { FC, useContext } from 'react';

import {
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material';

import { createTheme } from '@mui/material';

import { DarkModeContext } from '../contexts/dark-mode.context';
import theme from './theme';

type WrapRootElementProps = {
  children: React.ReactNode;
};

export const TopLayout: FC<WrapRootElementProps> = ({ children }) => {
  const { mode } = useContext(DarkModeContext);

  const adjustedTheme = React.useMemo(() => {
    console.log('theme', theme, mode);

    return createTheme({ ...theme, palette: { mode } });
  }, [mode]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={adjustedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
