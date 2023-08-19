import React from 'react';
import Image from 'next/image';
import styles from '../styles/SobreMuvec.module.css';

const SobreMuvec = () => {
  return (
    <div className={styles.container}>
      <div className={styles.whiteSeparator}></div> {/* Separación en blanco */}
      <section className={styles.contextSection}>
        <div className={styles.contextContent}>
          <div className={styles.leftColumn}>
            <h2>¿Que es MUVEC?</h2>
            <p>
            Los videojuegos son actualmente una gran industria, grandes empresas son partícipes 
            y existen muchos clientes y usuarios. Los videojuegos no son solamente un producto, 
            detrás de sí tienen una historia, un proceso creativo, artistas, guionistas y una 
            exploración de culturas. Chile no se queda atrás en esto y ya posee empresas como 
            AbstractDigital que buscan destacarse a nivel internacional. Sin embargo, es poca 
            la difusión de esta industria en el territorio nacional y la ciudadanía , lo que 
            influye negativamente en su desarrollo y en su importancia histórica.
            </p>
            <p>
            MUVEC es un museo, el cual difunde la industria de los videojuegos chilenos, su 
            desarrollo y proceso creativo. La principal propuesta de innovación de MUVEC es 
            una nueva e interactiva forma de entregar la información disponible relacionada 
            a la cultura de los videojuegos Chilena haciendo uso de las funcionalidades entregadas 
            por el uso de VR permitiendo experiencias más memorables usando el ambiente virtual.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <img src="/grupo.png" alt="grupo" />
          </div>
        </div>
      </section>
      <section className={styles.valuesSection}>
        <div className={styles.valuesColumn}>
          <div className={styles.valueIcon}>
            <Image src="/bombilla.png" alt="innovacion" width={60} height={60} />
          </div>
          <h3>Innovación</h3>
          <p>MUVEC utiliza la inmersion del VR para mostrarte 
            la historia de los videojuegos como nunca antes</p>
        </div>
        <div className={styles.valuesColumn}>
          <div className={styles.valueIcon}>
            <Image src="/apreton.png" alt="colaboracion" width={60} height={60} /> 
          </div>
          <h3>Colaboración</h3>
          <p>Trabajamos mano a mano con empresas de videojuegos del 
            sector chileno para traer el mejor contenido posible a nuestro museo</p>
        </div>
        <div className={styles.valuesColumn}>
          <div className={styles.valueIcon}>
            <Image src="/cultura.png" alt="cultura" width={60} height={60} />
          </div>
          <h3>Cultura</h3>
          <p>Mostramos la relevancia de los videojugos chilenos dentro de la cultura nacional</p>
        </div>
      </section>
    </div>
  );
};

export default SobreMuvec;
