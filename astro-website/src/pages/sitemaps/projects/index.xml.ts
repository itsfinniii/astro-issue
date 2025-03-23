import type { APIRoute } from "astro";
import minifyXML from "minify-xml";

export const GET: APIRoute = async ({ params, request }) => {
    const domain = "https://itsfinniii.com";
    const now = new Date();
    
    const pages: number[] = [];
    const pageCount = Math.ceil(186 / 100);

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map((page: number) => (
        `<sitemap><loc>${domain}/sitemaps/projects/projects-sitemap-${page}.xml</loc><lastmod>${now.toISOString()}</lastmod></sitemap>`
    )).join('')}
    </sitemapindex>`

    return new Response(minifyXML(xml));
}
