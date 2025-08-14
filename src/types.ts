import { z } from "zod";

export const getArticlesSchema = z.object({
  tags: z.string().describe("The tag to search on dev.to api"),
  quantity: z
    .number()
    .optional()
    .default(5)
    .describe("The number of articles to return"),
});

export const getArticlesByUserNameSchema = z.object({
  userName: z.string().describe("The user name to search on dev.to api"),
});
