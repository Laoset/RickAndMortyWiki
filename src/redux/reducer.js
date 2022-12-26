import { ADD_FAVORITES,DELETE_CHARACTER, FILTER, ORDER } from './types'

const initialState = {
    myFavorites: [],
    deatail: {},
    allCharacters: []
}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case ADD_FAVORITES:
            return{
             ...state,
             myFavorites: [...state.allCharacters, payload],
             allCharacters:[...state.allCharacters, payload]
        }
        case DELETE_CHARACTER:
            const gege = state.myFavorites.filter(
                obj => obj.id !== payload)
            return{
                ...state,
                myFavorites: gege
            }
        case FILTER:
            console.log(payload)
            const filtradox = state.allCharacters.filter(
                char => char.gender === payload)
            return{
            ...state,
                myFavorites: filtradox
            }
        case ORDER:
            const ordenado = state.allCharacters.sort((a,b)=>{
                //PREGUNTO si el payload es ascendente!
                if(payload === 'Ascendente'){
                    if(a.id < b.id) return -1
                    if(b.id < a.id) return 1
                    return 0;
                }
                //Si es descendente
                else{
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return -1
                    return 0;
                }
            })
            return{
            ...state,
                myFavorites: [...ordenado]
            }
        default:
            return {
                ...state,
            }
    }
};
