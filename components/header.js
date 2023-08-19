import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      {/*<div className={styles.menuIcon} onClick={toggleMenu}>
        {/* Agrega la clase "menu-icon" al div }
        <FaBars className={styles.menuBars} />
      </div>*/}
      <nav className={`${styles.nav} ${menuActive ? styles.active : ''}`}>
        <ul>
          <li>
            <Link href="/sobre-muvec">
              Sobre MUVEC
            </Link>
          </li>
          <li>
            <Link href="/quienes-somos">
              Quienes Somos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
