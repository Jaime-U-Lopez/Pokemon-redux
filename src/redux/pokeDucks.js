import axios from "axios";

//constantes
const dataInitial ={

  array:[]
}
//tipes
const GET_POKEMON_SUCCESS=  'GET:POKEMONES_SUCCESS'
const GET_POKEMON_ERROR=  'GET:POKEMONES_ERROR'

//reducer

export default function pokeReducer( state = dataInitial, action ) {

  switch (action.type) {
    case value:
      
      break;
  
    default:
      break;
  }
  
}




//acciones

export const getPokemonsAction=()=> async (dispatch, getState) => {

  try {
    const res=await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')



  } catch (error) {
          console.log(error)
  }
}
