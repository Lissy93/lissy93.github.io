import { c as config } from "../../../chunks/config.js";
const prerender = true;
function GET() {
  const site = "https://as93.net";
  const urls = [
    `  <url>
    <loc>${site}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`
  ];
  for (const project of config.projects) {
    urls.push(
      `  <url>
    <loc>${site}/${project.name}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    );
  }
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>"
  ].join("\n");
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=0, s-maxage=3600"
    }
  });
}
export {
  GET,
  prerender
};
