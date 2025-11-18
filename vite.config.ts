import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  plugins: [react(), tailwindcss(), vitePluginManusRuntime()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },

});
