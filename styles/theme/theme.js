import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/500.css';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#263238',
    },
    secondary: {
      main: '#d50000',
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default theme;