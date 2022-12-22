import React from "react";
import { useState } from "react";
import { useParams} from "react-router-dom";
import { useEffect } from "react";
import styles from './Detail.module.css'

export default function Detail (){
    const {detailId} = useParams()
    const[character, setCharacter] = useState({})
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then(char => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch(err => {
            window.alert('Error!', err);
          });
        return setCharacter({});
      }, [detailId]);
      
    return  (
    <div className={styles.container}>
      <div className={styles.tarjetas}>  
        <div className={styles.text}>
          <h1 className={styles.h1prop}>{character.name}</h1>
          <h2 className={styles.h1prop}>Status: {character.status}</h2>
          <h2 className={styles.h1prop}>Species: {character.species}</h2>
          <h2 className={styles.h1prop}>Gender: {character.gender}</h2>
        </div>
        <div className={styles.contImg}>
          <img className={styles.imagen} src={character.image} alt="imagenId" />
        </div>
        </div> 
    </div>
)}