import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./Test",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html"], ["list"]],
  use: {
    baseURL: "https://www.qlp.qatarliving.com",
    trace: {
      mode: "on-first-retry",
      snapshots: true,
      screenshots: true,
      sources: true,
    },
    screenshot: "only-on-failure",
    video: {
      mode: "retain-on-failure",
      size: { width: 1280, height: 720 },
    },
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  // Configure output directory for test results
  outputDir: "test-results/",

  // Configure global expect timeout
  expect: {
    timeout: 60000,
  },

  // Configure test timeout
  timeout: 120000,
});
