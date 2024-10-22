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
	return 
    <div>
       {pokemonList.map(article) => (
        <article
        key={article.name}>
            
        </article>
       )}
    <div/>;
}

export default NavBar;
