"use client";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F7F8FA", // Gentle light gray for a soft, modern background
      paper: "#FFFFFF", // Pure white for cards and surfaces
    },
    primary: {
      main: "#3A86FF", // Vibrant blue for a bold primary accent
      contrastText: "#FFFFFF", // Clean white text on buttons
    },
    secondary: {
      main: "#FF006E", // Electric pink for exciting secondary highlights
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#212529", // Deep, modern charcoal for readability
      secondary: "#6C757D", // Muted gray for subtle emphasis
    },
    info: {
      main: "#00B4D8", // Fresh cyan for informational highlights
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#06D6A0", // Bright green for success messages
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFD166", // Warm gold for warnings
      contrastText: "#212529",
    },
    error: {
      main: "#EF476F", // Bold pinkish-red for errors
      contrastText: "#FFFFFF",
    },
    divider: "#E5EAF0", // Ultra-light gray for unobtrusive dividers
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif", // Modern, clean typography
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#212529",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
      color: "#212529",
    },
    body1: {
      fontSize: "1rem",
      color: "#212529",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#6C757D",
    },
    button: {
      fontWeight: 500,
      textTransform: "capitalize", // Softer look for buttons
    },
  },
  shape: {
    borderRadius: 12, // More rounded corners for a friendly, modern feel
  },
});
export default lightTheme;
