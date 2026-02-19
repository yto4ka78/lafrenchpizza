import { Link } from "react-router-dom";
import styles from "./FormulesInfos.module.css";

export default function FormulesInfos() {
  return (
    <section className={styles.section} aria-labelledby="formules-title">
      <header className={styles.header}>
        <p className={styles.kicker}>Formules & infos</p>
        <h2 id="formules-title" className={styles.title}>
          Nos formules
        </h2>
        <p className={styles.lead}>
          Des offres simples et claires — sur place ou à emporter.
        </p>
      </header>

      <div className={styles.grid}>
        <article className={styles.card}>
          <p className={styles.cardKicker}>Offre personnalisée</p>
          <h3 className={styles.cardTitle}>Compose ta pizza</h3>
          <p className={styles.cardText}>
            Base au choix + fromage à pizza + 3 ingrédients au choix
          </p>

          <div className={styles.priceInline}>
            <span className={styles.priceText}>1 Pizza = 10€</span>
            <span className={styles.priceSeparator}>/</span>
            <span className={styles.priceText}>2 Pizzas = 19€</span>
          </div>
        </article>

        <article className={styles.card}>
          <p className={styles.cardKicker}>Formule midi</p>
          <h3 className={styles.cardTitle}>Pizza + canette</h3>
          <p className={styles.cardText}>
            1 pizza <strong>Senior</strong> au choix + 1 canette offerte
          </p>

          <div className={styles.bigPriceWrap}>
            <span className={styles.bigPrice}>9€</span>
            <span className={styles.bigPriceHint}>Midi uniquement</span>
          </div>
        </article>

        <article className={styles.card}>
          <p className={styles.cardKicker}>Sur place ou à emporter</p>
          <h3 className={styles.cardTitle}>Une pizza achetée = une offerte</h3>
          <p className={styles.cardText}>
            L&apos;offre parfaite pour partager a deux*
          </p>

          <p className={styles.note}>
            *Offre valable uniquement sur les pizzas <strong>Senior</strong>,
            sur place ou à emporter. Offre non cumulable avec d&apos;autres
            promotions.
          </p>
        </article>
      </div>

      <p className={styles.orderCta}>
        <Link to="/contact">Commander par téléphone →</Link>
      </p>

      <div className={styles.meta}>
        <div className={styles.metaBlock}>
          <h4 className={styles.metaTitle}>Tailles</h4>
          <ul className={styles.metaList}>
            <li>
              <strong>Junior</strong> — 26 cm
            </li>
            <li>
              <strong>Senior</strong> — 31 cm
            </li>
            <li>
              <strong>Méga</strong> — 40 cm
            </li>
          </ul>
        </div>
        <div className={styles.metaBlock}>
          <h4 className={styles.metaTitle}>Notes ingrédients</h4>
          <ul className={styles.metaList}>
            <li>¹ Jambon de dinde</li>
            <li>² Chorizo de bœuf</li>
            <li>³ Lardons de volailles</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
