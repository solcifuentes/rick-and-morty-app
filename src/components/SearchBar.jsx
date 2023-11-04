/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ handleSearch, setInputValue, inputValue }) {
  const handleChange = (event) => {
    console.log(event);
    const inputToLowCase = event.target.value;
    setInputValue(inputToLowCase);

    handleSearch(inputToLowCase);
  };

  return (
    <div className={styles.inputWrapper}>
      <form
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          id="character-field"
          type="text"
          className={styles.inputField}
          value={inputValue}
          placeholder="Search a Rick and Morty's character"
          onChange={handleChange}
        />
        <label htmlFor="character-field"></label>
        <FaSearch />
      </form>
    </div>
  );
}
