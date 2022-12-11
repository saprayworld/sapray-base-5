// MuiCard
// import { palette } from '../palette';

import { CardContent } from "./Content";

export const Card = {
  ...CardContent,
  MuiCard: {
    variants: [
      {
        props: { variant: 'sapray' },
        style: {
          backgroundColor: "#00000088",
          border: "2px solid #344675",
          color: "#ffffffb3",
        },
      },
    ],
  },
}