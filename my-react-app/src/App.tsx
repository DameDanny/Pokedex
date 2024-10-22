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
			<PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
		</div>
	);
}

export default App;
