import { createClient, type QueryParams } from "next-sanity";

export const client = createClient({
  projectId: "5s8iyu5r",
  dataset: "production",
  apiVersion: "2024-07-01",
  useCdn: true,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  });
}
