// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = `*[_type == "post" && !(_id in path("drafts.**")) ]{title, body, author->, slug, excerpt, date, mainImage, publishedAt, categories[]->, category->}| order(publishedAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`;
