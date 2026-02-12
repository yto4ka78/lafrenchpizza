import Menu from "../../components/Menu/Menu";
import StatusStrip from "../../components/StatusStrip/StatusStrip";
import styles from "./MenuPage.module.css";

export default function MenuPage() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Notre Menu</h1>
          <p className={styles.subtitle}>
            Découvrez notre sélection de pizzas artisanales préparées avec des
            ingrédients frais et de qualité.
          </p>
        </div>
      </div>
      <Menu />
    </>
  );
}
