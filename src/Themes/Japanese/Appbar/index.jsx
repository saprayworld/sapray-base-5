import { createTheme } from '@mui/material/styles';
// import { palette } from '../palette';

const defaultTheme = createTheme();

export const Appbar = (palette) => ({
  MuiAppBar: {
    variants: [
      {
        props: { variant: 'sapray' },
        style: {
          transition: ".3s ease",
          backgroundColor: palette.primary.main,
          // backgroundColor: "#212121",
          color: defaultTheme.palette.getContrastText(palette.primary.main),
        },
      },
      {
        props: { variant: 'sapray-tran' },
        style: {
          transition: ".3s ease",
          backgroundColor: '#0000',
          paddingTop: "10px",
          color: defaultTheme.palette.getContrastText(palette.background.default),
        },
      },
    ],
  },
})