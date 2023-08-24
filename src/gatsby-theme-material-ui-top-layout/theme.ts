import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },

  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

export default theme;
