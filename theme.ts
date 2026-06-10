import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    teal: Palette['primary'];
    lime: Palette['primary'];
    darkGreen: Palette['primary'];
    lightGreen: Palette['primary'];
    aqua: Palette['primary'];
  }

  interface PaletteOptions {
    teal?: PaletteOptions['primary'];
    lime?: PaletteOptions['primary'];
    darkGreen?: PaletteOptions['primary'];
    lightGreen?: PaletteOptions['primary'];
    aqua?: PaletteOptions['primary'];
  }
}

// Extend the Button interface if you want to use these colors in the "color" prop
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    teal: true;
    lime: true;
    darkGreen: true;
    lightGreen: true;
    aqua: true;
  }
}

const theme = createTheme({
  palette: {
    teal: {
      light: '#00b3a7',
      main: '#00857c',
      dark: '#005c54',
      contrastText: '#FEFEFE',
    },
    lime: {
      light: '#b1de63',
      main: '#a2d846',
      dark: '#90ca2b',
      contrastText: '#244200',
    },
    darkGreen: {
      main: '#6c9e00',
      dark: '#507500',
      contrastText: '#F7FFE7',
    },
    lightGreen: {
      main: '#d0ee59',
      dark: '#c5ea34',
      contrastText: '#425900',
    },
    aqua: {
      main: '#a4eac3',
      dark: '#82e3ae',
      contrastText: '#003d39',
    },
    error: {
      main: '#d32f2f',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#ed6c02',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#00857C',
      contrastText: '#FFFFFF',
    },
  },

  typography: {
    fontFamily: 'Inter, Outfit, sans-serif',
    h1: {
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
    },
    caption: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: 400,
    },
    button: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      textTransform: "none",
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 8,
  },

  shadows: [
    "none",
    "0 1px 3px rgba(0, 0, 0, 0.05)",
    "0 4px 12px rgba(0, 0, 0, 0.08)",
    "0 8px 20px rgba(0, 0, 0, 0.10)",
    "0 12px 28px rgba(0, 0, 0, 0.12)",
    "0 16px 40px rgba(0, 0, 0, 0.16)",
    ...Array(19).fill("0 16px 40px rgba(0, 0, 0, 0.16)"),
  ] as any,

  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

export default theme;