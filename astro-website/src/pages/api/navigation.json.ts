import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
    const navigation: Navigation = {
        columns: [
            {
                title: "Pages",
                links: [
                    {
                        text: "Home",
                        url: "/"
                    },
                    {
                        text: "Blogs",
                        url: "/blogs"
                    },
                    {
                        text: "Projects",
                        url: "/projects"
                    },
                ]
            },
            {
                title: "About",
                links: [
                    {
                        text: "Now",
                        url: "/now"
                    }
                ]
            }
        ]
    } 
    
    return new Response(
        JSON.stringify(navigation)
    );
};