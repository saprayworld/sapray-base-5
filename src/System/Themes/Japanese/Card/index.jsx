// MuiCard
// import { palette } from '../palette';

import { CardContent } from "./Content";

export const Card = {
  ...CardContent,
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundImage: "unset",
        backgroundColor: "#00000088",
        border: "2px solid #344675",
        color: "#ffffffb3",
      }
    },
    variants: [
      {
        props: { variant: 'sapray' },
        style: {
          backgroundImage: "unset",
          backgroundColor: "#00000088",
          border: "2px solid #344675",
          color: "#ffffffb3",
        },
      },
    ],
  },
}