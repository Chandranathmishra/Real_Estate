import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Ensures relative paths for assets
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Corrected 'http' instead of 'htp'
        secure: false,
      },
    },
  },
  plugins: [react()],
});
