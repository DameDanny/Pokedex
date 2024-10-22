interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
	const booleanPokemon = pokemonIndex > 0;
	const booleanPokemon2 = pokemonIndex < pokemonList.length - 1;
	const previousClick = () => {
		setPokemonIndex(pokemonIndex - 1);
	};
	const nextClick = () => {
		setPokemonIndex(pokemonIndex + 1);
	};
	return (
		<>
			{booleanPokemon ? (
				<button onClick={previousClick}>Previous</button>
			) : (
				<br />
			)}
			{booleanPokemon2 ? <button onClick={nextClick}>Next</button> : <br />}
		</>
	);
}

export default NavBar;
