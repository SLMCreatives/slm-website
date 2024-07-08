/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET;
const token = process.env.SANITY_STUDIO_SECRET_TOKEN;

if (!projectId || !dataset) {
  throw new Error(
    "Missing environment variables: SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, SANITY_STUDIO_SECRET_TOKEN"
  );
}

export default defineCliConfig({
  api: { projectId, dataset, token },
});
