interface ProjectPost {
    title: string;
    slug: string;
    date: string;

    content: string;

    thumbnail: ProjectPostThumbnail;

    tags: Tag[];
}

interface ProjectPostThumbnail {
    alt: string;
    thumbnailImageUrl: string;
}
