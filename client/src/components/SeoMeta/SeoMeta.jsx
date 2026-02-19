import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SEO_PAGES,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
} from "../../config/seoConfig";

const BASE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://lafrenchpizza.fr";

function setMeta(name, content, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SeoMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = SEO_PAGES[pathname] || SEO_PAGES["/"];
    const canonical = `${BASE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = page.title;

    setMeta("description", page.description);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);

    const ogImage = page.image || DEFAULT_OG_IMAGE;

    setMeta("og:title", page.title, true);
    setMeta("og:description", page.description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:url", canonical, true);
    setMeta("og:type", "website", true);
    setMeta("og:locale", "fr_FR", true);
    setMeta("og:site_name", SITE_NAME, true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", page.title);
    setMeta("twitter:description", page.description);
    setMeta("twitter:image", ogImage);
  }, [pathname]);

  return null;
}
