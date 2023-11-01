/* eslint-disable react/prop-types */
import React from "react";
import CharacterCard from "./CharacterCard";

export default function Grid({ data }) {
  return (
    <div>
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
