import axios from "axios";

const callFetch = async () => {
    const pokemonData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/`
    );
    return callFetch(pokemonData);
  };