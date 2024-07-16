export const dynamic = "force-dynamic";
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });
    const data = await req.json();
    const prompt = `
        Generate a childrens story poem. The poem must rhyme and have 12 lines in 3 paragraphs. Last 4 lines of the poem must include a lesson learnt.
        poem of 16 lines. Localise to Malaysia context. 

        The first line is:
        ${data.recipeText}
        `;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const poem = await response.text;

    return NextResponse.json({ poem: poem });
  } catch (error) {
    console.error(error);
  }
}
