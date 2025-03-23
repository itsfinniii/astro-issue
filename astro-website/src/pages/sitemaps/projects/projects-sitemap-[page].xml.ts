import type { APIRoute } from "astro";
import minifyXML from "minify-xml";

export function getStaticPaths() {
    const blogCount = 186;
    const pageCount = Math.ceil(blogCount / 100);

    const params = [];

    for (let i = 0; i < pageCount; i++) {
        params.push({ params: { page: i + 1 } });
    }

    return params;
}

export const GET: APIRoute = async ({ params, request }) => {
    const domain = "https://itsfinniii.com";
    const now = new Date();
    
    const pages: SitemapItem[] = [];

    for (let i = 0; i < 50; i++) {
        pages.push({
            url: `${domain}/page-${i + 1}`,
            lastModified: now.toISOString(),
            images: []
        })
    }
    
    const xml = `<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
    ${pages.map((page: SitemapItem) => (
        `<url>
        <loc>${domain}/${page.url}</loc>
        <lastmod>${now}</lastmod>
        ${(page.images !== undefined && page.images.length > 0) ? page.images.map((image: string) => (
            `<image:image><image:loc>${domain}/${image}</image:loc></image:image>`
        )).join('') : ``}
        </url>`
    )).join('')}
    </urlset>
    `

    return new Response(minifyXML(xml));
}
