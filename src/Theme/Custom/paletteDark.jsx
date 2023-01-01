import { createTheme } from '@mui/material/styles';
const defaultTheme = createTheme({ palette: { mode: 'dark' } });

export const paletteDark = {
  ...defaultTheme.palette,
  primary: {
    main: '#212121',
  },
  sapray: {
    appBar: "#212121",
  },
}