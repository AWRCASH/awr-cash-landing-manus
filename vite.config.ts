import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    vitePluginManusRuntime(),
    tsconfigPaths()
  ],
  root: "client",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
