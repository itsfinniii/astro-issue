interface DirectusResponse<T> {
    data: T;
}

interface DirectusLoginResponse {
    access_token: string;
    expires: number;
    refresh_token: string;
}

interface DirectusLoginCache {
    access_token: string;
    expiresIn: number;
    expiresAt: number;
    refresh_token: string;
}



interface DirectusThumbnail {
    alt: string;
    image: {
        filename_download: string;
        filename_disk: string;
    }
}

interface DirectusBlogResponse {
    Blogs: DirectusBlogPost[];
}

interface DirectusBlogPost {
    id: string;
    status: string;
    date_created: string;
    date_updated: string;
    title: string;
    slug: string;
    content: string;
    date: string;
    tags: DirectusTags[];
    thumbnail: DirectusThumbnail;
}

interface DirectusTags {
    Tags_id: {
        id: string;
        text: string;
        code: string;
        color: string;
    }
}