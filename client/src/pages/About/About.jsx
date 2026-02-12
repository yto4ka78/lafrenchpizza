import Story from '../../components/Story/Story';
import Community from '../../components/Community/Community';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>À propos de nous</h1>
          <p className={styles.subtitle}>
            Notre histoire, nos valeurs et notre passion pour la pizza artisanale.
          </p>
        </div>
      </div>
      <Story />
      <Community />
    </>
  );
}
