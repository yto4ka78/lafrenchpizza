import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import StatusStrip from "../../components/StatusStrip/StatusStrip";
import styles from "./MenuPage.module.css";

export default function MenuPage() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Menu — Pizzas artisanales à Orléans</h1>
          <p className={styles.subtitle}>
            Pizzas au levain, classiques et spécialités. Formules midi, boissons
            et desserts. Sur place ou à emporter.
          </p>
          <p className={styles.cta}>
            <Link to="/contact">Commander par téléphone</Link> ou{" "}
            <Link to="/faq">consulter la FAQ</Link>
          </p>
        </div>
      </div>
      <Menu />
    </>
  );
}
