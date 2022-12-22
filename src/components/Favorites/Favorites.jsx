import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './favorites.module.css'
export  function Favorites (props){
    return ( 
      <div className={styles.container}>
         {props.myFavorites?.map((personaje,index) => ( 
            <div className={styles.casiContainer}>
               <div className={styles.tarjetas}>
                  <div className={styles.imgPadre}>
                     <img className={styles.img}src={personaje.image}alt="Rick" />
                  </div>
                  <div className={styles.intro}>
                     <NavLink className={styles.h1Navlink} to={`/detail/${personaje.id}`}>
                     <h1 className={styles.h1}><span className={styles.spansito}>{personaje.name}</span></h1>
                     </NavLink>
                  </div>
               </div>
            </div>
         ))}
      </div>
      )
}

export const mapStateToProps = (state) =>{  // Consume la informacion del ESTADO GLOBAL
    return{
       myFavorites: state.myFavorites 
    }
 }

 export default connect(mapStateToProps)(Favorites);