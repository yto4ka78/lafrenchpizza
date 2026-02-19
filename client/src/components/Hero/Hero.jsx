import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}></div>

      <div className={styles.foodElements}>
        <div className={`${styles.utensil} ${styles.knife}`}>
          <svg viewBox="0 0 24 64" fill="none">
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="64"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M5 20 L19 20 L12 0 Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
      </div>

      <div className={styles.container}>
        <img
          src="/lafrenchpizzaline_n6tiq1.webp"
          alt=""
          className={styles.decorativePatternLeft}
          fetchPriority="low"
        />
        <div className={styles.content}>
          <h1 className={styles.srOnly}>
            LA FRENCH PIZZA — Pizzeria Orléans, pizza à emporter
          </h1>
          <div className={styles.offer}>
            <span className={styles.smallLabel}>Offre spéciale</span>
            <p className={styles.bigOffer} aria-hidden="true">
              Pizza achetée
            </p>
            <span className={styles.freeEquals}>=</span>
            <div className={styles.freeLine}>
              <span className={styles.freeNumber}>1</span>
              <span className={styles.freeText}>Offerte</span>
            </div>
          </div>

          <div className={styles.dividerSection}>
            <div className={styles.dividerLine}></div>
            <p className={styles.subtitle}>Pizzas faites maison</p>
            <div className={styles.dividerLine}></div>
          </div>

          <p className={styles.quality}>Ingrédients de qualité</p>

          <div className={styles.ctaButtons}>
            <Link to="/menu" className={styles.primaryButton}>
              Voir le menu
            </Link>
            <Link to="/contact" className={styles.secondaryButton}>
              Nos coordonnées
            </Link>
          </div>
          <div className={styles.phoneSection}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                fill="currentColor"
              />
            </svg>
            <a href="tel:0980889898" className={styles.phoneLink}>
              09 80 88 98 98
            </a>
          </div>

          <p className={styles.footnote}>
            *Offre valable uniquement sur les pizzas seniors, sur place ou à
            emporter.
          </p>
        </div>
        <img
          src="/lafrenchpizzaline_n6tiq1.webp"
          alt=""
          className={styles.decorativePatternRight}
          fetchPriority="low"
        />
      </div>

      <div className={styles.overlay}></div>
    </section>
  );
}
