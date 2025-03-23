interface SitemapIndex {
    url: string;
    lastModified: string;
}

interface SitemapItem {
    url: string;
    lastModified: string;
    images?: string[];
}
