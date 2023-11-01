const ENDPOINT = "https://rickandmortyapi.com/api/character/";

export const getCharacter = async () => {
  try {
    const response = await fetch(`${ENDPOINT}?name=${inputValue}`);
    if (response.ok) {
      const json = await response.json();
      console.log({ json });
      return json;
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
};
