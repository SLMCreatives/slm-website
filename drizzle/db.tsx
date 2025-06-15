import "dotenv/config";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString =
  "postgresql://postgres.jrxdomwhwddttnkkofed:Manman@211091@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres";

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client);
