import React from "react";
import styles from './Error.module.css'

export default function Error(){
    return(
        <div>
            <h1 className={styles.h1error}>Error 404</h1>
            <h2 className={styles.spansito}>not found</h2>
        </div>
    )
}