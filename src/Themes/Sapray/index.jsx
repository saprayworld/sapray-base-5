import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme } from '@mui/material/styles';

import { paletteLight } from './paletteLight';
import { paletteDark } from './paletteDark';
import { Appbar } from "./Appbar";
import { Toolbar } from "./Toolbar";

export const defaultTheme = createTheme({});

export const saprayThemeLight = {
  palette: {
    mode: 'light',
    ...paletteLight,
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      // '"Noto Sans Thai"',
      '"Noto Sans JP"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif',
    ].join(','),
  },
  components: {
    ...Appbar(paletteLight),
    ...Toolbar,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          // transition: ".3s ease",
          // color: "#FFF",
          // backgroundColor: "#171941",
          // fontFamily: '"Poppins", sans-serif',
        },
      }
    }
  }
};

export const saprayThemeDark = {
  ...saprayThemeLight,
  palette: {
    mode: 'dark',
    ...paletteDark,
  },
  components: {
    ...saprayThemeLight.components,
    ...Appbar(paletteDark),
  }
};