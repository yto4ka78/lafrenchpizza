const PIZZA_IMAGE = {
  mobile: "/pizzas/lafrenchpizzapizza_768px.webp",
  desktop: "/pizzas/lafrenchpizzapizza_1000px.webp",
};

const pizzaPhoto = (path) => ({
  mobile: path,
  desktop: path,
});

const PRICES = { junior: 9, senior: 17, mega: 24 };

export const menuSections = [
  {
    id: "classiques",
    title: "Les Classiques",
    bases: [
      {
        id: "classiques-tomate",
        name: "Base tomate",
        icon: "tomate",
        pizzas: [
          {
            name: "Margherita",
            ingredients: "Double Mozzarella",
            image: pizzaPhoto("/pizzas/classical/Marguerita.webp"),
          },
          {
            name: "Végétarienne",
            ingredients:
              "Mozzarella, Tomates cerises, Poivrons, Olives, Champignons",
            image: pizzaPhoto("/pizzas/classical/Végétarienne.webp"),
          },
          {
            name: "Regina",
            ingredients: "Mozzarella, Jambon¹, Champignons",
            image: pizzaPhoto("/pizzas/classical/Regina.webp"),
          },
          {
            name: "Pêcheur",
            ingredients: "Mozzarella, Thon, Oignons, Olives",
            image: pizzaPhoto("/pizzas/classical/Pêcheur.webp"),
          },
          {
            name: "4 Fromages",
            ingredients: "Mozzarella, Chèvre, Bleu, Parmesan",
            image: pizzaPhoto("/pizzas/classical/4-fromages.webp"),
          },
          {
            name: "Calzone",
            ingredients: "Mozzarella, Jambon¹, Œuf",
            image: pizzaPhoto("/pizzas/classical/Calzone.webp"),
          },
          {
            name: "Fruits de mer",
            ingredients: "Mozzarella, Fruits de mer, Persillade",
            image: pizzaPhoto("/pizzas/classical/Fruits de mer.webp"),
          },
          {
            name: "4 saisons",
            ingredients: "Mozzarella, Jambon¹, Artichauts, Olives, Champignons",
            image: pizzaPhoto("/pizzas/classical/4 saisons.webp"),
          },
          {
            name: "Chorizo",
            ingredients: "Mozzarella, Chorizo², Olive, Oignons",
            image: pizzaPhoto("/pizzas/classical/Chorizo.webp"),
          },
        ],
      },
      {
        id: "classiques-creme",
        name: "Base crème fraîche",
        icon: "creme",
        pizzas: [
          {
            name: "Paysanne",
            ingredients: "Mozzarella, Jambon¹, Pomme de terre, Oignons",
            image: pizzaPhoto("/pizzas/classical/Paysanne.webp"),
          },
          {
            name: "Chèvre Miel",
            ingredients: "Mozzarella, Chèvre frais, Parmesan, Miel",
            image: pizzaPhoto("/pizzas/classical/Chèvre miel.webp"),
          },
          {
            name: "Fermière",
            ingredients: "Mozzarella, Poulet fumé, Pomme de terre",
            image: pizzaPhoto("/pizzas/classical/Fermière.webp"),
          },
          {
            name: "Chicken",
            ingredients:
              "Mozzarella, Poulet Tikka, Pomme de terre, Champignons",
            image: pizzaPhoto("/pizzas/classical/Chicken.webp"),
          },
          {
            name: "Buffalo",
            ingredients:
              "Mozzarella, Poulet Tikka, Poivrons, Oignons, Sauce Barbecue",
            image: pizzaPhoto("/pizzas/classical/Buffalo.webp"),
          },
        ],
      },
    ],
  },
  {
    id: "specialites",
    title: "Les Spécialités",
    bases: [
      {
        id: "specialites-tomate",
        name: "Base tomate",
        icon: "tomate",
        pizzas: [
          {
            name: "Napolitaine",
            ingredients: "Mozzarella, Anchois, Câpres, Olives",
            image: pizzaPhoto("/pizzas/special/Napolitaine.webp"),
          },
          {
            name: "Hawaïenne",
            ingredients: "Mozzarella, Jambon¹, Ananas",
            image: pizzaPhoto("/pizzas/special/Hawaïenne.webp"),
          },
          {
            name: "Orientale",
            ingredients: "Mozzarella, Merguez, Poivrons, Olives, Oeuf",
            image: pizzaPhoto("/pizzas/special/Orientale.webp"),
          },
          {
            name: "Piquante",
            ingredients: "Mozzarella, Merguez, Viande Hachée, Jalapeño",
            image: pizzaPhoto("/pizzas/special/Piquante.webp"),
          },
          {
            name: "Mexicaine",
            ingredients: "Mozzarella, Viande hachée, Merguez, Poivrons, Olives",
            image: PIZZA_IMAGE,
          },
          {
            name: "Américaine",
            ingredients:
              "Mozzarella, Viande hachée, Poivrons, Oignons, Sauce Barbecue",
            image: pizzaPhoto("/pizzas/special/Américaine.webp"),
          },
          {
            name: "Indienne",
            ingredients:
              "Mozzarella, Blanc de Poulet, Poulet Curry, Pomme de terre",
            image: pizzaPhoto("/pizzas/special/Indienne.webp"),
          },
          {
            name: "Street Kebab",
            ingredients: "Mozzarella, Kebab, Pomme de terre, Oignons",
            image: pizzaPhoto("/pizzas/special/Street-Kebab.webp"),
          },
          {
            name: "Cannibale",
            ingredients: "Mozzarella, Poulet fumé, Chorizo, Lardons³",
            image: pizzaPhoto("/pizzas/special/Cannibale.webp"),
          },
        ],
      },
      {
        id: "specialites-creme",
        name: "Base crème",
        icon: "creme",
        pizzas: [
          {
            name: "Campagnarde",
            ingredients: "Mozzarella, Jambon¹, Pomme de Terre, Œuf",
            image: pizzaPhoto("/pizzas/special/Campagnarde.webp"),
          },
          {
            name: "la French",
            ingredients: "Mozzarella, Jambon¹, Chèvre, Pomme de terre",
            image: pizzaPhoto("/pizzas/special/la-French.webp"),
          },
          {
            name: "Savoyarde",
            ingredients: "Mozzarella, Lardons³, Pomme de terre, Reblochon",
            image: pizzaPhoto("/pizzas/special/Savoyarde.webp"),
          },
          {
            name: "Norvégienne",
            ingredients: "Mozzarella, Saumon fumé, Pomme de terre",
            image: pizzaPhoto("/pizzas/special/Norvégienne.webp"),
          },
          {
            name: "Orléanaise",
            ingredients: "Mozzarella, Moutarde, Poulet fumé, Oignons",
            image: pizzaPhoto("/pizzas/special/Orléanaise.webp"),
          },
        ],
      },
    ],
  },
];

export const composePizza = {
  title: "Compose ta pizza !",
  description: "Base au choix + Fromage à pizza + 3 ingrédients au choix",
  prices: "1 Pizza = 10€ / 2 Pizzas = 19€",
};

export const promotions = [
  {
    id: "formule-midi",
    title: "Formule Midi",
    text: "1 PIZZA SENIOR AU CHOIX + 1 CANETTE OFFERTE",
    price: "9€",
  },
  {
    id: "sur-place",
    title: "Sur place ou à emporter",
    text: "1 PIZZA ACHETÉE = 1 PIZZA OFFERTE*",
    footnote:
      "*Offre valable uniquement sur les pizzas seniors, sur place ou à emporter. Offre non cumulable avec d'autres promotions.",
  },
];

export const drinks = {
  title: "Boissons",
  subtitle: "Boissons fraîches pour accompagner votre pizza",
  items: [
    { name: "Pepsi", image: "/lafrenchpizaapepsi.webp" },
    { name: "Pepsi Max", image: "/lafrenchpizaapepsimax.webp" },
    { name: "7up", image: "/lafrenchpizaa7up.webp" },
    { name: "Sprite", image: "/lafrenchpizaasprite.webp" },
    { name: "Fanta", image: "/lafrenchpizaafanta.webp" },
    { name: "Lipton Ice Tea", image: "/lafrenchpizaalipton.webp" },
    { name: "Coca-Cola", image: "/lafrenchpizaaCocaCola.webp" },
    { name: "Oasis", image: "/lafrenchpizaaoasis.webp" },
    { name: "Orangina", image: "/lafrenchpizaaorangina.webp" },
  ],
  prices: [
    { size: "Canette 33 cl", price: "2,00", recommended: false },
    { size: "Bouteille 1,5L", price: "3,00", recommended: true },
    { size: "Bouteille 2L", price: "3,50", recommended: false },
  ],
};

export const desserts = {
  title: "Desserts",
  subtitle: "Une touche sucrée pour finir votre repas",
  items: [
    {
      name: "Haagen-Dazs",
      description: "Parfums au choix",
      image: "/lafrenchpizaahaagen_dazs.webp",
      prices: ["150ml 3.50€", "500ml 6.50€"],
    },
    {
      name: "Tiramisu",
      description: "Parfums au choix",
      image: "/lafrenchpizaatiramisu.webp",
      prices: ["3.00€"],
    },
    {
      name: "Tarte daim",
      description: "",
      image: "/lafrenchpizaaTarteDaim.webp",
      prices: ["3.00€"],
    },
    {
      name: "Muffins",
      description: "",
      image: "/lafrenchpizaamufin.webp",
      prices: ["3.00€"],
    },
  ],
};

export const footnotes = [
  "¹ Jambon de dinde",
  "² Chorizo de bœuf",
  "³ Lardons de volailles",
];

export const sizes = [
  { name: "JUNIOR", cm: "26 cm", price: 9 },
  { name: "SENIOR", cm: "31 cm", price: 17 },
  { name: "MÉGA", cm: "40 cm", price: 24 },
];

export const featuredPizzas = [
  {
    name: "Margherita",
    ingredients: "Double Mozzarella",
    image: pizzaPhoto("/pizzas/classical/Marguerita.webp"),
  },
  {
    name: "4 Fromages",
    ingredients: "Mozzarella, Chèvre, Bleu, Parmesan",
    image: pizzaPhoto("/pizzas/classical/4-fromages.webp"),
  },
  {
    name: "la French",
    ingredients: "Mozzarella, Jambon¹, Chèvre, Pomme de terre",
    image: pizzaPhoto("/pizzas/special/la-French.webp"),
  },
  {
    name: "Napolitaine",
    ingredients: "Mozzarella, Anchois, Câpres, Olives",
    image: pizzaPhoto("/pizzas/special/Napolitaine.webp"),
  },
  {
    name: "Chèvre Miel",
    ingredients: "Mozzarella, Chèvre frais, Parmesan, Miel",
    image: pizzaPhoto("/pizzas/classical/Chèvre miel.webp"),
  },
  {
    name: "Savoyarde",
    ingredients: "Mozzarella, Lardons³, Pomme de terre, Reblochon",
    image: pizzaPhoto("/pizzas/special/Savoyarde.webp"),
  },
];

export { PRICES };
