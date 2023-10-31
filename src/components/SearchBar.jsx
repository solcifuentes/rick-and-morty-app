import React from "react";
import { useState } from "react";

export default function SearchBar() {
  const [character, setCharacter] = useState("");
  return (
    <div>
      <form>
        <label htmlFor="character-field">
          {" "}
          <input
            id="character-field"
            type="text"
            value={character}
            placeholder="Troba un personatge"
            onChange={(event) => {
              setCharacter(event.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
}
