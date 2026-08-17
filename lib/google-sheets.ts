import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
// First sheet tab, columns A–D: Timestamp, Name, Email, Message.
const RANGE = "A:D";

export type Lead = {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
};

function readConfig() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  // Vercel/.env stores the PEM as one line with escaped "\n"; restore them.
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();
  // Be forgiving if an inline comment or stray whitespace slips into the id.
  const sheetId = process.env.GOOGLE_SHEET_ID?.split(/\s/)[0].trim();
  return { email, key, sheetId };
}

export function isSheetsConfigured() {
  const { email, key, sheetId } = readConfig();
  return Boolean(email && key && sheetId);
}

function getClient(email: string, key: string) {
  return new JWT({ email, key, scopes: SCOPES });
}

/** Non-destructive check: confirms auth + access + a valid id, returns tab names. */
export async function verifySheetAccess() {
  const { email, key, sheetId } = readConfig();
  if (!email || !key || !sheetId) {
    throw new Error("Google Sheets env vars are not fully set.");
  }
  const client = getClient(email, key);
  const res = await client.request<{
    properties?: { title?: string };
    sheets?: { properties?: { title?: string } }[];
  }>({
    url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}`,
    params: { fields: "properties.title,sheets.properties.title" },
  });
  return {
    title: res.data.properties?.title,
    tabs: res.data.sheets?.map((s) => s.properties?.title).filter(Boolean),
  };
}

/** Appends a lead as a new row on the first tab. */
export async function appendLead(lead: Lead) {
  const { email, key, sheetId } = readConfig();
  if (!email || !key || !sheetId) {
    throw new Error("Google Sheets env vars are not fully set.");
  }
  const client = getClient(email, key);
  await client.request({
    url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(
      RANGE,
    )}:append`,
    method: "POST",
    params: {
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
    },
    data: {
      values: [[lead.submittedAt, lead.name, lead.email, lead.message]],
    },
  });
}
