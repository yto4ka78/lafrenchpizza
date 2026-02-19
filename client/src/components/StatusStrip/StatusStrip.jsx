import styles from './StatusStrip.module.css';

const statusItems = [
  { label: 'Statut', value: 'Ouvert maintenant', isOpen: true },
  { label: 'Temps d\'attente', value: '~20 min', isOpen: false },
  { label: 'À emporter', value: 'Disponible', isOpen: false },
  { label: 'Four à bois', value: '480°C', isOpen: false },
];

export default function StatusStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.grid}>
        {statusItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.label}>{item.label}</div>
            <div className={`${styles.value} ${item.isOpen ? styles.open : ''}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
