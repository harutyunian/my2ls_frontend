"use client";
//initial config for google analystics

import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_TRACKING_ID } from "@/constant/google-analytics";

export default function GoogleAnalysticsConfig() {
  return <GoogleAnalytics gaId={GA_TRACKING_ID} />;
}
