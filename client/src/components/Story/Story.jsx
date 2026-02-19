import { Link } from 'react-router-dom';
import styles from './Story.module.css';

const values = [
  'Fermentation au levain de 72 heures',
  'Produits locaux des marchés de producteurs',
  'Mélange de farine moulu maison',
  'Vin naturel et bière artisanale uniquement',
];

export default function Story() {
  return (
    <section className={styles.story} id="about">
      <div className={styles.image}>
        <picture>
          <source
            media="(min-width: 1025px)"
            srcSet="/another/storyPhoto_1000px.webp"
          />
          <img
            src="/another/storyPhoto_764px.webp"
            alt="Blé et farine"
            loading="lazy"
            width={600}
            height={750}
          />
        </picture>
      </div>
      <div className={styles.content}>
        <h2>Un lieu de quartier sans compromis</h2>
        <p className={styles.text}>
          Nous avons ouvert en 2019 avec un seul objectif : faire la pizza comme elle doit être faite. 
          Cela signifie une longue fermentation, des ingrédients de qualité et une attention à chaque détail. 
          Pas de levure industrielle. Pas de fromage pré-râpé. Aucun compromis.
        </p>
        <ul className={styles.values}>
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <p className={styles.cta}>
          <Link to="/about">Découvrir notre histoire →</Link>
        </p>
      </div>
    </section>
  );
}
