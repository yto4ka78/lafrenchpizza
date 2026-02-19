import FAQ from "../../components/FAQ/FAQ";
import styles from "./FAQPage.module.css";

export default function FAQPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>FAQ — Questions fréquentes</h1>
          <p className={styles.subtitle}>
            Emplacement, réservation, menu, à emporter : toutes les réponses
            pour préparer votre visite à la pizzeria LA FRENCH PIZZA à Orléans.
          </p>
        </div>
      </section>
      <FAQ />
    </div>
  );
}
