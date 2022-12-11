export const CardContent = {
  MuiCardContent: {
    root: ({ ownerState }) => ({
      ...(ownerState.custom === 'sapray' && {
        paddingBottom: "16px !important",
        '$:last-child': {
          padding: "16px",
        }
      }),
    }),
    variants: [
      {
        props: { variant: 'sapray' },
        style: {
          paddingBottom: "16px !important",
          // backgroundColor: "#00000088",
          // border: "2px solid #344675",
          // color: "#ffffffb3",
        },
      },
    ],
  },
}