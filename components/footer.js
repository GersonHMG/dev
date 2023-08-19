import styles from '../styles/Footer.module.css';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.contactSection}>
          <h2>Contacto</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactIcon}>
              <FaEnvelope />
            </div>
            <div>
              <p>Email: contacto.muvec@gmail.com</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactIcon}>
              <FaPhone />
            </div>
            <div>
              <p>+56 9 8599 5690</p>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/muvec_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/company/muvec1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="https://www.youtube.com/@paulovidalbucher5739" target="_blank" rel="noopener noreferrer">
              <FaYoutube className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.logo}>
          <img src="/logo1.png" alt="Logo 1" />
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.logo}>
          <img src="/logo2.png" alt="Logo 2" />
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.logo}>
          <img src="/logo3.png" alt="Logo 3" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
