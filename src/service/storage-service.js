class StorageService {

    constructor() {

    }

    save(pokemon) {

        const starredPokemonString = localStorage.getItem("starred");

        if (starredPokemonString) {

            const starredPokemons = JSON.parse(starredPokemonString);
            starredPokemons.push(pokemon);
            localStorage.setItem("starred", JSON.stringify(starredPokemons));
        } else {
            const starredPokemons = [];
            starredPokemons.push(pokemon);
            localStorage.setItem("starred", JSON.stringify(starredPokemons));
        }

    }

    getStarredPokemonData(){
        const starredPokemonString = localStorage.getItem('starred')

        if (starredPokemonString) {
            
            const starredPokemons = JSON.parse(starredPokemonString);
            return starredPokemons;

        } else {
            const starredPokemons = [];
            return starredPokemons;
        }
    }
    
}

export default StorageService;