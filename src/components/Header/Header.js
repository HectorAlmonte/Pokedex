import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header-container">
      <p className="a-jagger">
        <div className="tittle">
          <img
            className="img-styles"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/155.svg"
            alt=""
          />
          <h3 className="tittle-style">Pokédex</h3>
        </div>
      </p>
      {/* <div className="menu">
        <div className="hows-that">
          <boton className="modal">Modal 1</boton>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
