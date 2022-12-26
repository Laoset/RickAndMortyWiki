import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER} from "./types"

export const addFavorites = (personaje) =>{
    return{
        type: ADD_FAVORITES, 
        payload:personaje
    }
}
export const deleteFavorites = (id) =>{
    return{
        type: DELETE_FAVORITES, 
        payload:id
    }
}
export const filterCards = (gender) =>{
    return{
        type: FILTER, 
        payload:gender
    }
}
export const orderCards = (id) =>{
    return{
        type: ORDER, 
        payload:id
    }
}
// export const deleteCharacter = () =>{
//     return{
//         type: DELETE_CHARACTER,
//     }
// }