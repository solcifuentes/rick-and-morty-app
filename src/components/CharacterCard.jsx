import React from "react";
import "./CharacterCard.css";

// import styles from "./CharacterCard.module.css";

export default function CharacterCard(props) {
  const character = props.characterData;
  return (
    <div>
      <ul>
        {character && (
          <li className="card">
            <img
              className="characterImg"
              src={character.image}
              alt={character.name}
            />
            <div className="cardContainer">
              <h3 className="characterName">{character.name}</h3>
              <p className="characterSpecies">{character.species}</p>
              <p className="characterOrigin">{character.origin.name}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
