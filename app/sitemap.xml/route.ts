// app/sitemap.xml/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://webloomsai.vercel.app";

  const pages = [
    "",         // homepage
    "features",
    "summarize",
    "sign-in",
    "sign-up",
    "pricing",
    "about",

  ];

  const urls = pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
