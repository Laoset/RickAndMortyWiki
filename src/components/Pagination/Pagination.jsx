import React from "react";
import { useState } from "react";
import styles from './Pagination.module.css'

export const Paginacion = ({pagina, setPagina, maximo}) =>{
    const [input, setInput] = useState(1)

    const nextPage = () =>{
        setInput(input + 1)
        setPagina(pagina +1)
    }
    const previusPage = () =>{
        setInput(input -1 )
        setPagina(pagina -1)
    }
    return(
        <div className={styles.containerxD}>
            <button onClick={previusPage}>Previus</button>
            <button onClick={nextPage}>Next</button>
        </div>
    )
}