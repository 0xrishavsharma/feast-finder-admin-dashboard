/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
    globals: true, //need this so that jest-dom(imported in .setupTest.ts file) can extend the vitest global object and we can used dom methods by extending methods like expect
  },
});
