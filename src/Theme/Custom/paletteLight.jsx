import { createTheme } from '@mui/material/styles';
const defaultTheme = createTheme({ palette: { mode: 'light' } });

export const paletteLight = {
  ...defaultTheme.palette,
  primary: {
    main: '#FFB6C1',
  },
  // sapray: {
  //   appBar: "#1d8cf8",
  // },
}