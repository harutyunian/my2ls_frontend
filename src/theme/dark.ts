"use client";
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0D1117", // Soft dark background for the overall app
      paper: "#161B22", // Slight contrast for surfaces like cards
    },
    text: {
      primary: "#C9D1D9", // Soft white for primary text
      secondary: "#8B949E", // Muted gray for secondary text
    },
    primary: {
      main: "#58A6FF", // Vibrant blue for primary buttons or highlights
      contrastText: "#FFFFFF", // Text color on primary
    },
    secondary: {
      main: "#F78166", // Warm orange for secondary actions or highlights
      contrastText: "#FFFFFF", // Text color on secondary
    },
    success: {
      main: "#34D399", // Cool green for success messages
    },
    warning: {
      main: "#FACC15", // Yellow-gold for warnings
    },
    error: {
      main: "#F85149", // Bright red for errors
    },
    info: {
      main: "#A5D6FF", // Light blue for informational messages
    },
    divider: "#30363D", // Subtle divider color
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif", // Clean, modern font
    h1: {
      fontWeight: 700,
      fontSize: "2.4rem",
      color: "#FFFFFF", // Ensure clear visibility for headers
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#C9D1D9",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.8rem",
      color: "#C9D1D9",
    },
    body1: {
      fontSize: "1rem",
      color: "#C9D1D9",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#8B949E",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#161B22", // Matching header with the dark mode palette
          color: "#C9D1D9", // Text color for better contrast
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", // Subtle shadow for depth
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px", // Slightly rounded for modern aesthetics
          textTransform: "none", // Avoid uppercase text for readability
        },
        containedPrimary: {
          backgroundColor: "#58A6FF",
          "&:hover": {
            backgroundColor: "#4095E4", // Slightly darker hover effect
          },
        },
        containedSecondary: {
          backgroundColor: "#F78166",
          "&:hover": {
            backgroundColor: "#E66C4D", // Slightly darker hover effect
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#FFFFFF", // Bright white for better readability in headers
        },
      },
    },
  },
});

export default darkTheme;
