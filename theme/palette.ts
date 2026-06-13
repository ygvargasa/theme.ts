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

const palette = {
  common: {
    black: colors.neutral[900],
    white: colors.neutral[50],
  },
  text: {
    primary: colors.neutral[900],
    secondary: colors.neutral[700],
    disabled: "#808080CC"
  },
  background: {
    default: colors.neutral[50],
    paper: colors.neutral[50],
  },
  divider: colors.neutral["100"],

  primary: {
    main: colors.teal[300],
    contrastText: colors.neutral["50"],
  },
  secondary: {
    main: colors.lime[300],
    contrastText: colors.neutral["50"],
  },
  success: {
    light: colors.lime[400],
    main: colors.status.success,
    dark: colors.lime[600],
    contrastText: colors.neutral["50"],
  },
  info: {
    light: "#1DC9BE",
    main: colors.status.info,
    dark: colors.teal[400],
    contrastText: colors.neutral["50"],
  },
  warning: {
    light: "#FFA436",
    main: colors.status.warning,
    dark: "#ED6C02",
    contrastText: colors.neutral["50"],
  },
  error: {
    main: colors.status.error,
    dark: "#A1000A",
    contrastText: colors.neutral["50"],
  },

  turquoise: {
    light: colors.teal[100],
    main: colors.teal[300],
    dark: colors.teal[400],
    contrastText: "#002926",
  },
  teal: {
    light: colors.teal[300],
    main: colors.teal[400],
    dark: colors.teal[500],
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
    dark: "#A5C331",
    contrastText: "#394700",
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
};

export default palette;
