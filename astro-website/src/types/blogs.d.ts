interface BlogPost {
    id: string;

    title: string;
    slug: string;
    date: string;

    content: string;

    thumbnail: BlogPostThumbnail;

    tags: Tag[];
}

interface BlogPostThumbnail {
    alt: string;
    thumbnailImageUrl: string;
}

interface LastBlogPostsProps {
    title: string;

    date: string;
    url: string;

    description: string;
    thumbnail: BlogPostThumbnail;
}
