import React from "react";
import { useState } from "react";
import styles from "./SearchBar.modules.css";

export default function SearchBar() {
  const [character, setCharacter] = useState("");
  return (
    <form className={styles.form}>
      <label htmlFor="character-field">
        {" "}
        <input
          id="character-field"
          type="text"
          className={styles.inputField}
          value={character}
          placeholder="Troba un personatge"
          onChange={(event) => {
            setCharacter(event.target.value);
          }}
        />
      </label>
    </form>
  );
}
