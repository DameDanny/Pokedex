import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";

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
	return (
		<div>
			<p>Hello pokemon number {pokemonIndex}</p>
			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
			<div>
				<NavBar
					pokemonIndex={pokemonIndex}
					setPokemonIndex={setNumber}
					pokemonList={pokemonList}
				/>
			</div>
		</div>
	);
}

export default App;
