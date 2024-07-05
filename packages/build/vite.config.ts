// packages/build/vite.config.ts
import { generateConfig } from "./build.config";

export default generateConfig({
  pluginVisualizer: {
    filename: "./dist/visualizer.html",
    gzipSize: true,
    template: "treemap",
  },
});
