import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetallePokemon } from "../../redux/pokeDucks";
import "./DetallPokemon.css";

const DetallPokemon = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((store) => store.pokemones.unPokemon);

  React.useEffect(() => {
    const fetchData = () => {
      dispatch(DetallePokemon());
    };

    fetchData();
  }, [dispatch]);

  return pokemon ? (
    <div className="card mt-3 text-center" >
      <div className="Card-body">
        <img src={pokemon.foto} className="img-fluid" alt="" />
        <div className="card-title text-uppercase mt-2"> {pokemon.nombre} </div>
        <p className="card-text">
          {" "}
          Alto: {pokemon.alto} | Ancho: {pokemon.ancho}{" "}
        </p>
      </div>
    </div>
  ) : null;
};

export default DetallPokemon;
