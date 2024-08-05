// ./src/sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = `*[_type == "post" && !(_id in path("drafts.**")) ]{title, body, author->, slug, excerpt, date, mainImage, likes, publishedAt, categories[]->, category->}| order(publishedAt desc)`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`;

export const PRODUCT_QUERY = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    sku,
    description,
    priceCurrency,
    price,
    image,
    paymentUrl,
    instruction,
    slug,
}`;
