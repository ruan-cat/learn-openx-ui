// demo/vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      {
        find: /^@openx-rc\/(.+)$/,
        replacement: join(__dirname, "..", "packages", "$1", "src"),
      },
    ],
  },
});
