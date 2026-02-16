import { Link } from "react-router-dom";
import {
  menuSections,
  composePizza,
  promotions,
  footnotes,
  sizes,
  featuredPizzas,
  drinks,
} from "../../data/menuData";
import styles from "./Menu.module.css";

export default function Menu({ preview = false }) {
  if (preview) {
    return (
      <section className={styles.previewSection} id="menu">
        <div className={styles.container}>
          <h2 className={styles.previewTitle}>Quelques pizzas</h2>
          <p className={styles.previewSubtitle}>
            Découvrez une sélection de nos créations. Tout le menu sur la page Menu.
          </p>
          <ul className={styles.previewGrid}>
            {featuredPizzas.slice(0, 4).map((pizza) => (
              <li key={pizza.name} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardName}>{pizza.name}</h4>
                  <p className={styles.cardIngredients}>{pizza.ingredients}</p>
                  <div className={styles.priceStrip}>
                    {sizes.map((s) => (
                      <span key={s.name} className={styles[`price_${s.name.toLowerCase()}`]}>
                        {s.name} {s.price}€
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.previewCta}>
            <Link to="/menu" className={styles.previewLink}>
              Voir tout le menu →
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {menuSections.map((section) => (
          <section key={section.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            {section.bases.map((base) => (
              <div key={base.id} className={styles.baseBlock}>
                <h3 className={styles.baseTitle}>
                  <span className={base.icon === 'tomate' ? styles.tomate : styles.creme} aria-hidden />
                  {base.name}
                </h3>
                <ul className={styles.pizzaGrid}>
                  {base.pizzas.map((pizza) => (
                    <li key={pizza.name} className={styles.card}>
                      <div className={styles.cardImageWrap}>
                        <img
                          src={pizza.image}
                          alt={pizza.name}
                          className={styles.cardImage}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.cardBody}>
                        <h4 className={styles.cardName}>{pizza.name}</h4>
                        <p className={styles.cardIngredients}>{pizza.ingredients}</p>
                        <div className={styles.priceStrip}>
                          {sizes.map((s) => (
                            <span key={s.name} className={styles[`price_${s.name.toLowerCase()}`]}>
                              {s.name} {s.price}€
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}

        <section className={styles.drinksSection}>
          <div className={styles.drinksHeader}>
            <h2 className={styles.drinksTitle}>{drinks.title}</h2>
            <p className={styles.drinksSubtitle}>{drinks.subtitle}</p>
            <div className={styles.drinksDivider}></div>
          </div>

          <div className={styles.drinksChips}>
            {drinks.items.map((item, index) => (
              <div key={index} className={styles.drinkChip}>
                <div className={styles.drinkImageWrap}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={styles.drinkImage}
                  />
                </div>
                <div className={styles.drinkCardBody}>
                  <h3 className={styles.drinkCardName}>{item.name}</h3>
                  <p className={styles.drinkCardDesc}>Canette fraîche</p>
                  <div className={styles.priceStrip}>
                    <span className={styles.price_canette}>Canette 2€</span>
                    <span className={styles.price_bouteille}>1.5L 3€</span>
                    <span className={styles.price_bouteille2l}>2L 3.5€</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.composeSection}>
          <h2 className={styles.composeTitle}>{composePizza.title}</h2>
          <p className={styles.composeDesc}>{composePizza.description}</p>
          <p className={styles.composePrices}>{composePizza.prices}</p>
        </section>

        <section className={styles.promoSection}>
          {promotions.map((promo) => (
            <div key={promo.id} className={styles.promoCard}>
              <h3 className={styles.promoTitle}>{promo.title}</h3>
              <p className={styles.promoText}>{promo.text}</p>
              {promo.price && <span className={styles.promoPrice}>{promo.price}</span>}
              {promo.footnote && <p className={styles.promoFootnote}>{promo.footnote}</p>}
            </div>
          ))}
        </section>

        <div className={styles.sizesLegend}>
          {sizes.map((s) => (
            <span key={s.name} className={styles.sizeBadge}>
              <strong>{s.name}</strong> {s.cm}
            </span>
          ))}
        </div>

        <div className={styles.footnotes}>
          {footnotes.map((note, i) => (
            <span key={i} className={styles.footnote}>{note}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
