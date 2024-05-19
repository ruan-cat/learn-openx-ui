// packages/ui/vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",

      name: "OpenxRcUI",
      fileName: "openx-rc-ui",
    },

    minify: false,

    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [/lodash.*/],

      output: {},
    },
  },
});
