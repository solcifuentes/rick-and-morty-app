/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./CharacterCard.module.css";

export default function CharacterCard(props) {
  const character = props.characterData;
  const foundChar = props.foundChar;

  if (foundChar.length === 0) {
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
            <span className={styles.hide}>{character.status}</span>
            <CharacterStatus status={character.status} />
            <p className={styles.characterSpecies}>{character.species}</p>
          </div>
          <p className={styles.characterOrigin}>{character.origin.name}</p>
        </div>
      </li>
    );
  }

  if (foundChar.length !== 0) {
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
            <span className={styles.hide}>{character.status}</span>
            <CharacterStatus status={character.status} />
            <p className={styles.characterSpecies}>{character.species}</p>
          </div>
          <p className={styles.characterOrigin}>{character.origin.name}</p>
        </div>
      </li>
    );
  }
  return (
    <div>
      <p>We couldn't find that character. Check if it's well written.</p>
    </div>
  );
}

function CharacterStatus({ status }) {
  if (status === "unknown") {
    return <span className={styles.circleUnknown}></span>;
  }

  if (status === "Dead") {
    return <span className={styles.circleDead}></span>;
  }

  if (status === "Alive") {
    return <span className={styles.circleAlive}></span>;
  }

  return null;
}
