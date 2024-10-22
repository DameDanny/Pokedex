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

function PokemonCard(pokemon_1) {
	return (
		<figure>
			{pokemon_1.imgSrc === "null" ? (
				<p>???</p>
			) : (
				<img src={pokemon_1.imgSrc} alt="bulbasaur img" />
			)}
			<figcaption>{pokemon_1.name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
pokemonList;
