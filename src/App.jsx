import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";
import SkeletonCard from "./components/SkeletonCard";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );

        const pokemonsData = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonRecord = await axios.get(pokemon.url);
            return {
              id: pokemonRecord.data.id,
              name: pokemonRecord.data.name,
              image: pokemonRecord.data.sprites.front_default,
            };
          })
        );

        setPokemons(pokemonsData);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Pokémon Search</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="w-full mb-10 md:w-1/3 mx-auto block p-3 border border-gray-300 
             rounded-xl shadow-md focus:ring-2 focus:ring-blue-500 
             focus:outline-none transition-all duration-300"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {[...Array(12)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pokemons
            .filter((pokemon) => pokemon.name.includes(search))
            .map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
