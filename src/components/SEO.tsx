import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  schema?: Record<string, any>;
  keywords?: string[];
}

const BASE_URL = "https://thekrishnakumar.com";
const DEFAULT_IMAGE = `${BASE_URL}/krishna.png`;

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = "website",
  publishedTime,
  schema,
  keywords = [],
}: SEOProps) {
  const fullTitle = `${title} | Krishna Kumar Yadlapalli`;
  const url = canonicalUrl ? `${BASE_URL}${canonicalUrl}` : BASE_URL;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to set/update meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to set link tag
    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Primary Meta Tags
    setMeta("description", description);
    setMeta("author", "Krishna Kumar Yadlapalli");
    if (keywords.length > 0) {
      setMeta("keywords", keywords.join(", "));
    }

    // 3. Canonical URL
    setLink("canonical", url);

    // 4. Open Graph Tags
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", url, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", DEFAULT_IMAGE, true);
    setMeta("og:site_name", "Krishna Kumar Yadlapalli", true);
    setMeta("og:locale", "en_US", true);

    if (publishedTime && ogType === "article") {
      setMeta("article:published_time", publishedTime, true);
      setMeta("article:author", "Krishna Kumar Yadlapalli", true);
    }

    // 5. Twitter Card Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", DEFAULT_IMAGE);
    setMeta("twitter:creator", "@krishnakumar");
    setMeta("twitter:site", "@krishnakumar");

    // 6. JSON-LD Structured Data
    const existingScript = document.getElementById("dynamic-jsonld");
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement("script");
      script.id = "dynamic-jsonld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const script = document.getElementById("dynamic-jsonld");
      if (script) script.remove();
    };
  }, [fullTitle, description, url, ogType, publishedTime, schema, keywords]);

  return null;
}
