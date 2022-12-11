// sapray-contained

export const Button = {
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.variant === 'contained' &&
          ownerState.custom === 'pill' && {
          padding: "11px 40px",
          flexDirection: "column",
          textTransform: "unset",
          '& i': {
            display: "block",
            fontSize: "20px",
            lineHeight: "60px"
          }
        }),
      }),
    },
    variants: [
      {
        props: { variant: 'sapray-pills' },
        style: {
          padding: "11px 40px",
        },
      },
    ],
  },
}