/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  // const characterNames = props.data.map((character) => {
  //   return character.name.toLowerCase();
  // });

  const handleSearch = (inputValue) => {
    event.preventDefault();
    const searchTerm = inputValue.toLowerCase();
    characterNames.startsWith(searchTerm);
  };

  return (
    <div className={styles.inputWrapper}>
      <form className={styles.form} onSubmit={() => handleSearch(inputValue)}>
        <label htmlFor="character-field">
          {" "}
          <input
            id="character-field"
            type="text"
            className={styles.character}
            value={inputValue}
            placeholder="Search a Rick and Morty's character"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <FaSearch />
        </label>
      </form>
      {/* <p>{inputValue}</p> */}
    </div>
  );
}
