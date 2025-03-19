import StorageService from "./service/storage-service";

const pStorage = new StorageService();

const pokemons = await pStorage.getStarredPokemonData();
render(pokemons);

function render(pokemons) {

    const mainContainer = document.querySelector('#root');
    mainContainer.innerHTML = '';

    for (let i = 0; i < pokemons.length; i++) {

        const pokemon = pokemons[i]
        
        const pokeLink = document.createElement("a");
        pokeLink.href = `./detail.html?id=${pokemon.id}`;

        const img = document.createElement('img');

        img.src = pokemon.sprites.front_default;

        pokeLink.appendChild(img);

        const node = document.createTextNode(pokemon.name);

        pokeLink.appendChild(node);

        root.appendChild(pokeLink);
    }
}