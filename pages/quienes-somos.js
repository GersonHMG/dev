import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/AboutUs.module.css';

function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.whiteSeparator}></div> {/* Separación en blanco */}
      <h1 className={styles.title}>Sobre nosotros</h1>
      <div className={styles.section}>
        <div className={styles.column}>
          <div className={styles.iconValues}>
            <Image src="/mision.png" alt="Misión" width={60} height={60} />
          </div>
          <h2>Misión</h2>
          <p>Trabajar incansablemente para ofrecer los mejores productos y servicios a nuestros clientes.</p>
        </div>
        <div className={styles.column}>
          <div className={styles.iconValues}>
            <Image src="/vision.png" alt="Visión" width={60} height={60} />
          </div>
          <h2>Visión</h2>
          <p>Ser reconocidos como líderes en nuestra industria, innovando constantemente para el futuro.</p>
        </div>
        <div className={styles.column}>
          <div className={styles.iconValues}>
            <Image src="/valores.png" alt="Valores" width={60} height={60} />
          </div>
          <h2>Valores</h2>
          <p>Honestidad, compromiso y excelencia en todo lo que hacemos.</p>
        </div>
      </div>
      <div className={styles.teamSection}>
        <h2>Nuestro equipo</h2>
        <div className={styles.teamMembers}>
          {/* Aquí puedes repetir este bloque para cada miembro del equipo */}
          <div className={styles.teamMember}>
            <Image src="/gerson.jpg" alt="Equipo 1" width={150} height={150} />
            <h3>Gerson Marihuan</h3>
            <p>Scrum Master </p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/gersonhmg/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/gerson-m-1740b8239/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src="/paulo.jpg" alt="Equipo 1" width={150} height={150} />
            <h3>Paulo Vidal</h3>
            <p>Product Owner</p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/paulov6969" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/paulo-vidal-3013a424b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src="/profile.png" alt="Equipo 1" width={150} height={150} />
            <h3>Nicolas Ducaseau</h3>
            <p>Marketing y comunicaciones</p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/cattus.duca" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/nicolas-ducaseau/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src="/cristian.jpg" alt="Equipo 1" width={150} height={150} />
            <h3>Cristian Cabrera</h3>
            <p>Encargado de Testing</p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/_cristian.ce_" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/ccabrera99" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src="/chris.jpg" alt="Equipo 1" width={150} height={150} />
            <h3>Christopher Guibout</h3>
            <p>Encargado de Tecnologías</p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/christopherguibout/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/christopher-guibout-533b01170/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.teamMember}>
            <Image src="/mae.jpg" alt="Equipo 1" width={150} height={150} />
            <h3>Ismael Zapata</h3>
            <p>Encargado de Diseño y UX</p>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com/mae.zv123/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://www.linkedin.com/in/ismaelzapv/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={styles.icon} />
              </a>
            </div>
          </div>

          {/* Repite el bloque para cada miembro */}
        </div>
      </div>

      <Script 
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-TSP37PYT9E"
      />

      <Script id="google-analytics" strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TSP37PYT9E');`,
        }}
      />
      
    </div>
  );
}

export default AboutUs;
