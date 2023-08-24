import * as React from 'react';
import { FC, useContext } from 'react';

import {
  CssBaseline,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material';

import { createTheme } from '@mui/material';

import { DarkModeContext } from '../contexts/dark-mode.context';
import theme from './theme';

type WrapRootElementProps = {
  element: React.ReactNode;
};

export const TopLayout: FC<WrapRootElementProps> = ({ element }) => {
  const { mode } = useContext(DarkModeContext);

  const adjustedTheme = createTheme({ palette: { mode: 'dark' } });

  console.log('theme', theme, mode);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={adjustedTheme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
