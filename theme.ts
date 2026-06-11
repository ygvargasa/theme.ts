import { createTheme } from "@mui/material/styles";

/* 
Este import es de las fuentes Inter y Outfit.
Colocarlo en un archivo CSS que se importe de manera directa a main.tsx

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap');
*/

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

const colors = {
  teal: {
    50: "#F4FFFE",
    100: "#DDF8F6",
    200: "#A2EAC3", // aqua
    300: "#00B3A7", // turquoise
    400: "#00857C",
    500: "#004F4A",
  },

  lime: {
    50: "#F3FFD1",
    100: "#E8F8C7",
    200: "#D0ED58", // light green
    300: "#A3D848", // lima
    400: "#92C51E",
    500: "#6C9E00", // dark green
    600: "#4E7300",
    700: "#244200",
  },

  neutral: {
    50: "#FEFEFE",
    100: "#E6E6E6",
    200: "#CCCCCC",
    300: "#B3B3B3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4D4D4D",
    800: "#333333",
    900: "#1A1A1A",
  },

  status: {
    error: "#D92D20",
    warning: "#F79009",
    success: "#6C9E00",
    info: "#00B3A7",
  },
};

const theme = createTheme({
  palette: {
     common: {
      black: colors.neutral[900],
      white: colors.neutral[50],
    },
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[700],
      disabled: "#808080CC"
    },
    teal: {
      light: colors.teal[100],
      main: colors.teal[300],
      dark: colors.teal[400],
      contrastText: colors.neutral[50],
    },
    darkTeal: {
      light: "#007A72",
      main: colors.teal[500],
      dark: "#002926",
      contrastText: colors.neutral[50],
    },
    aqua: {
      light: colors.teal[50],
      main: colors.teal[200],
      dark: "#61C38D",
      contrastText: colors.teal[500],
    },
    lime: {
      light: colors.lime[100],
      main: colors.lime[300],
      dark: colors.lime[400],
      contrastText: colors.lime[700],
    },
    lightGreen: {
      light: colors.lime[50],
      main: colors.lime[200],
      dark: "#B7D832",
      contrastText: "#425900",
    },
    darkGreen: {
      light: colors.lime[500],
      main: colors.lime[600],
      dark: colors.lime[700],
      contrastText: colors.neutral[50],
    },
    neutral: {
      50: colors.neutral[50],
      100: colors.neutral[100],
      200: colors.neutral[200],
      300: colors.neutral[300],
      400: colors.neutral[400],
      500: colors.neutral[500],
      600: colors.neutral[600],
      700: colors.neutral[700],
      800: colors.neutral[800],
      900: colors.neutral[900],
    },
  },

  typography: {
    fontFamily: "Inter, Volksans, Getboreg, Outfit, sans-serif",
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

  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Getboreg";
          font-style: regular;
          font-weight: 400;
          src: url("/fonts/getboreg.woff2") format("woff2");
        }
          
        @font-face {
          font-family: "Volksans";
          font-style: light;
          font-weight: 300;
          src: url("/fonts/volksans-Light.woff2") format("woff2");
        }
        @font-face {
          font-family: "Volksans";
          font-style: regular;
          font-weight: 400;
          src: url("/fonts/volksans-Normal.woff2") format("woff2");
        }
        @font-face {
          font-family: "Volksans";
          font-style: medium;
          font-weight: 500;
          src: url("/fonts/volksans-Regular.woff2") format("woff2");
        }
        @font-face {
          font-family: "Volksans";
          font-style: semibold;
          font-weight: 600;
          src: url("/fonts/volksans-SemiBold.woff2") format("woff2");
        }
        @font-face {
          font-family: "Volksans";
          font-style: bold;
          font-weight: 700;
          src: url("/fonts/volksans-Bold.woff2") format("woff2");
        }
        @font-face {
          font-family: "Volksans";
          font-style: black;
          font-weight: 800;
          src: url("/fonts/volksans-Black.woff2") format("woff2");
        }
      `,
    },
  },
});

export default theme;
