/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const ENDPOINT = "https://rickandmortyapi.com/api/character/";
export default function SearchBar({ handleSearch, setInputValue, inputValue }) {
  const [error, setError] = useState("");
  // const [inputValue, setInputValue] = useState("");
  // const [foundChar, setFoundChar] = useState([]);

  // const getCharacter = async () => {
  //   try {
  //     const response = await fetch(`${ENDPOINT}?name=${inputValue}`);
  //     if (response.ok) {
  //       const json = await response.json();
  //       return json;
  //     } else {
  //       setError(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     setError("Network error: ", err.message);
  //   }
  // };

  // async function fetchChar() {
  //   const found = await getCharacter();
  //   console.log({ found });
  //   setFoundChar(found.results);
  // }

  // const handleSearch = () => {
  //   event.preventDefault();
  //   console.log("submitted");
  //   fetchChar();
  // };

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
