import { useState } from "react";
import { Link } from "react-router-dom";
import { FAQ_BLOCKS } from "../../data/faqData";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.faq} aria-labelledby="faq-title">
      <header className={styles.header}>
        <p className={styles.kicker}>Questions fréquentes</p>
        <h2 id="faq-title" className={styles.title}>
          Tout ce que vous devez savoir
        </h2>
        <p className={styles.subtitle}>
          Retrouvez les réponses aux questions les plus posées.{" "}
          <Link to="/menu">Voir le menu</Link> —{" "}
          <Link to="/contact">Contact et horaires</Link>
        </p>
      </header>

      <div className={styles.blocks}>
        {FAQ_BLOCKS.map((block) => (
          <div key={block.id} className={styles.block}>
            <h3 className={styles.blockTitle}>{block.title}</h3>
            <p className={styles.blockSubtitle}>{block.subtitle}</p>
            <ul className={styles.list}>
              {block.items.map((item, idx) => {
                const id = `${block.id}-${idx}`;
                const isOpen = openId === id;
                return (
                  <li key={id} className={styles.item}>
                    <button
                      type="button"
                      className={`${styles.question} ${isOpen ? styles.open : ""}`}
                      onClick={() => toggle(id)}
                      aria-expanded={isOpen}
                      aria-controls={`answer-${id}`}
                      id={`question-${id}`}
                    >
                      <span>{item.question}</span>
                      <span className={styles.icon} aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      id={`answer-${id}`}
                      className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                      role="region"
                      aria-labelledby={`question-${id}`}
                      aria-hidden={!isOpen}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
