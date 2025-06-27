import { test, expect } from "@playwright/test";
import {
  NAV_LINKS,
  CATEGORY_LINKS,
  POPULAR_VILLA_SEARCHES,
  FOOTER_LINKS,
  FOOTER_COPYRIGHT,
  HEADER_SELECTOR,
  FOOTER_SELECTOR
} from "./selectors";

test.describe("Homepage Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to homepage with explicit wait for network idle
    await page.goto("https://qlp.qatarliving.com/en/properties", {
      waitUntil: "networkidle",
      timeout: 120000,
    });
  });

  test("TC-001: Verify Page Title", async ({ page }) => {
    // Wait for the page to be fully loaded
    await page.waitForLoadState("domcontentloaded");

    // Check page title
    await expect(page).toHaveTitle("Home | Qatar Living Properties", {
      timeout: 30000,
    });
  });

  test("TC-002: Verify Main Navigation Links", async ({ page }) => {
    const header = page.locator(HEADER_SELECTOR);
    const navLinks = Object.values(NAV_LINKS);

    for (const link of navLinks) {
      const navLink = header.getByRole(link.role as "link", {
        name: link.name,
        exact: true,
      });
      await expect(navLink).toBeVisible({ timeout: 30000 });
      await expect(navLink).toBeEnabled();
    }
  });

  test("TC-003: Verify Property Categories", async ({ page }) => {
    const categoryLinks = Object.values(CATEGORY_LINKS);

    for (const category of categoryLinks) {
      const categoryLink = page.getByRole(category.role as "link", {
        name: category.name,
        exact: true,
      });
      await expect(categoryLink).toBeVisible();
    }
  });

  test("TC-006: Verify Popular Villa Searches", async ({ page }) => {
    await page
      .getByRole("button", {
        name: "Search for villas by location",
        exact: true,
      })
      .click();
    // Debug: print page HTML after clicking villas button
    console.log("--- PAGE HTML (After Villas Button Click) ---");
    console.log(await page.content());
    let region;
    try {
      region = page.getByRole("region", {
        name: "Search for villas by location",
      });
      await expect(region).toBeVisible({ timeout: 5000 });
    } catch {
      region = page.getByRole("region", {
        name: "Search for apartments by location",
      });
      await expect(region).toBeVisible({ timeout: 5000 });
    }
    // Debug: print region HTML
    console.log("--- REGION HTML (Villas Tab) ---");
    console.log(await region.innerHTML());
    const searches = Object.values(POPULAR_VILLA_SEARCHES);
    for (const search of searches) {
      const link = region.getByRole(search.role as "link", {
        name: search.name,
        exact: true,
      });
      await expect(link).toBeVisible();
      await expect(link).toBeEnabled();
    }
  });

  test("TC-007: Verify Footer Links", async ({ page }) => {
    const footer = page.locator(FOOTER_SELECTOR);
    await footer.scrollIntoViewIfNeeded();
    const footerLinks = Object.values(FOOTER_LINKS);
    for (const link of footerLinks) {
      const footerLink = footer.getByRole(link.role as "link", {
        name: link.name,
        exact: true,
      });
      await expect(footerLink).toBeVisible();
      await expect(footerLink).toBeEnabled();
    }
  });

  test("TC-008: Verify Copyright", async ({ page }) => {
    const footer = page.locator(FOOTER_SELECTOR);
    await footer.scrollIntoViewIfNeeded();
    const copyrightText = footer.getByText(FOOTER_COPYRIGHT.text).first();
    await expect(copyrightText).toBeVisible();
  });
});
