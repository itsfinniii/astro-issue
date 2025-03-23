import { getClient } from "./_cms";

export async function getAllBlogs(): Promise<BlogPost[]> {
    const directusClient = await getClient();
    
    const query: DirectusBlogResponse = await directusClient.query(
        `query {
            Blogs (filter: { status: { _eq: "published" } } sort: ["-date"] ) {
                id,
                status,
                date_created,
                date_updated,
                title,
                slug,
                content,
                date,
                thumbnail {
                    alt,
                    image {
                        filename_download,
                        filename_disk
                    }
                },
                tags {
                    Tags_id {
                        id,
                        text,
                        code,
                        color
                    }
                }
            }
        }`
    )

    const blogs: BlogPost[] = [];

    query.Blogs.forEach((item) => {
        const blog: BlogPost = {
            id: item.id,
            title: item.title,
            date: item.date,
            slug: item.slug,
            content: item.content,
            thumbnail: {
                thumbnailImageUrl: `${import.meta.env.DIRECTUS_HOST}/assets/${item.thumbnail.image.filename_disk}`, 
                alt: item.thumbnail.alt
            },
            tags: [],
        }

        item.tags.forEach((tag) => {
            blog.tags.push({
                id: tag.Tags_id.code,
                color: tag.Tags_id.color,
                text: tag.Tags_id.text
            })
        })
        
        blogs.push(blog);
    });

    return blogs;
}