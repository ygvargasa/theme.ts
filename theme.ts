import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
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
      fontWeight: 600,
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

  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#FEFEFE", // #F7F7F7
          paper: "#FFFFFF",
        },
        text: {
          primary: "#1A1A1A",
          secondary: "#666666",
          disabled: "#999999",
        },
        primary: {
          main: "#A3D848",
          light: "#D0ED58",
          dark: "#6C9E00",
          contrastText: "#1A1A1A",
        },
        secondary: {
          main: "#00B3A7",
          light: "#A2EAC3",
          dark: "#009990",
          contrastText: "#FFFFFF",
        },
        error: {
          main: "#D92D20",
          light: "#FEE4E2",
          contrastText: "#FFFFFF",
        },
        warning: {
          main: "#F79009",
          light: "#FEF0C7",
          contrastText: "#1A1A1A",
        },
        success: {
          main: "#6C9E00",
          light: "#EAF7D6",
          contrastText: "#FFFFFF",
        },
        info: {
          main: "#00B3A7",
          light: "#E0F7F5",
          contrastText: "#FFFFFF",
        },
        divider: "#E6E6E6",
      },
    },
    dark: {
      palette: {
        background: {
          default: "#1A1A1A",
          paper: "#333333",
        },
        text: {
          primary: "#FEFEFE",
          secondary: "#999999",
          disabled: "#CCCCCC",
        },
        primary: {
          main: "#A3D848",
          light: "#D0ED58",
          dark: "#6C9E00",
          contrastText: "#1A1A1A",
        },
        secondary: {
          main: "#00B3A7",
          light: "#A2EAC3",
          dark: "#009990",
          contrastText: "#FFFFFF",
        },
        error: {
          main: "#D92D20",
          light: "#FEE4E2",
          contrastText: "#FFFFFF",
        },
        warning: {
          main: "#F79009",
          light: "#FEF0C7",
          contrastText: "#1A1A1A",
        },
        success: {
          main: "#6C9E00",
          light: "#EAF7D6",
          contrastText: "#FFFFFF",
        },
        info: {
          main: "#00B3A7",
          light: "#E0F7F5",
          contrastText: "#FFFFFF",
        },
        divider: "#E6E6E6",
      },
    },
  },
});

export default theme;