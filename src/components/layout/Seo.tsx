import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, PAGE_SEO, SITE_NAME, SITE_URL } from "../../seo/seo.config";

/**
 * Updates the document's crawler-facing metadata on every route change.
 *
 * Tags are upserted in place rather than rendered as JSX: index.html ships a
 * static copy of each tag so crawlers and link unfurlers see real metadata
 * before any JS runs, and rendering duplicates would leave the stale static
 * <title>/<meta> first in the document — which is the copy consumers read.
 */

const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  const selector = `meta[${attr}="${key}"]`;
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
};

export const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = PAGE_SEO[pathname] ?? PAGE_SEO["/"];
    // Collapse a trailing slash so /skills/ and /skills don't self-report as
    // two canonical URLs; the root stays "/".
    const path = pathname !== "/" ? pathname.replace(/\/$/, "") : "";
    const canonical = `${SITE_URL}${path}`;

    document.title = page.title;

    upsertCanonical(canonical);
    upsertMeta("name", "description", page.description);

    upsertMeta("property", "og:type", pathname === "/" ? "profile" : "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:image:alt", `${SITE_NAME}, AI Engineer`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
  }, [pathname]);

  return null;
};
