import { Link } from "react-router-dom";
import styles from "./Process.module.css";

const steps = [
  {
    id: 1,
    title: "Passez votre commande",
    description:
      "Appelez-nous à l'avance pour réserver votre pizza. Nous prenons les commandes jusqu'à la fermeture (fermé le lundi). Vous pouvez aussi commander directement sur place.",
  },
  {
    id: 2,
    title: "Nous cuisons votre pizza",
    description:
      "Chaque pizza entre dans le four à bois à 480°C pendant exactement 90 secondes. Le timing compte.",
  },
  {
    id: 3,
    title: "Prête en 20 minutes",
    description:
      "Retrait au comptoir. Chaude, croustillante et prête à déguster.",
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="delivery">
      <div className={styles.container}>
        <h2>Commande à emporter</h2>
        <div className={styles.timeline}>
          {steps.map((step) => (
            <div key={step.id} className={styles.step}>
              <span className={styles.number}>{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <p className={styles.cta}>
          <Link to="/contact" className={styles.ctaLink}>
            Commander par téléphone →
          </Link>
        </p>
      </div>
    </section>
  );
}
