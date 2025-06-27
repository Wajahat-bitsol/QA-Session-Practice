# Qatar Living Homepage Test Cases

## Navigation Tests

### TC-001: Verify Page Title

- **Description**: Verify that the page title is correct
- **Steps**:
  1. Navigate to the homepage
  2. Check the page title
- **Expected Result**: Page title should be "Qatar_LivingQatar_Living"
- **Selectors**:
  - ID: `title`
  - XPath: `//title`
  - Class: `page-title`
  - Tag Name: `title`
  - Data Test ID: `page-title`
  - ARIA Role: `banner`

### TC-002: Verify Main Navigation Links

- **Description**: Verify all main navigation links are present and clickable
- **Steps**:
  1. Navigate to the homepage
  2. Check presence of all navigation links
  3. Verify each link is clickable
- **Expected Result**: All navigation links should be present and clickable
- **Links to Verify**:
  - Properties
    - ID: `nav-properties`
    - XPath: `//a[text()='Properties']`
    - Class: `nav-link`
    - Data Test ID: `nav-properties`
  - Vehicles
    - ID: `nav-vehicles`
    - XPath: `//a[text()='Vehicles']`
    - Class: `nav-link`
    - Data Test ID: `nav-vehicles`
  - Classifieds
    - ID: `nav-classifieds`
    - XPath: `//a[text()='Classifieds']`
    - Class: `nav-link`
    - Data Test ID: `nav-classifieds`
  - Services
    - ID: `nav-services`
    - XPath: `//a[text()='Services']`
    - Class: `nav-link`
    - Data Test ID: `nav-services`
  - Jobs
    - ID: `nav-jobs`
    - XPath: `//a[text()='Jobs']`
    - Class: `nav-link`
    - Data Test ID: `nav-jobs`
  - Rewards
    - ID: `nav-rewards`
    - XPath: `//a[text()='Rewards']`
    - Class: `nav-link`
    - Data Test ID: `nav-rewards`
  - Post Ad
    - ID: `nav-post-ad`
    - XPath: `//a[text()='Post Ad']`
    - Class: `nav-link`
    - Data Test ID: `nav-post-ad`

### TC-003: Verify Property Categories

- **Description**: Verify all property category links are present and functional
- **Steps**:
  1. Navigate to the homepage
  2. Check presence of all property category links
  3. Click each category link
- **Expected Result**: All category links should be present and navigate to correct pages
- **Categories to Verify**:
  - Residential
    - ID: `cat-residential`
    - XPath: `//a[text()='Residential']`
    - Class: `category-link`
    - Data Test ID: `cat-residential`
  - Commercial
    - ID: `cat-commercial`
    - XPath: `//a[text()='Commercial']`
    - Class: `category-link`
    - Data Test ID: `cat-commercial`
  - International
    - ID: `cat-international`
    - XPath: `//a[text()='International']`
    - Class: `category-link`
    - Data Test ID: `cat-international`

### TC-004: Verify Property Types

- **Description**: Verify property type filters are working
- **Steps**:
  1. Navigate to the homepage
  2. Check presence of property type filters
  3. Click each type filter
- **Expected Result**: Property listings should filter according to selected type
- **Types to Verify**:
  - For Rent
    - ID: `type-rent`
    - XPath: `//a[text()='For Rent']`
    - Class: `type-link`
    - Data Test ID: `type-rent`
  - For Sale
    - ID: `type-sale`
    - XPath: `//a[text()='For Sale']`
    - Class: `type-link`
    - Data Test ID: `type-sale`

## Popular Searches Tests

### TC-005: Verify Popular Apartment Searches

- **Description**: Verify all popular apartment search links are present and functional
- **Steps**:
  1. Navigate to the homepage
  2. Check presence of all popular apartment search links
  3. Click each search link
- **Expected Result**: Each link should navigate to filtered search results
- **Locations to Verify**:
  - Fox Hills
    - ID: `search-fox-hills`
    - XPath: `//a[text()='Apartments for rent in Fox Hills']`
    - Class: `search-link`
    - Data Test ID: `search-fox-hills`
  - Al Sadd
    - ID: `search-al-sadd`
    - XPath: `//a[text()='Apartments for rent in Al Sadd']`
    - Class: `search-link`
    - Data Test ID: `search-al-sadd`
  - Lusail
    - ID: `search-lusail`
    - XPath: `//a[text()='Apartments for rent in Lusail']`
    - Class: `search-link`
    - Data Test ID: `search-lusail`
  - Viva Bahriya
    - ID: `search-viva-bahriya`
    - XPath: `//a[text()='Apartments for rent in Viva Bahriya']`
    - Class: `search-link`
    - Data Test ID: `search-viva-bahriya`
  - Al Aziziya
    - ID: `search-al-aziziya`
    - XPath: `//a[text()='Apartments for rent in Al Aziziya']`
    - Class: `search-link`
    - Data Test ID: `search-al-aziziya`
  - Porto Arabia
    - ID: `search-porto-arabia`
    - XPath: `//a[text()='Apartments for rent in Porto Arabia']`
    - Class: `search-link`
    - Data Test ID: `search-porto-arabia`
  - West Bay
    - ID: `search-west-bay`
    - XPath: `//a[text()='Apartments for rent in West Bay']`
    - Class: `search-link`
    - Data Test ID: `search-west-bay`

### TC-006: Verify Popular Villa Searches

- **Description**: Verify all popular villa search links are present and functional
- **Steps**:
  1. Navigate to the homepage
  2. Check presence of all popular villa search links
  3. Click each search link
- **Expected Result**: Each link should navigate to filtered search results
- **Locations to Verify**:
  - Fox Hills
    - ID: `villa-fox-hills`
    - XPath: `//a[text()='Villas for rent in Fox Hills']`
    - Class: `villa-link`
    - Data Test ID: `villa-fox-hills`
  - Al Sadd
    - ID: `villa-al-sadd`
    - XPath: `//a[text()='Villas for rent in Al Sadd']`
    - Class: `villa-link`
    - Data Test ID: `villa-al-sadd`
  - Lusail
    - ID: `villa-lusail`
    - XPath: `//a[text()='Villas for rent in Lusail']`
    - Class: `villa-link`
    - Data Test ID: `villa-lusail`
  - Viva Bahriya
    - ID: `villa-viva-bahriya`
    - XPath: `//a[text()='Villas for rent in Viva Bahriya']`
    - Class: `villa-link`
    - Data Test ID: `villa-viva-bahriya`
  - Al Aziziya
    - ID: `villa-al-aziziya`
    - XPath: `//a[text()='Villas for rent in Al Aziziya']`
    - Class: `villa-link`
    - Data Test ID: `villa-al-aziziya`
  - Porto Arabia
    - ID: `villa-porto-arabia`
    - XPath: `//a[text()='Villas for rent in Porto Arabia']`
    - Class: `villa-link`
    - Data Test ID: `villa-porto-arabia`
  - West Bay
    - ID: `villa-west-bay`
    - XPath: `//a[text()='Villas for rent in West Bay']`
    - Class: `villa-link`
    - Data Test ID: `villa-west-bay`

## Footer Tests

### TC-007: Verify Footer Links

- **Description**: Verify all footer links are present and functional
- **Steps**:
  1. Navigate to the homepage
  2. Scroll to footer
  3. Check presence of all footer links
  4. Click each footer link
- **Expected Result**: All footer links should be present and navigate to correct pages
- **Links to Verify**:
  - Advertising Terms
    - ID: `footer-advertising-terms`
    - XPath: `//a[text()='Advertising Terms']`
    - Class: `footer-link`
    - Data Test ID: `footer-advertising-terms`
  - Website Terms
    - ID: `footer-website-terms`
    - XPath: `//a[text()='Website Terms']`
    - Class: `footer-link`
    - Data Test ID: `footer-website-terms`
  - Rules for posting ads
    - ID: `footer-rules`
    - XPath: `//a[text()='Rules for posting ads']`
    - Class: `footer-link`
    - Data Test ID: `footer-rules`
  - Help
    - ID: `footer-help`
    - XPath: `//a[text()='Help']`
    - Class: `footer-link`
    - Data Test ID: `footer-help`

### TC-008: Verify Copyright Information

- **Description**: Verify copyright information is displayed correctly
- **Steps**:
  1. Navigate to the homepage
  2. Scroll to footer
  3. Check copyright text
- **Expected Result**: Copyright text should be "Copyright © 2025 Qatar Living. All rights reserved."
- **Selectors**:
  - ID: `footer-copyright`
  - XPath: `//div[contains(text(), 'Copyright © 2025 Qatar Living. All rights reserved.')]`
  - Class: `copyright`
  - Tag Name: `div`
  - Data Test ID: `footer-copyright`
  - ARIA Role: `contentinfo`

## Test Script Implementation

### TC-001 Implementation

```typescript
import { test, expect } from "@playwright/test";

test("TC-001: Verify Page Title", async ({ page }) => {
  // Navigate to homepage
  await page.goto("/");

  // Check page title
  await expect(page).toHaveTitle("Qatar_LivingQatar_Living");

  // Alternative selectors verification
  await expect(page.locator("#title")).toBeVisible();
  await expect(page.locator(".page-title")).toBeVisible();
  await expect(page.locator('[data-test-id="page-title"]')).toBeVisible();
  await expect(page.locator('[role="banner"]')).toBeVisible();
});
```

### TC-003 Implementation

```typescript
import { test, expect } from "@playwright/test";

test("TC-003: Verify Property Categories", async ({ page }) => {
  const categoryLinks = [
    {
      name: "Residential",
      href: "/en/properties/residential?purpose=For+Rent",
    },
    { name: "Commercial", href: "/en/properties/commercial?purpose=For+Rent" },
    {
      name: "International",
      href: "/en/properties/international?purpose=For+Sale",
    },
  ];

  for (const category of categoryLinks) {
    const categoryLink = page.locator(
      'a[href="/en/properties/residential?purpose=For+Rent"]',
      { hasText: "Residential" },
    );
    await expect(categoryLink).toBeVisible({ timeout: 30000 });
    await expect(categoryLink).toHaveAttribute("href", category.href);
    await expect(categoryLink).toBeEnabled();

    // Click the category link and verify navigation
    await Promise.all([
      page.waitForNavigation({ waitUntil: "networkidle" }),
      categoryLink.click(),
    ]);

    // Assert the URL is correct
    const currentUrl = page.url();
    expect(currentUrl).toContain(category.href);

    // Optionally, check for a visible indicator (e.g., heading or breadcrumb)
    // await expect(page.getByText(category.name)).toBeVisible();

    // Go back to homepage for next category
    await page.goto("https://qlp.qatarliving.com/en/properties", {
      waitUntil: "networkidle",
      timeout: 120000,
    });
  }
});
```

### TC-006 Implementation

```typescript
import { test, expect } from "@playwright/test";

test("TC-006: Verify Popular Villa Searches", async ({ page }) => {
  // Click the correct button at the page level, not inside main
  await page
    .getByRole(POPULAR_SEARCHES_TABS.villas.role as "button", {
      name: POPULAR_SEARCHES_TABS.villas.name,
      exact: true,
    })
    .click();
  const mainContent = page.locator("main");
  const searches = Object.values(POPULAR_VILLA_SEARCHES);
  for (const search of searches) {
    const link = mainContent.getByRole(search.role as "link", {
      name: search.name,
      exact: true,
    });
    await expect(link).toBeVisible();
    await expect(link).toBeEnabled();
  }
});
```
