import darkScrollbar from "@mui/material/darkScrollbar";

import { paletteLight } from './paletteLight';
import { paletteDark } from './paletteDark';
import { Appbar } from "./Appbar";
import { Toolbar } from "./Toolbar";
import { Card } from "./Card";
import { Button } from "./Button";

export const japaneseThemeLight = {
  palette: {
    // mode: 'light',
    ...paletteLight,
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      '"Noto Sans Thai"',
      '"Noto Sans JP"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif',
    ].join(','),
  },
  components: {
    ...Appbar(paletteLight),
    ...Toolbar,
    ...Card,
    ...Button,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          // color: "#FFF",
          backgroundColor: "#171941",
          // fontFamily: '"Poppins", sans-serif',
        },
      }
    }
  }
};

export const japaneseThemeDark = {
  ...japaneseThemeLight,
  palette: {
    // mode: 'dark',
    ...paletteDark,
  },
  components: {
    ...japaneseThemeLight.components,
    ...Appbar(paletteDark),
  }
};