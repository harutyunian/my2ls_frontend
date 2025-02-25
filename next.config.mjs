import createNextIntlPlugin from "next-intl/plugin";
import {getRequestConfig} from "next-intl/server";
const withNextIntl = createNextIntlPlugin('./src/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};
export default withNextIntl(nextConfig)
