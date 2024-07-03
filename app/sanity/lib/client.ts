import "server-only";

import { createClient, type QueryParams } from "next-sanity";

export const client = createClient({
  projectId: "5s8iyu5r",
  dataset: "production",
  apiVersion: "2024-07-01",
  token: process.env.SANITY_SECRET_TOKEN,
  useCdn: true,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
      tags,
    },
  });
}
