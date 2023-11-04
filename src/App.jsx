import { useEffect, useState } from "react";
// import "./App.css";
import SearchBar from "./components/SearchBar";
import Grid from "./components/Grid";
import ScrollToTop from "./components/ScrollToTop";
import styles from "./App.module.css";
import logo from "./assets/logo.png";

const ENDPOINT = "https://rickandmortyapi.com/api/character/";

function App() {
  const [characters, setCharacters] = useState([]);

  const [lastPage, setLastPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const getCharacters = async (page) => {
    try {
      const response = await fetch(`${ENDPOINT}/?page=${page}`);

      if (response.ok) {
        const json = await response.json();

        return json;
      } else {
        console.log(response.status, response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function fetchCharacters() {
      const charactersData = await getCharacters(1);
      setCharacters(charactersData.results);
    }

    fetchCharacters();
  }, []);

  const searchForCharacter = async (searchTerm) => {
    try {
      const response = await fetch(`${ENDPOINT}?name=${searchTerm}`);
      if (response.ok) {
        const json = await response.json();
        setSearchResults(json.results);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
        setSearchResults([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loadMoreCharacters = () => {
    async function fetchMoreData() {
      const pageToFetch = lastPage + 1;
      const charactersNewData = await getCharacters(pageToFetch);
      setLastPage(pageToFetch);

      const newCharArray = charactersNewData.results;
      let nextCharacters = [...characters, ...newCharArray];
      setCharacters(nextCharacters);
    }
    fetchMoreData();
  };

  const noResults = inputValue.length > 0 && searchResults.length === 0;

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <SearchBar
          handleSearch={searchForCharacter}
          setInputValue={setInputValue}
          inputValue={inputValue}
        />
      </header>

      <div className={styles.container}>
        {noResults ? (
          <div>
            <h2>No results</h2>
          </div>
        ) : (
          <Grid
            data={searchResults.length > 0 ? searchResults : characters}
            inputValue={inputValue}
          />
        )}

        {inputValue.length === 0 && (
          <button className={styles.btn} onClick={loadMoreCharacters}>
            Load more
          </button>
        )}
      </div>
    </>
  );
}

export default App;

function Logo() {
  return <img className={styles.logo} src={logo} alt="Rick & Morty" />;
}
