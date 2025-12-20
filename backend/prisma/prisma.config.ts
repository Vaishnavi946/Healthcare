import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // uses .env
    },
  },
  generators: {
    client: {
      provider: "prisma-client-js",
    },
  },
});
