import { useEffect, useState } from "react";
// import "./App.css";
import SearchBar from "./components/SearchBar";
import Grid from "./components/Grid";
import CharacterCard from "./components/CharacterCard";
import styles from "./App.module.css";
import logo from "./assets/logo.png";

const ENDPOINT = "https://rickandmortyapi.com/api/character/";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [nextpage, setNextPage] = useState(1);

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

  console.log({ data });
  return (
    <div className={styles.container}>
      <Logo />
      <SearchBar data={data} />
      <Grid data={data} />
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
