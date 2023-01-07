// import { palette } from '../palette';

export const Toolbar = {
  MuiToolbar: {
    variants: [
      {
        props: { variant: 'sapray' },
        style: {
          // minHeight: 74,
          // paddingLeft: 0,
          // paddingRight: 0, 
        },
      },
      {
        props: { variant: 'sapray-transfer' },
        style: {
          minHeight: 77,
          // paddingLeft: 0,
          // paddingRight: 0, 
        },
      },
      {
        props: { variant: 'sapray-tran' },
        style: {
          paddingTop: "10px",
          minHeight: 74,
        },
      },
    ],
  },
}