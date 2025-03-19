import PokeService from "./service/poke-service.js";
import StorageService from "./service/storage-service.js";

const pService = new PokeService();
const pStorage = new StorageService();

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

// pService.getPokeData().then(data => render(data));

const pokemon = await pService.getPokeData();
render(pokemon);

function savePokemon(event, index) {
    event.preventDefault();
    const selectedPokemon = pokemon[index];
    pStorage.save(selectedPokemon);
    
}

function render(data) {
    const root = document.getElementById("root");
    root.classList.add("main-container");
    root.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const pokemon = data[i];

        const pokeLink = document.createElement("a");
        pokeLink.href = `./detail.html?id=${pokemon.id}`;

        const img = document.createElement('img');

        img.src = pokemon.sprites.front_default;

        pokeLink.appendChild(img);

        const node = document.createTextNode(pokemon.name);

        pokeLink.appendChild(node);

        const saveBtn = document.createElement("button");

        saveBtn.addEventListener("click", (event) => savePokemon(event , i));

        const bNode = document.createTextNode("Save");

        saveBtn.appendChild(bNode);
        pokeLink.appendChild(saveBtn);

        root.appendChild(pokeLink);
        
    }
}