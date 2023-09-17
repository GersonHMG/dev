import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Script from 'next/script';


export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Primera sección con imagen de fondo y parallax */}
      <section className={styles.firstSection}>
        <div className={styles.parallaxBackground}>
        </div>
        <div className={styles.sectionContent}>
          <h1 className={styles.title}>Sumérgete en el Museo de Videojuegos Chilenos</h1>
          <p className={styles.subtitle}>Una nueva forma de ver la industria chilena de videojuegos usando realidad virtual!</p>
        </div>
      </section>

      {/* Separación en blanco */}
      <div className={styles.whiteSeparator}></div>

      {/* Segunda sección con fondo blanco y contenido */}
      <h1 className={styles.sectionTitle}>Descubre MUVEC!</h1>
      <section className={styles.secondSection}>
        <div className={styles.column}>
          {/* Video de YouTube */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HZzPIkLZQM8"
            title="YouTube MUVEC"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
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
