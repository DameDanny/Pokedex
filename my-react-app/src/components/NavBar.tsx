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
	const afterLoad = (index) => {
		if (pokemonList[index].name === "pikachu") {
			alert("pika pikachu !!!");
		} else {
			alert("hello pokemon trainer :)");
		}
	};
	return (
		<div
		// onLoad={() =>
		// 	pokemonList[pokemonIndex].name === "pikachu"
		// 		? alert("pika pika")
		// 		: alert("hello pokemon trainer :)")
		// }
		>
			{pokemonList.map((article, index) => (
				<button
					onClick={() => {
						setPokemonIndex(index);
						afterLoad(index);
					}}
					key={index}
				>
					{article.name}
				</button>
			))}
		</div>
	);
}

export default NavBar;
