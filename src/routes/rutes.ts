
interface Route {
    name: string;
    path: string;
    child?: Route[];
}

export const MAIN_ROUTES = [
    {
        name: "Json",
        path: "/json",
    },
    {
        name: "CSS Formatter",
        path: "css",
        child: [
            {
                name: "CSS formatter",
                path: `css/scss-to-css-converter`
            }
        ]
    },
    {
        name: "Code Formatter and Beautifier",
        path: "/code-formatter",
    },
    {
        name: "Code Converters",
        path: "/code-formatter",
    },
    {
        name: "Data and File Converters",
        path: "/data-file-converters",
    },
    {
        name: "Code Minifiers",
        path: "/code-minifiers",
    },
    {
        name: "Regular Expression (Regex) Tools",
        path: "/regular-expression",
    },
    {
        name: "Encryption and Decryption Tools",
        path: "/encryption",
    },
    {
        name: "Image Editing and Optimization",
        path: "/image-editing",
    },
    {
        name: "Video and Audio Tools",
        path: "/video-audio-tools",
    },
    {
        name: "Front-End Development Tools",
        path: "/front-end-development-tools",
    },
    {
        name: "Web Scraping and Automation Tools",
        path: "/web-scraping-tools",
    },
    {
        name: "Performance Tools",
        path: "/performance-tools",
    },
    {
        name: "SEO and Analytics Tools",
        path: "/seo",
    },
    {
        name: "Command-Line Tools and Development Helpers",
        path: "/command-line",
    },
    {
        name: "Text and Document Tools",
        path: "/text",
    }
];

const searchRoute = (name: string, routes: Route[]): Route | null => {
    for (const route of routes) {
        if (route.name === name) {
            return route;
        }
        if (route.child) {
            const childRoute = searchRoute(name, route.child);
            if (childRoute) {
                return childRoute;
            }
        }
    }
    return null;
};

// Main function to get routes based on the name
export const getRoutes = (name: string, routes: Route[] = MAIN_ROUTES): Route | null => {
    return searchRoute(name, routes);
};