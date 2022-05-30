import React from "react";
import Card from "../Card/Card";
import "./PokemonList.css";

function PokemonList() {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=649");
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
