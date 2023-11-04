import { useEffect, useState } from "react";
// import "./App.css";
import SearchBar from "./components/SearchBar";
import Grid from "./components/Grid";
import ScrollToTop from "./components/ScrollToTop";
import styles from "./App.module.css";
import logo from "./assets/logo.png";

const ENDPOINT = "https://rickandmortyapi.com/api/character/";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [nextpage, setNextPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [noCharResults, setNoCharResults] = useState(false);

  const getData = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/?page=${nextpage}`);
      if (response.ok) {
        const json = await response.json();
        setNextPage(nextpage + 1);
        return json;
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
        console.log(error);
      }
    } catch (err) {
      setError("Network error: ", err.message);
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const charactersData = await getData();
      setData(charactersData.results);
    }
    fetchData();
  }, []);

  const getCharacter = async () => {
    try {
      const response = await fetch(`${ENDPOINT}?name=${inputValue}`);
      if (response.ok) {
        const json = await response.json();
        setNoCharResults(false);
        return json;
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function fetchChar() {
    const found = await getCharacter();
    if (!found) {
      console.log("no encontrado");
      setNoCharResults(true);
    } else {
      console.log({ found });
      setSearchResults(found.results);
    }
  }

  const handleSearch = () => {
    event.preventDefault();
    fetchChar();
  };

  const loadMoreChar = () => {
    async function fetchMoreData() {
      const charactersNewData = await getData();
      const newCharArray = charactersNewData.results;
      let nextCharacters = [...data, ...newCharArray];
      setData(nextCharacters);
    }
    fetchMoreData();
  };
  const handleClick = () => {
    loadMoreChar();
  };

  return (
    <div className={styles.container}>
      <Logo />
      <SearchBar
        handleSearch={handleSearch}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <Grid
        data={searchResults.length > 0 ? searchResults : data}
        inputValue={inputValue}
        noCharResults={noCharResults}
      />
      <button className={styles.btn} onClick={() => handleClick()}>
        Load more
      </button>
    </div>
  );
}

export default App;

function Logo() {
  return <img className={styles.logo} src={logo} alt="Rick & Morty" />;
}
