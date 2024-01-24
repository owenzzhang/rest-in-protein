// import sanityClient from "@sanity/client";
import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qymvzee6",
  dataset: "ecommerce",
  apiVersion: "2023-10-01",
  useCdn: true,
  token: process.env.PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
