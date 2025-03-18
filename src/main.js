import PokeService from "./service/poke-service.js";

const pService = new PokeService();

function next() {
    pService.nextPage();
    pService.getPokeData().then(data => render(data))
}

function previous() {
    pService.previousPage();
    pService.getPokeData().then(data => render(data))
}

window.previous = previous;
window.next = next;

pService.getPokeData().then(data => render(data));

function render(data) {
    const root = document.getElementById("root");
    root.classList.add("main-container");
    root.innerHTML = "";

    for (const pokemon of data) {
        const pokeLink = document.createElement("a");

        const img = document.createElement('img');

        img.src = pokemon.sprites.front_default;

        pokeLink.appendChild(img);

        const node = document.createTextNode(pokemon.name);

        pokeLink.appendChild(node);
        root.appendChild(pokeLink);
    }
}