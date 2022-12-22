import React from 'react';
import  {useEffect, useState} from 'react'
import styles from './Cards.module.css'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorites, deleteFavorites } from '../redux/action';
//                 INICIO DEL COMPONENTE
export  function Card(props) {
   const[isFav, setIsFav] = useState(false)

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         props.deleteFavorites(props.id)
      }
      else{
         setIsFav(true)
         props.addFavorites(props)
      }
   }
//           EMPIEZA EL RENDER
   return (
      <div className={styles.container}>
         <div className={styles.casiContainer}>
            <div className={styles.tarjetas}>
               <div className={styles.butonPadre}>
                  { isFav ? 
                  <button className={styles.butonfav} onClick={handleFavorite}>❤️</button> 
                  : 
                  <button className={styles.butonfav} onClick={handleFavorite}>🤍</button>
                  }
                  <button className={styles.butonfav} onClick={props.onClose}>󠁸✖</button>
               </div>
               <div className={styles.imgPadre}>
                  <img className={styles.img}src={props.image}alt="Rick" />
               </div>
               <div className={styles.intro}>
                  <NavLink className={styles.h1Navlink} to={`/detail/${props.id}`}>
                  <h1 className={styles.h1}><span className={styles.spansito}>{props.name}</span></h1>
                  </NavLink>
               </div>
            </div>
         </div>
      </div>
   );
}
   //TAREA REACT REDUX
   export const mapDispatchToProps = (dispatch) => { //Voy a despachar cosas del store
      return{
         addFavorites: function(character){
            dispatch(addFavorites(character))
         },
         deleteFavorites: function(id){
            dispatch(deleteFavorites(id))
         }
      }
   }
   export const mapStateToProps = (state) =>{       //Voy a traer cosas del estado global
      return{
         myFavorites: state.myFavorites 
      }
   }

export default connect(
   mapStateToProps,
   mapDispatchToProps)
   (Card);