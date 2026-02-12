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
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=750&fit=crop" alt="Blé et farine" />
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
      </div>
    </section>
  );
}
