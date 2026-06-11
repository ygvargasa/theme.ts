import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    teal: Palette['primary'];
    lime: Palette['primary'];
    darkGreen: Palette['primary'];
    lightGreen: Palette['primary'];
    darkTeal: Palette['primary'];
    aqua: Palette['primary'];
    neutral: Palette['grey'];
  }

  interface PaletteOptions {
    teal?: PaletteOptions['primary'];
    lime?: PaletteOptions['primary'];
    darkTeal?: PaletteOptions['primary'];
    darkGreen?: PaletteOptions['primary'];
    lightGreen?: PaletteOptions['primary'];
    aqua?: PaletteOptions['primary'];
    neutral?: PaletteOptions['grey'];
  }
}

// Extend the Button interface if you want to use these colors in the "color" prop
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    teal: true;
    lime: true;
    darkTeal: true;
    darkGreen: true;
    lightGreen: true;
    aqua: true;
    neutral: true;
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
    darkTeal: {
      light: '#007a72',
      main: '#00524c',
      dark: '#002926',
      contrastText: '#FEFEFE',
    },
    darkGreen: {
      main: '#6c9e00',
      dark: '#507500',
      contrastText: '#FEFEFE',
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
    neutral: {
      50: '#FEFEFE',
      100: '#E6E6E6',
      200: '#CCCCCC',
      300: '#B3B3B3',
      400: '#999999',
      500: '#808080',
      600: '#666666',
      700: '#4D4D4D',
      800: '#333333',
      900: '#1A1A1A',
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