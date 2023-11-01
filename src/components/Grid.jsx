/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Grid.module.css";
import CharacterCard from "./CharacterCard";

export default function Grid({ data, foundChar, inputValue }) {
  if (foundChar.length === 0) {
    return (
    <div className={styles.container}>
      <h2 className={styles.listTitle}>List of characters</h2>
      <ul>
        {data &&
          data.map((characterData) => (
            <CharacterCard
              key={characterData.id}
              characterData={characterData}
              foundChar={foundChar}
            />
          ))}
      </ul>
    </div>)
  }

  if(foundChar.length !== 0){
    return (
      <div className={styles.container}>
      <h2 className={styles.listTitle}>Characters found with the name {inputValue}</h2>
      <ul>
        {foundChar &&
          foundChar.map((characterData) => (
            <CharacterCard
              key={characterData.id}
              characterData={characterData}
              foundChar={foundChar}
            />
          ))}
      </ul>
    </div>
    )
  }

  return (
    
  );
}
