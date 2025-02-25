import createMiddleware from "next-intl/middleware";
import {LOCALES} from "@/request";

export default createMiddleware({
    locales: LOCALES,
    defaultLocale: 'en'
})

const combinedLocalsPaths = LOCALES.join("|")
export const config = {
    matcher: ['/', `/(${combinedLocalsPaths})/:path*`]
}