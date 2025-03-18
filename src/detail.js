import PokeService from "./service/poke-service.js";

const pService = new PokeService();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

pService.fetchPokemonbyId(id).then(data => render(data));

function render(pokemonData) {
    const root = document.getElementById("root");
    root.classList.add("main-container-detail");

    const pokeBall = document.createElement("div");

    const pokeSprite = document.createElement("div");
    pokeSprite.classList.add("poke-sprite") 
    const img = document.createElement('img');
    img.classList.add("sprite");

    if(!!pokemonData.sprites.front_default) {
        img.src = pokemonData.sprites.front_default;
    }

    pokeSprite.appendChild(img);
    pokeBall.appendChild(pokeSprite);

    const pokeName = document.createElement("h1");
    const nodeName = document.createTextNode(pokemonData.name);
    pokeName.appendChild(nodeName);
    pokeBall.appendChild(pokeName);

    const pokeTypes = document.createElement("p");
    const nodeTypes = document.createTextNode("types: " + pokemonData.types.map(type => type.type.name).join(", "));
    pokeTypes.appendChild(nodeTypes);
    pokeBall.appendChild(pokeTypes);

    const pokeBExp = document.createElement("p");
    const nodeBaseExperience = document.createTextNode("base experience: " + pokemonData.base_experience);
    pokeBExp.appendChild(nodeBaseExperience);
    pokeBall.appendChild(pokeBExp);

    const pokeHeight = document.createElement("p");
    const nodeHeight = document.createTextNode("height: " + pokemonData.height);
    pokeHeight.appendChild(nodeHeight);
    pokeBall.appendChild(pokeHeight);

    const pokeWeight = document.createElement("p");
    const nodeWeight = document.createTextNode("weight: " + pokemonData.weight);
    pokeWeight.appendChild(nodeWeight);
    pokeBall.appendChild(pokeWeight);

    const pokeAbilities = document.createElement("p");
    const nodeAbilities = document.createTextNode("abilities: " + pokemonData.abilities.map(ability => ability.ability.name).join(", "));
    pokeAbilities.appendChild(nodeAbilities);
    pokeBall.appendChild(pokeAbilities);

    const pokeMoves = document.createElement("p")
    const nodeMoves = document.createTextNode("moves: " + pokemonData.moves.map(move => move.move.name).join(`, `));
    pokeMoves.appendChild(nodeMoves);
    pokeBall.appendChild(pokeMoves);

    root.appendChild(pokeBall);
}