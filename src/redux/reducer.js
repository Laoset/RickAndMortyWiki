import { ADD_FAVORITES,DELETE_CHARACTER } from './types'

const initialState = {
    myFavorites: [],
    deatail: {}
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_FAVORITES:
            return{
             ...state,
             myFavorites: [...state.myFavorites, payload]
        }
        case DELETE_CHARACTER:
            const gege = state.myFavorites.filter(
                obj => obj.id !== payload)
            return{
                ...state,
                myFavorites: gege
            }
        default:
            return {
                ...state,
            }
    }
};
