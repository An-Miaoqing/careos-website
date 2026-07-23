import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Client-side-only meta tag updates (no SSR/prerendering in this app), so this
 * helps same-session sharing and JS-rendering crawlers but not plain non-JS crawlers.
 */
export default function Seo({ title, description, canonicalUrl, ogImage }: SeoProps) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    if (ogImage) {
      upsertMeta("property", "og:image", ogImage);
    }
    upsertCanonical(canonicalUrl);
  }, [title, description, canonicalUrl, ogImage]);

  return null;
}
