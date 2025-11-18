import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  root: "client",
  plugins: [react(), tailwindcss(), vitePluginManusRuntime()],

  preview: {
    host: true,
    allowedHosts: ["4173-ialphjzi0t5sqxt5luxb3-898023a5.manus-asia.computer"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },

});
