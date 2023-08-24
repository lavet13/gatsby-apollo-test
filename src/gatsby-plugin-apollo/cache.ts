import { makeVar } from '@apollo/client';
import { PaletteMode } from '@mui/material';

export const modeVar = makeVar<PaletteMode>('light');
