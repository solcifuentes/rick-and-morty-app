/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import styles from "./SearchBar.modules.css";

export default function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  const characterData = props.data;

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={() => handleSubmit}>
      <label htmlFor="character-field">
        {" "}
        <input
          id="character-field"
          type="text"
          className={styles.inputField}
          value={inputValue}
          placeholder="Troba un personatge"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </label>
      <p>{inputValue}</p>
    </form>
  );
}
