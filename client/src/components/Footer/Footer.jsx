import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Adresse</h3>
          <p>113 Rue du Faubourg Bannier</p>
          <p>45000 Orléans, France</p>
          <p>
            <a href="tel:+33123456789">+33 1 23 45 67 89</a>
          </p>
        </div>
        <div className={styles.section}>
          <h3>Horaires</h3>
          <p>Mardi — Jeudi : 17h - 22h</p>
          <p>Vendredi — Samedi : 17h - 23h</p>
          <p>Dimanche : 16h - 21h</p>
          <p>Lundi : Fermé</p>
        </div>
        <div className={styles.section}>
          <h3>Liens</h3>
          <p><Link to="/">Accueil</Link></p>
          <p><Link to="/menu">Menu</Link></p>
          <p><Link to="/about">À propos</Link></p>
          <p><Link to="/contact">Contact</Link></p>
          <p><Link to="/faq">FAQ</Link></p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2026 LA FRENCH PIZZA. Tous droits réservés.</p>
        <p className={styles.tagline}>Cuit avec passion, servi avec amour.</p>
      </div>
    </footer>
  );
}
