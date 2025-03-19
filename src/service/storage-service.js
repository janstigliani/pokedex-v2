class StorageService {

    constructor() {

    }

    save(pokemon) {

        const starredPokemonString = localStorage.getItem("starred");

        if (starredPokemonString) {

            const starredPokemons = JSON.parse(starredPokemonString);
            starredPokermons.push(pokemon);
            localStorage.setItem("starred", JSON.stringify(starredPokemons));
        } else {
            const starredPokemons = [];
            starredPokemons.push(pokemon);
            localStorage.setItem("starred", JSON.stringify(starredPokemons));
        }


    }
}

export default StorageService;