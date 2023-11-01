/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Grid.module.css";
import CharacterCard from "./CharacterCard";

export default function Grid({ data }) {
  const [numOfElements, setNumOfElements] = useState(4);
  const slice = data.slice(0, numOfElements);

  const loadMore = () => {
    if (data.length !== slice.length) {
      setNumOfElements(numOfElements + 4);
    }
  };
  const showLess = () => {
    setNumOfElements(4);
  };

  const handleClick = () => {
    if (data.length !== slice.length) {
      loadMore();
    }
    if (data.length === slice.length) {
      showLess();
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.listTitle}>Llista de personatges</h2>
      <ul>
        {data &&
          slice.map((characterData) => (
            <CharacterCard
              key={characterData.id}
              characterData={characterData}
            />
          ))}
      </ul>
      <button className={styles.btn} onClick={() => handleClick()}>
        {data.length !== slice.length ? "Load more" : "Show less"}
      </button>
    </div>
  );
}
