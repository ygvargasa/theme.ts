import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import fontFaces from "./fonts";

/* 
Este import es de las fuentes Inter y Outfit.
Colocarlo en un archivo CSS que se importe de manera directa a main.tsx

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap');
*/

declare module "@mui/material/styles" {
  interface Palette {
    teal: Palette["primary"];
    lime: Palette["primary"];
    darkGreen: Palette["primary"];
    lightGreen: Palette["primary"];
    darkTeal: Palette["primary"];
    aqua: Palette["primary"];
    neutral: Palette["grey"];
  }

  interface PaletteOptions {
    teal?: PaletteOptions["primary"];
    lime?: PaletteOptions["primary"];
    darkTeal?: PaletteOptions["primary"];
    darkGreen?: PaletteOptions["primary"];
    lightGreen?: PaletteOptions["primary"];
    aqua?: PaletteOptions["primary"];
    neutral?: PaletteOptions["grey"];
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
  palette,
  typography,

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
      styleOverrides: fontFaces,
    },
  },
});

export default theme;