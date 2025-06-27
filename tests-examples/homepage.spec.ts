import { test, expect } from "@playwright/test";

test.describe("Homepage Tests", () => {
  test("TC-001: Verify Page Title", async ({ page }) => {
    // Navigate to homepage
    await page.goto("https://qlp.qatarliving.com/en/properties");

    // Check page title
    await expect(page).toHaveTitle("Qatar_LivingQatar_Living");

    // Alternative selectors verification
    await expect(page.locator("#title")).toBeVisible();
    await expect(page.locator(".page-title")).toBeVisible();
    await expect(page.locator('[data-test-id="page-title"]')).toBeVisible();
    await expect(page.locator('[role="banner"]')).toBeVisible();
  });
});
