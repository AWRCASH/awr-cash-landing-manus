import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  plugins: [react(), tailwindcss(), vitePluginManusRuntime()],
  root: "./client",
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./client/src") },
      { find: "@shared", replacement: path.resolve(__dirname, "./shared") },
      { find: "@assets", replacement: path.resolve(__dirname, "./attached_assets") },
    ],
  },
  envDir: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, "client/dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});
