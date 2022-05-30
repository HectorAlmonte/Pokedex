import React from "react";
import "./Card.css";

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);

const Card = ({ nombre = "?", index = 1 }) => {
  const img =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
    index +
    ".svg";

  const [PokeTypes, setPokeTypes] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${index}`);
    const pokemonsType = await data.json();

    setPokeTypes(pokemonsType.types);
  };

  const poke_types = PokeTypes.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  return (
    <div className="card-container" style={{ backgroundColor: color }}>
      <div className="image-container">
        <div className="Pokemon-Number-styles">
          <h3>#{index.toString().padStart(3, "0")}</h3>
        </div>
        <img className="img-styles" src={img} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <p className="pokemon-name">{nombre}</p>
          <p>Type:{type}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
