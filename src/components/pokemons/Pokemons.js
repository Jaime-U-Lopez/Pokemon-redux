import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemAction2, getPokemonsAction } from "../../redux/pokeDucks";
import "./Pokemons.css";

const Pokemons = () => {
  // es el puente que me ayuda a traer funciones del pato de pokemones
  const dispatch = useDispatch();

  // con este traemos elementos o reducer o llamados de las apis
  const pokemon = useSelector((store) => store.pokemones.array);
  console.log(pokemon);

  return (
    <div>
      list of Pokemones
      <button onClick={() => dispatch(getPokemonsAction())}>
        Get Pokemones
      </button>
      <button onClick={() => dispatch(getPokemAction2(2))}>
    
        Get more pokemons
      </button>
      <ul>
        {pokemon.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
