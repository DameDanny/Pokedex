interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setIndex, pokemonList }: NavBarProps) {
	const setPokemonIndex = (index) => {
		setIndex(index);
	};

	return (
		<div>
			{pokemonList.map((article, index) => (
				<button onClick={() => setPokemonIndex(index)} key={index}>
					{article.name}
				</button>
			))}
		</div>
	);
}

export default NavBar;
