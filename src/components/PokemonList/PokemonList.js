import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokemons = await data.json();

    setPokemons(pokemons.results);
  };

  return (
    <div className="card">
      {pokemons.map((pokemon, index) => (
        <Card key={index} nombre={pokemon.name} index={index + 1} />
      ))}
    </div>
  );
}

export default PokemonList;
