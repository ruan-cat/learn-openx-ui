// packages/input/vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

import { generateVueConfig } from '../build/build.config';

const newConfig = generateVueConfig();

export default newConfig;

const originalConfig = defineConfig({
  // 增加插件的使用
  plugins: [vue()],
  resolve: {
    // 这是一个别名配置，将 @input/components 指向 src/components
    alias: {
      "@input/components": path.resolve(__dirname, "src/components"),
    },
  },
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "OpenxRcUIInput",
      fileName: "openx-rc-input",
    },
    minify: false,
    rollupOptions: {
      external: [
        // 除了 @openx-rc/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @openx-rc 开头的依赖项一起处理掉
        /@openx-rc.*/,
        // 不应该排除
        // /@input\/components.*/,
        "vue",
      ],
    },
  },
});
