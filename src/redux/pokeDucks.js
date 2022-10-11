import axios from "axios";

//constantes  almacenan la informacion

const dataInitial ={

  array:[],
  offset:0
}
//tipes  son como variables de entorno

const GET_POKEMON_SUCCESS=  'GET:POKEMONES_SUCCESS'
const GET_POKEMON_SUCCESS_NEW=  'GET_POKEMON_SUCCESS_NEW'

//reducer  

export default function pokeReducer( state = dataInitial, action ) {

  switch (action.type) {
    case GET_POKEMON_SUCCESS:

      return{  ...state,array: action.payload}
    case GET_POKEMON_SUCCESS_NEW:
      return{...state,array:action.payload.array, offset:action.payload.offset}

  
    default:
        return state;
        
  }
  
}


//acciones

export const getPokemonsAction=()=> async (dispatch, getState) => {

  try {
    const res=await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
    dispatch({

      type:GET_POKEMON_SUCCESS,
      payload:res.data.results
    })

    console.log("Hola")
  } catch (error) {
          console.log(error)
  }
}


export const getPokemAction2=(numero)=> async (dispatch, getState) => {


  const {offset}= getState().pokemones
  const siguiente= offset+numero

  try {

    const res=await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=10`)
    dispatch({

      type:GET_POKEMON_SUCCESS_NEW,
      payload:{
        
        array:res.data.results,
        offset:siguiente

      
      }
    })

    console.log("Hola cambiando las secciones")
  } catch (error) {
          console.log(error)
  }
}

