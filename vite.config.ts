import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      { find: "@context", replacement: path.resolve(__dirname, "src/context") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@models", replacement: path.resolve(__dirname, "src/models") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
  plugins: [react()],
});
