/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

// const ENDPOINT = "https://rickandmortyapi.com/api/character/";
export default function SearchBar({ handleSearch, setInputValue, inputValue }) {
  return (
    <div className={styles.inputWrapper}>
      <form className={styles.form} onSubmit={() => handleSearch()}>
        <input
          id="character-field"
          type="text"
          className={styles.inputField}
          value={inputValue}
          placeholder="Search a Rick and Morty's character"
          onChange={(event) => {
            const inputToLowCase = event.target.value;
            setInputValue(inputToLowCase);
          }}
        />
        <label htmlFor="character-field"></label>
        <FaSearch />
      </form>
    </div>
  );
}
