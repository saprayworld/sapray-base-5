import { createTheme } from '@mui/material/styles';
const defaultTheme = createTheme({ palette: { mode: 'dark' } });

export const paletteDark = {
  ...defaultTheme.palette,
  primary: {
    main: '#1d8cf8',
  },
  sapray: {
    appBar: "#1d8cf8",
  },
}