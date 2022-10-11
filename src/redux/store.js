import {createStore, combineReducers,  applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 

//se importan los patos que se agreguen nuevos o componentes de reduux
import pokeReducer from './pokeDucks'

//en este objeto se van sumando los nuevos patos o objetos 
const rootReducer = combineReducers({
    pokemones: pokeReducer
})
 
export default function generateStore() {
    const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}
