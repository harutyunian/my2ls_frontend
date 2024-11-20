import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import GoogleAnalysticsConfig from "./components/GoogleAnalytics/GoogleAnalystics";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import lightTheme from "@/theme/light";
import {GOOGLE_ADSENSE_ID} from "@/constant/google-adsese";

// // @ts-ignore
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// // @ts-ignore
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  applicationName: "My tools",
  title: "All-in-One Online Tools",
  description:
    "Access a comprehensive set of online tools in one place! Convert CSS to SCSS, format JSON, convert images, view code, edit videos, and more. Perfect for developers, designers, and content creators. Free and easy to use!",
};

const globalStyles = (
  <GlobalStyles
    styles={{
      html: { margin: 0, padding: 0, boxSizing: "border-box" },
      a: { textDecoration: "none" },
    }}
  />
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <script async
                  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_ID}`}
                  crossOrigin="anonymous">

          </script>
      </head>
      <ThemeProvider theme={lightTheme}>
          <CssBaseline/>
          {globalStyles}
          <body>
          <Header/>
          {children}
          </body>
      </ThemeProvider>
      <GoogleAnalysticsConfig/>
      </html>
  );
}
