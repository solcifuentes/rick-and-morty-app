import React from "react";

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
          <span className={styles.circle}></span>

          <p className={styles.characterSpecies}>{character.species}</p>
        </div>
        <p className={styles.characterOrigin}>{character.origin.name}</p>
      </div>
    </li>
  );
}
