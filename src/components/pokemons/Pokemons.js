import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAction,
  nextGetPokemAction,
  providerPokemon,
  DetallePokemon,
} from "../../redux/pokeDucks";
import DetallPokemon from "../DetallPokemon";
import "./Pokemons.css";

const Pokemons = () => {
  // es el puente que me ayuda a traer funciones del pato de pokemones
  const dispatch = useDispatch();

  // con este traemos elementos o reducer o llamados de las apis
  const pokemon = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);


  React.useEffect(() => {
    const fetchData = () => {
      dispatch(getPokemonsAction());
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-6 ">
        <h2> List of Pokemones </h2>

        <div className="d-flex  justify-content-between mt-3">
          {pokemon.length === 0 && (
            <button
              className=" btn btn-dark"
              onClick={() => dispatch(getPokemonsAction())}
            >
              Get Pokemones
            </button>
          )}

          {previous && (
            <button
              className=" btn btn-dark"
              onClick={() => dispatch(providerPokemon())}
            >
              Provider
            </button>
          )}
          {next && (
            <button
              className=" btn btn-dark"
              onClick={() => dispatch(nextGetPokemAction(2))}
            >
              Next
            </button>
          )}
        </div>

        <ul className="list-group mt-3">
          {pokemon.map((item) => (
            <li className=" list-group-item text-uppercase " key={item.name}>
              {item.name}

              <button
                onClick={() => dispatch(DetallePokemon(item.url))}
                type="button"
                className="btn btn-dark btn-sm float-end"
              >
                info
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-md-6">
        <h2>Detalle de un pokemon</h2>
        <DetallPokemon />
      </div>
    </div>
  );
};

export default Pokemons;
