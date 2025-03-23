import type { APIRoute } from "astro";
import minifyXML from "minify-xml";

export const GET: APIRoute = ({ params, request }) => {
    let contents = ``;

    const domain = 'https://itsfinniii.com';
    const sitemapIndices: SitemapIndex[] = [
        {
            url: "/sitemaps/pages/index.xml",
            lastModified: new Date().toISOString()
        },
        {
            url: "/sitemaps/blogs/index.xml",
            lastModified: new Date().toISOString()
        },
        {
            url: "/sitemaps/projects/index.xml",
            lastModified: new Date().toISOString()
        },
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapIndices.map((index: SitemapIndex) => (
        `<sitemap><loc>${domain}/${index.url}</loc><lastmod>${index.lastModified}</lastmod></sitemap>`
    )).join('')}
    </sitemapindex>`

    return new Response(minifyXML(xml));
}