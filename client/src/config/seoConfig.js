const BASE = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://lafrenchpizza.fr";

export const SEO_PAGES = {
  "/": {
    title: "LA FRENCH PIZZA — Pizzeria Orléans | Pizza au levain à emporter",
    description:
      "Pizzeria à Orléans : pizzas au levain faites maison, ingrédients de qualité. Sur place ou à emporter. 1 pizza senior achetée = 1 offerte. Faubourg Bannier, 45000.",
  },
  "/menu": {
    title: "Menu — Pizzas classiques & spécialités | LA FRENCH PIZZA Orléans",
    description:
      "Découvrez le menu : pizzas artisanales, formules midi à 9€, boissons et desserts. Pizzeria LA FRENCH PIZZA à Orléans.",
  },
  "/about": {
    title: "Notre Histoire — Pizzeria artisanale à Orléans | LA FRENCH PIZZA",
    description:
      "Pizzeria née en 2020 à Orléans. Pizzas authentiques au levain, ingrédients sélectionnés. Sur place ou à emporter dans une ambiance conviviale.",
  },
  "/faq": {
    title: "FAQ — Questions fréquentes | LA FRENCH PIZZA Orléans",
    description:
      "Emplacement, parking, réservation, menu, à emporter. Réponses aux questions sur la pizzeria LA FRENCH PIZZA à Orléans.",
  },
  "/contact": {
    title: "Contact — Adresse, horaires | LA FRENCH PIZZA Orléans",
    description:
      "113 rue du Faubourg Bannier, 45000 Orléans. Horaires, téléphone 09 80 88 98 98. Pizzeria ouverte mardi à dimanche. Sur place ou à emporter.",
  },
};

export const DEFAULT_OG_IMAGE = `${BASE}/lafrenchpizzahero.webp`;
export const SITE_NAME = "LA FRENCH PIZZA";
