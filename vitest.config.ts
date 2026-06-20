import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    include: ["**/__tests__/**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      include: ["packages/**/src/**", "apps/web/src/**"],
      exclude: ["**/__tests__/**", "**/node_modules/**", "**/dist/**"],
    },
    projects: ["packages/*", "apps/web"],
  },
})
