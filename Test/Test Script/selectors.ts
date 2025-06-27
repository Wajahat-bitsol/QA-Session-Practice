// Navigation Links
export const NAV_LINKS = {
  properties: { role: "link", name: "Properties", testId: "nav-properties" },
  vehicles: { role: "link", name: "Vehicles", testId: "nav-vehicles" },
  classifieds: { role: "link", name: "Classifieds", testId: "nav-classifieds" },
  services: { role: "link", name: "Services", testId: "nav-services" },
  jobs: { role: "link", name: "Jobs", testId: "nav-jobs" },
  rewards: { role: "link", name: "Rewards", testId: "nav-rewards" },
  postAd: { role: "link", name: "Post Ad", testId: "nav-post-ad" },
};

// Property Categories
export const CATEGORY_LINKS = {
  residential: { role: "link", name: "Residential", testId: "cat-residential" },
  commercial: { role: "link", name: "Commercial", testId: "cat-commercial" },
  international: {
    role: "link",
    name: "International",
    testId: "cat-international",
  },
};

// Property Types
export const PROPERTY_TYPES = {
  forRent: { role: "tab", name: "For Rent", testId: "type-rent" },
  forSale: { role: "tab", name: "For Sale", testId: "type-sale" },
};

// Popular Apartment Searches
// Remove POPULAR_APARTMENT_SEARCHES constant

// Popular Searches Tabs
export const POPULAR_SEARCHES_TABS = {
  villas: { role: "button", name: "Search for villas by location" },
};

// Popular Villa Searches
export const POPULAR_VILLA_SEARCHES = {
  foxHills: {
    role: "link",
    name: "Villas for rent in Fox Hills",
    testId: "villa-fox-hills",
  },
  alSadd: {
    role: "link",
    name: "Villas for rent in Al Sadd",
    testId: "villa-al-sadd",
  },
  lusail: {
    role: "link",
    name: "Villas for rent in Lusail",
    testId: "villa-lusail",
  },
  vivaBahriya: {
    role: "link",
    name: "Villas for rent in Viva Bahriya",
    testId: "villa-viva-bahriya",
  },
  alAziziya: {
    role: "link",
    name: "Villas for rent in Al Aziziya",
    testId: "villa-al-aziziya",
  },
  portoArabia: {
    role: "link",
    name: "Villas for rent in Porto Arabia",
    testId: "villa-porto-arabia",
  },
  westBay: {
    role: "link",
    name: "Villas for rent in West Bay",
    testId: "villa-west-bay",
  },
};

// Header and Footer container selectors
export const HEADER_SELECTOR = "header";
export const FOOTER_SELECTOR = "footer";

// Footer Links
export const FOOTER_LINKS = {
  advertisingTerms: {
    role: "link",
    name: "Advertising Terms",
    testId: "footer-advertising-terms",
  },
  websiteTerms: {
    role: "link",
    name: "Website Terms",
    testId: "footer-website-terms",
  },
  rules: {
    role: "link",
    name: "Rules for posting ads",
    testId: "footer-rules",
  },
  help: { role: "link", name: "Help", testId: "footer-help" },
};

export const FOOTER_COPYRIGHT = {
  text: /Copyright © \d{4} Qatar Living\. All rights reserved\./,
  testId: "footer-copyright",
  role: "contentinfo",
};
