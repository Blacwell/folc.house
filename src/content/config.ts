import { z, defineCollection } from "astro:content";

const articleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    category: z.string(),
    author: z.string().default("FolcHouse"),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
      })
      .optional(),
    publishDate: z.string().transform((str) => new Date(str)),
    lead: z.string(),
  }),
});

export const collections = {
  articles: articleCollection,
};
