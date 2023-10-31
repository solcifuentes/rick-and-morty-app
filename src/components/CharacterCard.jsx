import React, { useState } from "react";

import styles from "./CharacterCard.module.css";

export default function CharacterCard(props) {
  const character = props.characterData;

  return (
    <li className={styles.card}>
      <img
        className={styles.characterImg}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.cardContainer}>
        <h3 className={styles.characterName}>{character.name}</h3>
        <div className={styles.speciesContainer}>
          {/* Lo atamos con alambre. styling provisional */}
          {character.status === "Alive" && (
            <span className={styles.circleAlive}></span>
          )}
          {character.status === "Dead" && (
            <span className={styles.circleDead}></span>
          )}
          {character.status === "unknown" && (
            <span className={styles.circleUnknown}></span>
          )}
          {/* acá finaliza */}
          <p className={styles.characterSpecies}>{character.species}</p>
        </div>
        <p className={styles.characterOrigin}>{character.origin.name}</p>
      </div>
    </li>
  );
}
/*
Create a condition
"Alive" : green; 
"Dead": red; 
"unknown / the rest": yellow; 
*/
