import React from "react";
import styles from "./About.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.contenedorMi}>
        <div className={styles.titulo}>
          <p className={styles.h1Mi}>#AKCS</p>
          <p className={styles.h2Mi}>Desarrollador Full Stack</p>
          <div className={styles.social}>
            <a
              className={styles.a}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
            >
              <FaLinkedin className={styles.image} />
            </a>
            <a
              className={styles.a}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Laoset"
            >
              <FaGithub className={styles.image} />
            </a>
          </div>
        </div>
        <div className={styles.parrafo}>
          <p className={styles.h3Mi}>
            👋Hola, soy Alan Kevin Corman Samanamud. Este proyecto forma parte
            del Modulo 2 del BootCamp de soyHenry. Tiene la principal funcion de
            hacer busqueda de personajes del mundo de Rick and Morty mediante el
            ID que va desde el 1 al 826, ademas tiene una seccion de Favoritos y
            Login incorporado.
          </p>
        </div>
        <p className={styles.h3Mi}>Lenguajes utilizados:</p>
        <div className={styles.ul}>
          <li className={styles.li}>HTML</li>
          <li className={styles.li}>CSS</li>
          <li className={styles.li}>Javascript</li>
          <li className={styles.li}>React</li>
          <li className={styles.li}>Redux</li>
        </div>
      </div>
    </div>
  );
}
