import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

import "./App.css";

function App() {
	const [pokemonIndex, setNumber] = useState(0);
	const booleanPokemon = pokemonIndex > 0;
	const booleanPokemon2 = pokemonIndex < pokemonList.length - 1;
	const previousClick = () => {
		setNumber(pokemonIndex - 1);
	};
	const nextClick = () => {
		setNumber(pokemonIndex + 1);
	};
	return (
		<div>
			<p>Hello pokemon number {pokemonIndex}</p>
			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
			<div>
				{booleanPokemon ? (
					<button onClick={previousClick}>Previous</button>
				) : (
					<br />
				)}
				{booleanPokemon2 ? <button onClick={nextClick}>Next</button> : <br />}
			</div>
		</div>
	);
}

export default App;
