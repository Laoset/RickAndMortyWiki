import React from 'react'
import styles from './About.module.css'

export default function About (){
    return ( 
    <div className={styles.main}>
        <img className={styles.imge} src="./floppa.jpg" alt="boy" />
        <div className={styles.contenedorMi}>
            <h1 className={styles.h1Mi}>Kevin<span className={styles.spanMi}>Corman</span></h1>
            <h3 className={styles.h3Mi}>Soy alumno de la Carrera de Desarrollador FullStack de Henry.</h3>
            <h3 className={styles.h3Mi}>Este proyecto de Rick & Morty, forma parte del Modulo 2 de la carrera.</h3>
            <h2 className={styles.h3Mi}>Lenguajes utilizados:</h2>
            <li className={styles.li}>HTML</li>
            <li className={styles.li}>CSS</li>
            <li className={styles.li}>Javascript</li>
            <li className={styles.li}>React</li>
            <li className={styles.li}>Redux</li>

        </div>
    </div>
    )
}