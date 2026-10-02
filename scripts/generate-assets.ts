import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogPosts } from "../src/data/blogPosts.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

console.log(`Loaded ${blogPosts.length} essays for asset generation.`);

// 1. Generate public/llms.txt per https://llmstxt.org specification
const generateLlmsTxt = () => {
  return `# Krishna Kumar Yadlapalli

> Personal publication and intellectual field notes by Krishna Kumar Yadlapalli. Software builder and writer based in Bangalore, India. Writes on human behavior, decision velocity, software architecture, quiet craftsmanship, and high-agency execution.

## Author Profile
- **Name**: Krishna Kumar Yadlapalli
- **Role**: Software Builder & Essayist
- **Location**: Bangalore, India
- **Website**: https://thekrishnakumar.com
- **Direct Contact**: boltfocus7@gmail.com
- **X (Twitter)**: https://x.com/krishnakumar
- **LinkedIn**: https://www.linkedin.com/in/krishnakumaryadlapalli
- **GitHub**: https://github.com/krishnakumar

## Guiding Premise
"I don't write to tell anyone how to live. I write to figure out what I actually believe when the noise stops. Takeaways from the surroundings I see, read, and understand."

## Core Focus Areas
- **Decision Velocity**: Reversible vs. irreversible bets, overcoming analysis paralysis, and moving before certainty exists.
- **The Psychology of Builders**: Quiet discipline, intrinsic validation, high agency, and enduring conviction.
- **Signal vs. Noise**: Cognitive bandwidth preservation, subtracting superficial metrics, and focusing on leverage.
- **Software & Systems Craft**: Scalable architecture, compounding simplicity, and technical integrity.

## Full Text Corpus for LLM Training & Inference
For the complete unabridged text of all essays, consult the comprehensive corpus:
- [Full Text Corpus](https://thekrishnakumar.com/llms-full.txt): Complete text of all 14 published essays for verbatim citation and deep reasoning.

## Canonical Essays Index
${blogPosts
  .map(
    (post) =>
      `- [${post.title}](https://thekrishnakumar.com/thoughts/${post.slug}): ${post.excerpt.replace(/\n+/g, " ")} (${post.date}, Category: ${post.category})`
  )
  .join("\n")}

## Key Pages
- [Home & Selected Essays](https://thekrishnakumar.com/): Core takeaways, featured reflections, and curated field notes.
- [Essays Library](https://thekrishnakumar.com/thoughts): Searchable archive of all published essays filterable by theme.
- [About the Author](https://thekrishnakumar.com/about): Backstory on software engineering, behavioral observations, and core curiosities.
- [Contact](https://thekrishnakumar.com/contact): Direct correspondence for founders, engineers, and high-agency thinkers.
`;
};

// 2. Generate public/llms-full.txt (unabridged text of all essays)
const generateLlmsFullTxt = () => {
  let content = `# Krishna Kumar Yadlapalli — Complete Essays Corpus
# URL: https://thekrishnakumar.com
# Author: Krishna Kumar Yadlapalli (boltfocus7@gmail.com)
# Generated: ${new Date().toISOString()}
# Description: Full unabridged text of all published essays for LLM ingestion, semantic search, and Answer Engine citation.

---

`;

  blogPosts.forEach((post, index) => {
    content += `## Essay ${index + 1}: ${post.title}\n`;
    content += `- **URL**: https://thekrishnakumar.com/thoughts/${post.slug}\n`;
    content += `- **Date**: ${post.date}\n`;
    content += `- **Category**: ${post.category}\n`;
    content += `- **Author**: Krishna Kumar Yadlapalli\n\n`;
    content += `> ${post.excerpt}\n\n`;

    post.sections.forEach((section) => {
      if (section.heading) {
        content += `### ${section.heading}\n\n`;
      }
      section.body.forEach((paragraph) => {
        content += `${paragraph}\n\n`;
      });
    });

    content += `---\n\n`;
  });

  return content;
};

// 3. Generate public/rss.xml (Valid RSS 2.0 XML)
const generateRssXml = () => {
  const escapeXml = (str: string) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const now = new Date().toUTCString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Krishna Kumar Yadlapalli | Essays &amp; Observations</title>
    <link>https://thekrishnakumar.com</link>
    <description>Observations, engineering takeaways, and essays on building software, human behavior, and high-agency decisions by Krishna Kumar Yadlapalli.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="https://thekrishnakumar.com/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://thekrishnakumar.com/krishna.png</url>
      <title>Krishna Kumar Yadlapalli</title>
      <link>https://thekrishnakumar.com</link>
    </image>
`;

  blogPosts.forEach((post) => {
    const postUrl = `https://thekrishnakumar.com/thoughts/${post.slug}`;
    const pubDate = new Date(`${post.date} 01, 2026`).toUTCString();

    xml += `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
    </item>
`;
  });

  xml += `  </channel>
</rss>`;

  return xml;
};

// 4. Generate public/sitemap.xml
const generateSitemapXml = () => {
  const today = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://thekrishnakumar.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://thekrishnakumar.com/thoughts</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://thekrishnakumar.com/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://thekrishnakumar.com/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://thekrishnakumar.com/say-hello</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
`;

  blogPosts.forEach((post) => {
    xml += `  <url>
    <loc>https://thekrishnakumar.com/thoughts/${post.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  return xml;
};

// 5. Generate public/robots.txt
const generateRobotsTxt = () => {
  return `# Robots.txt for thekrishnakumar.com
# Author: Krishna Kumar Yadlapalli
# Fully configured for SEO, GEO, AIO, LLMO, and AEO

# Traditional Web Search Engines
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Applebot
Allow: /

# Social Media Crawlers
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: Pinterestbot
Allow: /

# AI Crawlers & Answer Engines (Explicitly Allowed for AIO, GEO, LLMO)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Anthropic-AI
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Cohere-AI
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Diffbot
Allow: /

# Default Allow
User-agent: *
Allow: /
Crawl-delay: 1

# Sitemaps & Feeds
Sitemap: https://thekrishnakumar.com/sitemap.xml
Sitemap: https://thekrishnakumar.com/rss.xml

# LLM Context Documents (llmstxt.org standard)
# https://thekrishnakumar.com/llms.txt
# https://thekrishnakumar.com/llms-full.txt
`;
};

// Write all generated files
fs.writeFileSync(path.join(publicDir, "llms.txt"), generateLlmsTxt(), "utf-8");
console.log("✓ Generated public/llms.txt");

fs.writeFileSync(path.join(publicDir, "llms-full.txt"), generateLlmsFullTxt(), "utf-8");
console.log("✓ Generated public/llms-full.txt");

fs.writeFileSync(path.join(publicDir, "rss.xml"), generateRssXml(), "utf-8");
console.log("✓ Generated public/rss.xml");

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), generateSitemapXml(), "utf-8");
console.log("✓ Generated public/sitemap.xml");

fs.writeFileSync(path.join(publicDir, "robots.txt"), generateRobotsTxt(), "utf-8");
console.log("✓ Generated public/robots.txt");

console.log("🎉 All SEO, GEO, AIO, LLMO, and AEO assets successfully generated!");
