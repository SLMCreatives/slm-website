import { NextResponse } from "next/server";
import { z } from "zod";
import { appendLead, isSheetsConfigured } from "@/lib/google-sheets";

// The google-auth-library uses Node APIs — keep this route on the Node runtime.
export const runtime = "nodejs";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  message: z.string().trim().max(2000).optional().default(""),
  // honeypot — real users leave this empty
  company: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input." },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;
  const lead = {
    name,
    email,
    message,
    submittedAt: new Date().toISOString(),
  };

  // Append the lead to Google Sheets via a service account. Until the env vars
  // (GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY / GOOGLE_SHEET_ID) are
  // set, the lead is logged server-side so the form still works end-to-end.
  if (isSheetsConfigured()) {
    try {
      await appendLead(lead);
    } catch (error) {
      console.error("Failed to append lead to Google Sheet:", error);
      return NextResponse.json(
        { error: "We couldn't save your message. Please try again." },
        { status: 502 },
      );
    }
  } else {
    console.info("New lead (no sheet configured yet):", lead);
  }

  return NextResponse.json({ ok: true });
}
