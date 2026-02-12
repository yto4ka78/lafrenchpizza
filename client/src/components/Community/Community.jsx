import { useState } from "react";
import styles from "./Community.module.css";

const galleryItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&h=1600&fit=crop",
    caption: "Pizza Margherita",
    description: "Tomates San Marzano, mozzarella di bufala",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop",
    caption: "Notre cuisine",
    description: "Derrière le four à bois",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=800&fit=crop",
    caption: "Sélection de vins",
    description: "Vins naturels de qualité",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1200&h=800&fit=crop",
    caption: "Four à bois",
    description: "Cuisson traditionnelle à 480°C",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=800&fit=crop",
    caption: "Ingrédients frais",
    description: "Herbes du jardin",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&h=800&fit=crop",
    caption: "Fromages artisanaux",
    description: "Sélection locale",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=1200&fit=crop",
    caption: "Levain maison",
    description: "Fermentation 72 heures",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=800&fit=crop",
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
