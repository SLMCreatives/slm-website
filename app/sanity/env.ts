export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || "2024-06-25";

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  "Missing environment variable: SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID"
);

export const token = assertValue(
  process.env.SANITY_STUDIO_SECRET_TOKEN,
  "Missing environment variable: SANITY_STUDIO_SECRET_TOKEN"
);

export const writeToken = assertValue(
  process.env.SANITY_API_WRITE_TOKEN,
  "Missing environment variable: SANITY_API_WRITE_TOKEN"
);

export const useCdn = true;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
