import { getClient } from "./_cms";

export async function getLastNow(): Promise<Now> {
    const directusClient = await getClient();

    const query = await directusClient.query(
        `query {
            Now (filter: { status: { _eq: "published" } } sort: ["-date_created"], limit: 1 ) {
                id,
                status,
                date_created,
                date_updated,
                date,
                content,
            }
        }`
    )

    const now: Now = {
        date: query.Now[0].date,
        content: query.Now[0].content
    }

    return now;
}