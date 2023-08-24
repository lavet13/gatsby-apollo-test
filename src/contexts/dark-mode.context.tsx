import * as React from 'react';
import { useReactiveVar } from '@apollo/client';
import { modeVar } from '../gatsby-plugin-apollo/cache';

import { createContext, FC, PropsWithChildren } from 'react';
import { PaletteMode } from '@mui/material';

const toggleDarkMode = () => modeVar(modeVar() === 'light' ? 'dark' : 'light');

type DarkModeContextDefaultValues = {
  mode: PaletteMode;
  toggleDarkMode: () => PaletteMode;
};

export const DarkModeContext = createContext<DarkModeContextDefaultValues>({
  mode: 'light',
  toggleDarkMode: () => 'light',
});

export const DarkModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const mode = useReactiveVar(modeVar);
  console.log(mode);

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
