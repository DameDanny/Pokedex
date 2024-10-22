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

function PokemonCard() {
	const pokemon_1 = pokemonList[0];
	return (
		<figure>
			{pokemon_1?.imgSrc == null ? (
				<p>???</p>
			) : (
				<img src={pokemon_1.imgSrc} alt={pokemon_1.name} />
			)}
			<figcaption>{pokemon_1.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
pokemonList;
