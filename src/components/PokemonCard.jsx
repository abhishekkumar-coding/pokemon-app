import React from "react";

function PokemonCard({ pokemon }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 text-center cursor-pointer 
                    hover:scale-105 hover:shadow-xl hover:bg-gray-100 
                    transition-all duration-300 ease-in-out">
            <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto transition-transform duration-300 hover:rotate-6"
            />
            <h2 className="text-lg font-bold mt-2 capitalize text-gray-700">{pokemon.name}</h2>
        </div>
    );
}

export default PokemonCard;
