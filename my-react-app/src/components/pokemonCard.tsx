function PokemonCard({ pokemon_1 }) {
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
