/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://my2ls.com",
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 0.7,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
    transform: async (config: import('next-sitemap').IConfig, path: string) => {
        return {
            loc: path, // Absolute URL of the page
            lastmod: new Date().toISOString(), // Last modified date
            changefreq: "weekly", // Tells Google to check weekly
            priority: path === "/" ? 1.0 : 0.7, // Homepage gets highest priority
        };
    },
};
