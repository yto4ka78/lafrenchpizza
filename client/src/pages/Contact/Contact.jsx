import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

const CONTACT_DATA = {
  businessName: "LA FRENCH PIZZA",
  address: "113 rue du Faubourg Bannier",
  cityZip: "45000 Orléans",
  phone: "09 80 88 98 98",
  whatsapp: "09 80 88 98 98",
  email: "info@lafrench-pizza.com",
  hours: {
    "Mardi — Jeudi": "17h - 22h",
    "Vendredi — Samedi": "17h - 23h",
    Dimanche: "16h - 21h",
    Lundi: "Fermé",
  },
  mapUrl: "https://www.openstreetmap.org/?mlat=47.913624&mlon=1.899586&zoom=15",
  mapLat: 47.913624,
  mapLon: 1.899586,
  socialLinks: [
    { label: "Instagram", url: "https://instagram.com/lafrenchpizza" },
    { label: "Facebook", url: "https://facebook.com/lafrenchpizza" },
  ],
};

export default function Contact() {
  return (
    <>
      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>Emplacement & Contact</h1>
            <p className={styles.heroSubtitle}>
              Retrouvez-nous à Orléans ou contactez-nous directement.
            </p>
            <p className={styles.heroSubtitle}>
              <Link to="/menu">Voir notre menu</Link> ·{" "}
              <Link to="/faq">FAQ</Link>
            </p>
          </div>
        </section>

        <section className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.rightColumn}>
                <div className={styles.pizzaPanel}>
                  <h2 className={styles.pizzaPanelTitle}>Contactez-nous</h2>
                  <div className={styles.pizzaPanelMethods}>
                    <a
                      href={`tel:${CONTACT_DATA.phone.replace(/\s/g, "")}`}
                      className={styles.pizzaPanelLink}
                    >
                      <span className={styles.pizzaPanelLabel}>Téléphone</span>
                      <span className={styles.pizzaPanelValue}>
                        {CONTACT_DATA.phone}
                      </span>
                    </a>
                    <a
                      href={`mailto:${CONTACT_DATA.email}`}
                      className={styles.pizzaPanelLink}
                    >
                      <span className={styles.pizzaPanelLabel}>Email</span>
                      <span className={styles.pizzaPanelValue}>
                        {CONTACT_DATA.email}
                      </span>
                    </a>
                  </div>

                  {CONTACT_DATA.socialLinks.length > 0 && (
                    <div className={styles.pizzaPanelSocial}>
                      <span className={styles.pizzaPanelLabel}>
                        Suivez-nous
                      </span>
                      <div className={styles.pizzaPanelSocialLinks}>
                        {CONTACT_DATA.socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pizzaPanelSocialLink}
                          >
                            {social.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <h2 className={styles.pizzaPanelTitleSecondary}>
                    Horaires d'ouverture
                  </h2>
                  <div className={styles.pizzaPanelHours}>
                    {Object.entries(CONTACT_DATA.hours).map(([day, hours]) => (
                      <div key={day} className={styles.pizzaPanelHoursRow}>
                        <span className={styles.pizzaPanelHoursDay}>{day}</span>
                        <span className={styles.pizzaPanelHoursTime}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className={styles.pizzaPanelReassurance}>
                    Nous répondons sous 24h
                  </p>
                </div>
              </div>

              <div className={styles.leftColumn}>
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>Notre adresse</h2>
                  <div className={styles.mapContainer}>
                    <iframe
                      src={`https://www.openstreetmap.org/export/embed.html?bbox=${CONTACT_DATA.mapLon - 0.01}%2C${CONTACT_DATA.mapLat - 0.002}%2C${CONTACT_DATA.mapLon + 0.01}%2C${CONTACT_DATA.mapLat + 0.002}&layer=mapnik&marker=${CONTACT_DATA.mapLat},${CONTACT_DATA.mapLon}`}
                      width="100%"
                      height="300"
                      frameBorder="0"
                      title="Carte de localisation"
                      className={styles.map}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.addressBlock}>
                    <p className={styles.address}>
                      {CONTACT_DATA.address}
                      <br />
                      {CONTACT_DATA.cityZip}
                    </p>
                    <a
                      href={CONTACT_DATA.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.directionsButton}
                    >
                      Obtenir l'itinéraire →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
