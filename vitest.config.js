import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig(({command, mode }) => {

  return {
    extends: 'vite.config.js',
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./setupTests.js"],
    },
  }
});
