import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId, token } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
  token: token || "",
});

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
