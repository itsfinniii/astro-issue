import { createDirectus, graphql, rest, staticToken } from '@directus/sdk';

export async function getClient() {
    const client = createDirectus(import.meta.env.DIRECTUS_HOST)
        .with(staticToken(import.meta.env.DIRECTUS_STATICTOKEN))
        .with(graphql());

    return client;
}
