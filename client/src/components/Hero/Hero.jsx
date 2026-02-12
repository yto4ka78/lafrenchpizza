import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Pizza au<br />
            levain faite<br />
            <em>correctement</em>
          </h1>
          <p className={styles.tagline}>
            Pâte fermentée 72 heures. Cuite au feu de bois à 480°C. Vin naturel au comptoir. Bienvenue sans réservation.
          </p>
          <div className={styles.ctas}>
            <Link to="/menu" className={styles.btnPrimary}>
              <span>Commander en ligne</span>
            </Link>
            <Link to="/menu" className={styles.btnSecondary}>Voir le menu</Link>
          </div>
        </div>
      </div>
      <div className={styles.badge}>
        <span>Ouvert</span>
        <strong>Aujourd'hui</strong>
      </div>
    </section>
  );
}
