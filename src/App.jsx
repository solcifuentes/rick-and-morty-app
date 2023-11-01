import { useEffect, useState } from "react";
// import "./App.css";
import SearchBar from "./components/SearchBar";
import CharacterCard from "./components/CharacterCard";
import styles from "./App.module.css";
import logo from "./assets/logo.png";

const ENDPOINT = "https://rickandmortyapi.com/api/character/";

function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError("Network error: ", err.message);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const charactersData = await getData();
      setData(charactersData.results);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Logo />
      <SearchBar data={data} />
      <h2 className={styles.listTitle}>Llista de personatges</h2>

      <ul>
        {data &&
          data.map((characterData) => (
            <CharacterCard
              key={characterData.id}
              characterData={characterData}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;

function Logo() {
  return <img className={styles.logo} src={logo} alt="Rick & Morty" />;
}
