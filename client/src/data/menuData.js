// Photos: Unsplash (w=600&h=600&fit=crop) — variety per pizza type
const PIZZA_IMAGES = {
  margherita: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=600&fit=crop',
  vegetarienne: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
  regina: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop',
  pecheur: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=600&fit=crop',
  fromages: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=600&fit=crop',
  calzone: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
  fruitsDeMer: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=600&fit=crop',
  quatreSaisons: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
  chorizo: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop',
  paysanne: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
  chevreMiel: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=600&fit=crop',
  fermiere: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop',
  chicken: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
  buffalo: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop',
  napolitaine: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=600&fit=crop',
  hawaienne: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
  orientale: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop',
  piquante: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
  mexicaine: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
  americaine: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop',
  indienne: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
  streetKebab: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop',
  cannibale: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
  campagnarde: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
  laFrench: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=600&fit=crop',
  savoyarde: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=600&fit=crop',
  norvegienne: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=600&fit=crop',
  orleanaise: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=600&fit=crop',
};

const PRICES = { junior: 9, senior: 17, mega: 24 };

export const menuSections = [
  {
    id: 'classiques',
    title: 'Les Classiques',
    bases: [
      {
        id: 'classiques-tomate',
        name: 'Base tomate',
        icon: 'tomate',
        pizzas: [
          { name: 'Margherita', ingredients: 'Double Mozzarella', image: PIZZA_IMAGES.margherita },
          { name: 'Végétarienne', ingredients: 'Mozzarella, Tomates cerises, Poivrons, Olives, Champignons', image: PIZZA_IMAGES.vegetarienne },
          { name: 'Regina', ingredients: 'Mozzarella, Jambon¹, Champignons', image: PIZZA_IMAGES.regina },
          { name: 'Pêcheur', ingredients: 'Mozzarella, Thon, Oignons, Olives', image: PIZZA_IMAGES.pecheur },
          { name: '4 Fromages', ingredients: 'Mozzarella, Chèvre, Bleu, Parmesan', image: PIZZA_IMAGES.fromages },
          { name: 'Calzone', ingredients: 'Mozzarella, Jambon¹, Œuf', image: PIZZA_IMAGES.calzone },
          { name: 'Fruits de mer', ingredients: 'Mozzarella, Fruits de mer, Persillade', image: PIZZA_IMAGES.fruitsDeMer },
          { name: '4 saisons', ingredients: 'Mozzarella, Jambon¹, Artichauts, Olives, Champignons', image: PIZZA_IMAGES.quatreSaisons },
          { name: 'Chorizo', ingredients: 'Mozzarella, Chorizo², Olive, Oignons', image: PIZZA_IMAGES.chorizo },
        ],
      },
      {
        id: 'classiques-creme',
        name: 'Base crème fraîche',
        icon: 'creme',
        pizzas: [
          { name: 'Paysanne', ingredients: 'Mozzarella, Jambon¹, Pomme de terre, Oignons', image: PIZZA_IMAGES.paysanne },
          { name: 'Chèvre Miel', ingredients: 'Mozzarella, Chèvre frais, Parmesan, Miel', image: PIZZA_IMAGES.chevreMiel },
          { name: 'Fermière', ingredients: 'Mozzarella, Poulet fumé, Pomme de terre', image: PIZZA_IMAGES.fermiere },
          { name: 'Chicken', ingredients: 'Mozzarella, Poulet Tikka, Pomme de terre, Champignons', image: PIZZA_IMAGES.chicken },
          { name: 'Buffalo', ingredients: 'Mozzarella, Poulet Tikka, Poivrons, Oignons, Sauce Barbecue', image: PIZZA_IMAGES.buffalo },
        ],
      },
    ],
  },
  {
    id: 'specialites',
    title: 'Les Spécialités',
    bases: [
      {
        id: 'specialites-tomate',
        name: 'Base tomate',
        icon: 'tomate',
        pizzas: [
          { name: 'Napolitaine', ingredients: 'Mozzarella, Anchois, Câpres, Olives', image: PIZZA_IMAGES.napolitaine },
          { name: 'Hawaïenne', ingredients: 'Mozzarella, Jambon¹, Ananas', image: PIZZA_IMAGES.hawaienne },
          { name: 'Orientale', ingredients: 'Mozzarella, Merguez, Poivrons, Olives, Oeuf', image: PIZZA_IMAGES.orientale },
          { name: 'Piquante', ingredients: 'Mozzarella, Merguez, Viande Hachée, Jalapeño', image: PIZZA_IMAGES.piquante },
          { name: 'Mexicaine', ingredients: 'Mozzarella, Viande hachée, Merguez, Poivrons, Olives', image: PIZZA_IMAGES.mexicaine },
          { name: 'Américaine', ingredients: 'Mozzarella, Viande hachée, Poivrons, Oignons, Sauce Barbecue', image: PIZZA_IMAGES.americaine },
          { name: 'Indienne', ingredients: 'Mozzarella, Blanc de Poulet, Poulet Curry, Pomme de terre', image: PIZZA_IMAGES.indienne },
          { name: 'Street Kebab', ingredients: 'Mozzarella, Kebab, Pomme de terre, Oignons', image: PIZZA_IMAGES.streetKebab },
          { name: 'Cannibale', ingredients: 'Mozzarella, Poulet fumé, Chorizo, Lardons³', image: PIZZA_IMAGES.cannibale },
        ],
      },
      {
        id: 'specialites-creme',
        name: 'Base crème',
        icon: 'creme',
        pizzas: [
          { name: 'Campagnarde', ingredients: 'Mozzarella, Jambon¹, Pomme de Terre, Œuf', image: PIZZA_IMAGES.campagnarde },
          { name: 'la French', ingredients: 'Mozzarella, Jambon¹, Chèvre, Pomme de terre', image: PIZZA_IMAGES.laFrench },
          { name: 'Savoyarde', ingredients: 'Mozzarella, Lardons³, Pomme de terre, Reblochon', image: PIZZA_IMAGES.savoyarde },
          { name: 'Norvégienne', ingredients: 'Mozzarella, Saumon fumé, Pomme de terre', image: PIZZA_IMAGES.norvegienne },
          { name: 'Orléanaise', ingredients: 'Mozzarella, Moutarde, Poulet fumé, Oignons', image: PIZZA_IMAGES.orleanaise },
        ],
      },
    ],
  },
];

export const composePizza = {
  title: 'Compose ta pizza !',
  description: 'Base au choix + Fromage à pizza + 3 ingrédients au choix',
  prices: '1 Pizza = 10€ / 2 Pizzas = 19€',
};

export const promotions = [
  {
    id: 'formule-midi',
    title: 'Formule Midi',
    text: '1 PIZZA SENIOR AU CHOIX + 1 CANETTE OFFERTE',
    price: '9€',
  },
  {
    id: 'sur-place',
    title: 'Sur place ou à emporter',
    text: '1 PIZZA ACHETÉE = 1 PIZZA OFFERTE*',
    footnote: '*Offre valable uniquement sur les pizzas seniors, sur place ou à emporter. Offre non cumulable avec d\'autres promotions.',
  },
];

export const footnotes = [
  '¹ Jambon de dinde',
  '² Chorizo de bœuf',
  '³ Lardons de volailles',
];

export const sizes = [
  { name: 'JUNIOR', cm: '26 cm', price: 9 },
  { name: 'SENIOR', cm: '31 cm', price: 17 },
  { name: 'MÉGA', cm: '40 cm', price: 24 },
];

/** Quelques pizzas pour l’aperçu sur la page d’accueil */
export const featuredPizzas = [
  { name: 'Margherita', ingredients: 'Double Mozzarella', image: PIZZA_IMAGES.margherita },
  { name: '4 Fromages', ingredients: 'Mozzarella, Chèvre, Bleu, Parmesan', image: PIZZA_IMAGES.fromages },
  { name: 'la French', ingredients: 'Mozzarella, Jambon¹, Chèvre, Pomme de terre', image: PIZZA_IMAGES.laFrench },
  { name: 'Napolitaine', ingredients: 'Mozzarella, Anchois, Câpres, Olives', image: PIZZA_IMAGES.napolitaine },
  { name: 'Chèvre Miel', ingredients: 'Mozzarella, Chèvre frais, Parmesan, Miel', image: PIZZA_IMAGES.chevreMiel },
  { name: 'Savoyarde', ingredients: 'Mozzarella, Lardons³, Pomme de terre, Reblochon', image: PIZZA_IMAGES.savoyarde },
];

export { PRICES };
