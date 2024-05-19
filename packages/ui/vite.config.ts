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

      external: [
        /lodash.*/,
        /**
         * 记录一下vite打包vue3组件库，使用组件库时报 (reading 'isCE') 错误问题
         * @see https://segmentfault.com/a/1190000041416388
         */
        "vue",
      ],

      output: {},
    },
  },
});
