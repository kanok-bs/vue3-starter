// vite.config.js
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    Components({
      // relative paths to the directory to search for components.
      dirs: ["src/components"],

      // valid file extensions for components.
      extensions: ["vue"],
      // search for subdirectories
      deep: true,
      // resolvers for custom components
      resolvers: [],

      // generate `components.d.ts` global declrations,
      // also accepts a path for custom filename
      dts: false,

      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: false,
      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],

      // filters for transforming targets
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [
        /[\\/]node_modules[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.nuxt[\\/]/,
      ],
    }),
  ],
});
