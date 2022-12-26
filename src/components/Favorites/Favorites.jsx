import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './favorites.module.css'
import { useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../../redux/action'


export  function Favorites (props){

   const dispatch = useDispatch()
   //Aca uso el handle con la action del reducer
   function handleOrder(evento){
      dispatch(orderCards(evento.target.value))
   }
   //Aca para filtrar por tipo de genero
   function handleFilter(evento){
      dispatch(filterCards(evento.target.value))
   }

    return ( <>
      <div className={styles.order}>
         <div className={styles.orderOne}>
            <select onChange={handleOrder} name="order" id="">
               <option value="Ascendente">Ascendente</option>
               <option value="Descendente">Descendente</option>
            </select>
         </div>
         <div className={styles.orderTwo}>
            <select  onChange={handleFilter} name="filter" id="">
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="Unknown">Unknown</option>
            </select>
         </div>
      </div>
      <div className={styles.container}>
         {/* ESTO ES DEL ORDENAMIENTO */}
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
      </>
      )
}

export const mapStateToProps = (state) =>{  // Consume la informacion del ESTADO GLOBAL
    return{
       myFavorites: state.myFavorites 
    }
 }

 export default connect(mapStateToProps)(Favorites);