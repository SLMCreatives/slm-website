import { NextResponse } from "next/server";
import { writeToken } from "Sulaiman/app/sanity/env";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "5s8iyu5r",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const { name, email, comment, postId } = data;
  if (!name || !email || !comment || !postId) {
    return new Response("Invalid data", { status: 400 });
  }

  try {
    const newComment = await client.create({
      _type: "comments",
      name,
      email,
      comment,
      approved: true,
      post: {
        _type: "reference",
        _ref: postId,
      },
    });
    return NextResponse.json(
      { message: "Comment submitted", comments: newComment },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json(
      { message: "Could not submit comment", error },
      { status: 500 }
    );
  }
}
