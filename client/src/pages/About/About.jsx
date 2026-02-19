import { Link } from "react-router-dom";
import styles from "./About.module.css";

export default function AboutV2() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroDecor}>✦</div>
          <h1 className={styles.heroTitle}>Notre Histoire — Pizzeria à Orléans</h1>
          <p className={styles.heroSubtitle}>
            Une pizzeria née d'une passion pour les pizzas authentiques au levain
          </p>
          <div className={styles.heroDecor}>✦</div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <span className={styles.timelineYear}>2020</span>
              <h2 className={styles.timelineTitle}>Le Commencement</h2>
              <p className={styles.timelineText}>
                Chez La French Pizza, tout part d'une idée simple : proposer des
                pizzas généreuses, rapides et accessibles, sans compromis sur la
                qualité. Notre pizzeria est née avec l'envie d'offrir un lieu où
                l'on peut venir chercher une bonne pizza, simplement.
              </p>
            </div>
            <div className={styles.timelineImage}>
              <img
                src="/histoiry/lafrenchpizza_histoire_1.webp"
                alt="Le début de notre histoire"
                className={styles.timelineImg}
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.timelineReverse}`}>
            <div className={styles.timelineContent}>
              <span className={styles.timelineYear}>2021</span>
              <h2 className={styles.timelineTitle}>La Philosophie</h2>
              <p className={styles.timelineText}>
                Nous croyons que la pizza est avant tout un moment de partage.
                C'est pourquoi nous avons imaginé une carte claire, des formules
                simples et des offres qui permettent de profiter de bons
                produits sans se compliquer la vie.
              </p>
            </div>
            <div className={styles.timelineImage}>
              <img
                src="/histoiry/lafrenchpizza_histoire_2.webp"
                alt="Notre philosophie"
                className={styles.timelineImg}
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <span className={styles.timelineYear}>2023</span>
              <h2 className={styles.timelineTitle}>L'Excellence</h2>
              <p className={styles.timelineText}>
                Chez nous, pas de discours compliqué : des pizzas préparées avec
                soin, des ingrédients sélectionnés et une cuisine faite pour
                faire plaisir. Chaque pizza raconte une histoire de passion et
                de savoir-faire.
              </p>
            </div>
            <div className={styles.timelineImage}>
              <img
                src="/histoiry/lafrenchpizza_histoire_3.webp"
                alt="L'excellence culinaire"
                className={styles.timelineImg}
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.timelineReverse}`}>
            <div className={styles.timelineContent}>
              <span className={styles.timelineYear}>Aujourd'hui</span>
              <h2 className={styles.timelineTitle}>À Orléans</h2>
              <p className={styles.timelineText}>
                Installés à Orléans, nous accueillons chaque jour nos clients
                sur place ou à emporter dans une ambiance simple et conviviale.
                Notre objectif reste le même : vous proposer une expérience
                rapide, chaleureuse et gourmande.
              </p>
            </div>
            <div className={styles.timelineImage}>
              <img
                src="/another/lafrenchpizza_background_restaurant.webp"
                alt="Notre pizzeria aujourd'hui"
                className={styles.timelineImg}
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.heroCtaSection}>
        <div className={styles.heroCtaOverlay}></div>
        <div className={styles.heroCtaContent}>
          <blockquote className={styles.heroQuote}>
            <p className={styles.heroQuoteText}>
              "Une bonne pizza doit rester un plaisir simple. Un moment à
              partager, sans prise de tête."
            </p>
            <cite className={styles.heroQuoteCite}>— LA FRENCH PIZZA</cite>
          </blockquote>
          <h2 className={styles.heroCtaTitle}>Prêt à découvrir nos pizzas ?</h2>
          <p className={styles.heroCtaSubtitle}>
            Bienvenue chez La French Pizza 🍕
          </p>
          <div className={styles.heroCtaButtons}>
            <Link to="/menu" className={styles.heroCtaButton}>
              Voir notre carte
            </Link>
            <Link to="/contact" className={styles.heroCtaButtonSecondary}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
