# SLM Creatives

Marketing site for **SLM Creatives** — a digital marketing agency founded by three
specialists: **Sulaiman** (Brand), **Zahin** (Marketing Technology) and **Abel**
(Social). Together we create stories for companies through creative design,
digital marketing and social.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) primitives
- [Framer Motion](https://www.framer.com/motion/) for motion
- [Zod](https://zod.dev) for API validation

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.

## Lead form → Google Sheet

The contact form posts to `POST /api/lead`, which validates the payload and
appends it to a Google Sheet via the **Sheets API v4** using a service account.

Setup:

1. In Google Cloud, create a **service account** and enable the **Google Sheets API**.
2. Create a JSON key for it.
3. **Share your Google Sheet** with the service account's email as an **Editor**.
4. Set the env vars (see `.env.example`):

```bash
# .env.local
GOOGLE_SERVICE_ACCOUNT_EMAIL="...@....iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID="1ZVq...ryGk"   # the id from the sheet URL
```

Rows are written to the first tab as `Timestamp | Name | Email | Message`.

Until the vars are set, leads are logged to the server console so the form still
works end to end. The API also drops submissions that fill a hidden `company`
honeypot field (basic bot protection).
