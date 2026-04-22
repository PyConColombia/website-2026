import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { publicGalleryPlugin } from "./vite-plugin-public-gallery.js";

// import process from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), publicGalleryPlugin()],
  base: "/",
  server: {
    host: true, // or use '0.0.0.0'
    port: 5173, // optional, or whichever you're using
    historyApiFallback: true,
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/node_modules/*": path.resolve(__dirname, "node_modules"),
    },
  },
});
