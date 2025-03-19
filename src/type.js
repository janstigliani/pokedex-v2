import PokeService from "./service/poke-service.js";

const pService = new PokeService();

const urlParams = new URLSearchParams(window.location.search);

const type = urlParams.get('type');

pService.fetchPokemonbytype(type).then(data => render(data));

function render(PokeArrayType) {
    const root = document.getElementById("root");
    root.classList.add("main-container");
    // root.innerHTML = "";

    // for (const pokemon of PokeArrayType) {
    //     const pokeLink = document.createElement("a");
    //     console.log(pokemon);
    //     const match = pokemon.pokemon.url.match(/\/(\d+)\/$/);
    //     const id = match ? match[1] : "";
    //     pokeLink.href = `./detail.html?id=${id}`;

    //     const node = document.createTextNode(pokemon.pokemon.name);

    //     pokeLink.appendChild(node);
    //     root.appendChild(pokeLink);

    // }
    for (const pokemon of PokeArrayType) {
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
