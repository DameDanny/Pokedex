interface pokemon {
	name: string;
	imgSrc?: string;
}

function PokemonCard({ name, imgSrc }: pokemon) {
	return (
		<figure>
			{imgSrc == null ? <p>???</p> : <img src={imgSrc} alt={name} />}
			<figcaption>{name}</figcaption>
		</figure>
	);
}

export default PokemonCard;
