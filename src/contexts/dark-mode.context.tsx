import React, { memo, useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';
import { modeVar } from '../gatsby-plugin-apollo/cache';

import { createContext, FC, PropsWithChildren } from 'react';
import { PaletteMode, useMediaQuery } from '@mui/material';

const toggleDarkMode = () => modeVar(modeVar() === 'light' ? 'dark' : 'light');

type DarkModeContextDefaultValues = {
  mode?: PaletteMode;
  toggleDarkMode: () => PaletteMode | undefined;
};

export const DarkModeContext = createContext<DarkModeContextDefaultValues>({
  mode: undefined,
  toggleDarkMode: () => undefined,
});

export const DarkModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const mode = useReactiveVar(modeVar);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    modeVar(prefersDarkMode ? 'dark' : 'light');
  }, []);

  const value = {
    mode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
