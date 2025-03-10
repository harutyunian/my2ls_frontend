import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Header from "./components/Header/Header";
import GoogleAnalysticsConfig from "./components/GoogleAnalytics/GoogleAnalystics";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import lightTheme from "@/theme/light";
import { GOOGLE_ADSENSE_ID } from "@/constant/google-adsese";
import { KEYWORDS } from "@/constant/seo/keywords.en";

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
    params,
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  return (
    <html lang={params.locale}>
    <Head>
      <title>
        My2LS - All-in-One Online Tools for Developers and Tech Enthusiasts
      </title>
      <meta name="keywords" content={`${KEYWORDS.join(", ")}`}/>
      <meta name="google-adsense-account" content="ca-pub-2937649825824504"/>
      <meta http-equiv="Content-Security-Policy"
            content="default-src
            'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com;
             style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com
              https://fonts.googleapis.com;
              script-src 'self' https://cdn.jsdelivr.net;
              font-src 'self' https://cdnjs.cloudflare.com https://fonts.googleapis.com;
              worker-src 'self' blob:"
      />
      <meta
          name="description"
          content="Explore My2LS: your ultimate platform for free online tools. Access code editors, JSON processors, converters, formatters, and more. Simplify your workflow today!"
      />
      <meta
          name="keywords"
          content="online tools, code editors, JSON processors, free developer tools, converters, formatters, productivity tools"
      />
      <meta name="author" content="My2LS"/>
      <meta name="robots" content="index, follow"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://my2ls.com/"/>
      <meta
          property="og:title"
          content="My2LS - All-in-One Online Tools for Developers and Tech Enthusiasts"
      />
      <meta
          property="og:description"
          content="Discover a wide range of free online tools for developers and tech enthusiasts. From code editors to converters, streamline your workflow with ease!"
      />
      {/*<meta property="og:image" content="https://my2ls.com/assets/og-image.jpg">*/}
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="canonical" href="https://my2ls.com/"/>
      <meta name="theme-color" content="#ffffff"/>

      <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_ID}`}
          crossOrigin="anonymous"
      ></script>
    </Head>
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
