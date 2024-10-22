import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
];

import "./App.css";

function App() {
	return (
		<div>
			<p>Hello</p>
			<PokemonCard pokemon_1={pokemonList[0]} />
		</div>
	);
}

export default App;
