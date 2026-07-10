export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://olympicwindows.in";
  const lastModified = new Date();

  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/products",
    "/gallery",
    "/impact",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ];

  const productCategories = [
    "aluminum-windows",
    "aluminum-doors",
    "facades",
    "aluminum-fins",
  ];

  const projectSlugs = [
    "casa-rio",
    "palava-city",
    "lodha-amara",
    "lodha-woods",
    "lodha-upper-thane",
    "lodha-premier",
    "lodha-bella-vita",
    "lodha-panache",
    "lodha-giardino",
    "lodha-iris",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  staticPages.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1.0 : route === "/contact" ? 0.9 : 0.8,
    });
  });

  productCategories.forEach((category) => {
    sitemapEntries.push({
      url: `${baseUrl}/products/${category}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  projectSlugs.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/projects/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
