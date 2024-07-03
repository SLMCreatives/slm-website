import { NextResponse } from "next/server";
import { client } from "Sulaiman/app/sanity/lib/client";

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
      { message: "Comment submitted", comment: newComment },
      { status: 201 }
    );
  } catch (error) {
    NextResponse.json(
      { message: "Could not submit comment", error },
      { status: 500 }
    );
  }
}
