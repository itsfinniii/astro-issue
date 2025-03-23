import type { RobotsTxtOptions } from "astro-robots-txt";

const config: RobotsTxtOptions = {
    sitemap: true,
    host: "itsfinniii.com",
    transform(content) {
        return `# This sitemap was generated on ${new Date().toDateString()}.\n\n${content}`;
    },
    policy: [
        {
            userAgent: "Googlebot",
            allow: "*",
            crawlDelay: 3,
        },
        {
            userAgent: "*",
            allow: "*",
            crawlDelay: 10,
        },
    ],
};

export default config;
