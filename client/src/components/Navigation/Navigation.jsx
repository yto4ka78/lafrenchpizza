import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          LA FRENCH PIZZA
        </Link>
        <ul className={styles.links}>
          <li>
            <Link to="/menu" className={isActive('/menu') ? styles.active : ''}>
              Menu
            </Link>
          </li>
          <li>
            <span className={styles.navLinkDisabled}>Livraison</span>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? styles.active : ''}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? styles.active : ''}>
              À propos
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={styles.burger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          <li>
            <Link to="/menu" className={isActive('/menu') ? styles.active : ''}>
              Menu
            </Link>
          </li>
          <li>
            <span className={styles.navLinkDisabled}>Livraison</span>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? styles.active : ''}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? styles.active : ''}>
              À propos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
