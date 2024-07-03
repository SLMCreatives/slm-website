import "server-only";

import { createClient, type QueryParams } from "next-sanity";

export const client = createClient({
  projectId: "5s8iyu5r",
  dataset: "production",
  apiVersion: "2024-07-01",
  token:
    "skyOAZ5tY7xp8VDchlkxfjQ4Y8rZAS4QGj6MOVpQOotaarTNsFCXdk5JNWwoj5MAODx6RUqCpqSWzpuzMeTszA6tKqHQjN7bF6zPg1g7DOwd2wdkPXKWPbtiMjEmzrAqfWiQcUJCe222u4ohanFJiPl1I34MQZ3RnO6CmvaETpw1Kyc15iFX",
  useCdn: false,
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
