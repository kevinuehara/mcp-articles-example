# 📋 Dev.To Articles MCP Server

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-FF4785?style=for-the-badge&logo=zod&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-blue?style=for-the-badge)

</div>

## 🎯 What is this project?

This is a complete MCP (Model Context Protocol) server that implements a articles of dev.to with robust validation using **TypeScript** and **Zod**. The server integrates directly with **Cursor**, allowing you search articles on dev.to.

### 🌟 Why use MCP?

The **Model Context Protocol** is a protocol developed by Anthropic that allows AI assistants to connect with external tools and resources in a standardized way. With this project, you can:

- 🤖 **Natural Conversation** with Cursor about articles on dev.to
- 🔧 **Execute tasks** directly through chat
- 📊 **Receive Insights** smart data about published data
- 🛡️ **Ensure data validation** robust of all data

## Usage Examples

Ask on Cursors:

- "Give me 3 articles about typescript"
- "Give me articles of user kevin-uehara"

## How It Works

`get-articles`

1. Fetches articles passing parameter **tag** and **quantity** from Dev.TO API
2. Returns structured data that AI agents can format beautifully

`get-articles-by-user-name`

1. Fetches articles passing parameter **username** from Dev.TO API
2. Returns structured data that AI agents can format beautifully

## 🏗️ Project Architecture

The project is organized with three main files

```
src/
├── types.ts                    # 📝 Zod Types
├── service.ts                  # 🖥️ Integration with dev.to
└── main.ts                     # 🚀 Entry Point of MCP
```

## Dependencies

- `@modelcontextprotocol/sdk` - MCP server framework
- `zod` - Schema validation

## API Used

- [Dev.To API](https://developers.forem.com/api/v0) - Free API of Dev.TO articles
