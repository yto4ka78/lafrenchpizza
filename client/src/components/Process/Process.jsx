import styles from './Process.module.css';

const steps = [
  {
    id: 1,
    title: 'Passez votre commande',
    description: 'En ligne, par téléphone ou sur place. Nous prenons les commandes jusqu\'à 21h30 tous les jours. Livraison disponible dans un rayon de 3 km.',
  },
  {
    id: 2,
    title: 'Nous cuisons votre pizza',
    description: 'Chaque pizza entre dans le four à bois à 480°C pendant exactement 90 secondes. Le timing compte.',
  },
  {
    id: 3,
    title: 'Prête en 20 minutes',
    description: 'Retrait au comptoir ou livraison à domicile. Chaude, croustillante et prête à déguster.',
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="delivery">
      <div className={styles.container}>
        <h2>Commande à emporter ou livraison</h2>
        <div className={styles.timeline}>
          {steps.map((step) => (
            <div key={step.id} className={styles.step}>
              <span className={styles.number}>{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
