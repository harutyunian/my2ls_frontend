"use client";
//initial config for google analystics
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { pageview } from "../../../utils/gtga";
import { GA_TRACKING_ID } from "@/constant/google-analytics";
export default function GoogleAnalystics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
    </>
  );
}
