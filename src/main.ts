import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getArticlesByUserNameSchema, getArticlesSchema } from "./types";
import { getArticles, getArticlesByUserName } from "./service";

const server = new McpServer({
  name: "articles-mcp-example",
  version: "1.0.0",
});

server.tool(
  "get-articles",
  "Tool to get articles from dev.to",
  getArticlesSchema.shape,
  async ({ tags, quantity }) => getArticles(tags, quantity)
);

server.tool(
  "get-articles-by-user-name",
  "Tool to get articles from dev.to by user name",
  getArticlesByUserNameSchema.shape,
  async ({ userName }) => getArticlesByUserName(userName)
);

const transport = new StdioServerTransport();
server.connect(transport);
