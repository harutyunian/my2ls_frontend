import {notFound} from "next/navigation";
import {getRequestConfig} from "next-intl/server";

export const LOCALES = ['en','am'];

export default getRequestConfig(async (context)=>{
    const {requestLocale} = context;
    const locale = await requestLocale;
    if(!LOCALES.includes(locale as string)) notFound();
    return {
        messages: (await import(`../messages/${locale}.json`)).default,
    }
})