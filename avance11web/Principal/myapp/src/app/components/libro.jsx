import React, { useState } from "react";
import styles from "./libro.module.css";



const Libro = (props) => {
  const [isReserva, setIsReserva] = useState(false);
  const [fechaReserva, setFechaReserva] = useState(new Date());

  const handleClick = () => {
    setIsReserva(true);
  };

  const { libro } = props;

  return (
    <article className={styles.libro}>
      <div className={styles.librocuadro1}>
        <div className={styles.icono3}>
          <span>{libro.categoria}</span>
        </div>
        <p>
        {libro.titulo}
        </p>
      </div>
      <div className={styles.imglibro}>
        <div className={styles.imglibro2}>
          <img src={libro.imagen} alt="" />
        </div>
      </div>
      <div className={styles.informacionlibro}>
        <span className={styles.spaninfo1}>ISBN: {libro.ISBN}</span>
        <span className={styles.spaninfo2}>Autor: {libro.autor}</span>
        <span className={styles.spaninfo2}>Editor: {libro.editorial}</span>
        <span></span>
      </div>
      <div className={styles.contenedorbotonreserva}>
        <button onClick={handleClick}>Reservar</button>
      </div>

      
    </article>
  );
};

export default Libro;