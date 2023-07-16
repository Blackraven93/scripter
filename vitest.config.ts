import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./__tests__/setup.ts"],
    exclude: [
      ...configDefaults.exclude,
      "./__tests__/e2e/*",
      "./tests-examples",
    ],
    globals: true,
    environment: "jsdom",
  },
});
