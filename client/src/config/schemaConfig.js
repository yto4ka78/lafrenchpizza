const BASE =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://lafrenchpizza.fr";

export const RESTAURANT = {
  "@type": "Restaurant",
  "@id": `${BASE}/#restaurant`,
  name: "LA FRENCH PIZZA",
  description:
    "Pizzeria à Orléans. Pizzas au levain faites maison, ingrédients de qualité. Sur place ou à emporter. Formules midi, 1 pizza achetée = 1 offerte.",
  url: BASE,
  telephone: "+33980889898",
  email: "info@lafrench-pizza.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "113 rue du Faubourg Bannier",
    addressLocality: "Orléans",
    postalCode: "45000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.913624,
    longitude: 1.899586,
  },
  image: `${BASE}/lafrenchpizzahero.webp`,
  priceRange: "€€",
  servesCuisine: "Pizza",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "17:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "17:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "16:00", closes: "21:00" },
  ],
  sameAs: [
    "https://instagram.com/lafrenchpizza",
    "https://facebook.com/lafrenchpizza",
  ],
};

export const WEBSITE = {
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "LA FRENCH PIZZA",
  description: "Pizzeria à Orléans — pizzas au levain, sur place ou à emporter",
  publisher: { "@id": `${BASE}/#restaurant` },
  inLanguage: "fr-FR",
};

export const BREADCRUMBS = {
  "/": [{ name: "Accueil", url: BASE }],
  "/menu": [
    { name: "Accueil", url: BASE },
    { name: "Menu", url: `${BASE}/menu` },
  ],
  "/about": [
    { name: "Accueil", url: BASE },
    { name: "Notre Histoire", url: `${BASE}/about` },
  ],
  "/faq": [
    { name: "Accueil", url: BASE },
    { name: "FAQ", url: `${BASE}/faq` },
  ],
  "/contact": [
    { name: "Accueil", url: BASE },
    { name: "Contact", url: `${BASE}/contact` },
  ],
};

export function getBreadcrumbSchema(pathname) {
  const items = BREADCRUMBS[pathname] || BREADCRUMBS["/"];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
