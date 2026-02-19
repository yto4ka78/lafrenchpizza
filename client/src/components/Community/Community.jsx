import { useState } from "react";
import styles from "./Community.module.css";

const galleryItems = [
  {
    id: 1,
    image: "/galery/lafrenchpizzaGalery_4.webp",
    caption: "Pizza Margherita",
    description: "Tomates San Marzano, mozzarella di bufala",
  },
  {
    id: 2,
    image: "/galery/lafrenchpizzaGalery_2.webp",
    caption: "Notre cuisine",
    description: "Derrière le four à bois",
  },
  {
    id: 3,
    image: "/galery/lafrenchpizzaGalery_5.webp",
    caption: "Sélection de vins",
    description: "Vins naturels de qualité",
  },
  {
    id: 4,
    image: "/galery/lafrenchpizzaGalery_1.webp",
    caption: "Boissons",
    description: "Coca-Cola, Sprite, Fanta et autres softs",
  },
  {
    id: 5,
    image: "/galery/lafrenchpizzaGalery_3.webp",
    caption: "Ingrédients frais",
    description: "Herbes du jardin",
  },
  {
    id: 6,
    image: "/galery/lafrenchpizzaGalery_6.webp",
    caption: "Fromages artisanaux",
    description: "Sélection locale",
  },
  {
    id: 7,
    image: "/galery/lafrenchpizzaGalery_7.webp",
    caption: "Levain maison",
    description: "Fermentation 72 heures",
  },
  {
    id: 8,
    image: "/galery/lafrenchpizzaGalery_8.webp",
    caption: "Tomates San Marzano",
    description: "Ingrédients d'exception",
  },
];

export default function Community() {
  const items = galleryItems;
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  return (
    <section className={styles.community}>
      <header className={styles.header}>
        <span className={styles.label}>Galerie</span>
        <h2 className={styles.title}>Notre univers</h2>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.subtitle}>
          Découvrez l'artisanat derrière chaque pizza, de la sélection des
          ingrédients à la cuisson au feu de bois.
        </p>
      </header>

      <div className={styles.grid}>
        {items.map((item, idx) => (
          <figure
            key={item.id}
            className={`${styles.card} ${styles[`slot${idx + 1}`]} ${
              loadedImages.has(item.id) ? styles.cardLoaded : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.caption}
              className={styles.img}
              loading="lazy"
              onLoad={() => handleImageLoad(item.id)}
            />
            <figcaption className={styles.caption}>
              <span className={styles.capTag}>{item.description}</span>
              <span className={styles.capTitle}>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
