import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    outDir: "dist/mobile",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "index.mobile.html",
      },
    },
  },
});
