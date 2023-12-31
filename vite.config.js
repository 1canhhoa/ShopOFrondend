import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "./",
  define:{
    global:'window'
  },
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
  ],
  },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          },
        },
      },
    },
    server:{
      port:4000,
      open:true,
      cors:true
    }
});