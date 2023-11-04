/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Grid.module.css";
import CharacterCard from "./CharacterCard";

export default function Grid({ data }) {
  if (data.length > 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.listTitle}>List of characters</h2>
        <ul>
          {data.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </ul>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className={styles.listTitle}>No results</h2>
      </div>
    );
  }

  return null;
}
