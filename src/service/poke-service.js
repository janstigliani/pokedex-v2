class PokeService {

    static BASE_URL = `https://pokeapi.co/api/v2/`
    static POKEMON_URL = `pokemon/`
    static TYPE_URL = `type/`

    constructor(limit = 101, offset = 0) {
        this.limit = limit;
        this.offset = offset;
    }

    // getPokeData() {
    //     const url = PokeService.BASE_URL + 
    //                 PokeService.POKEMON_URL + 
    //                 `?limit=` + this.limit + 
    //                 `&offset=` + this.offset;

    //     const pokePromise = fetch(url).then(prom => prom.json())
    //         .then(jsonData => {
    //             const requests = [];

    //             for (const pokemon of jsonData.results) {
                    
    //                 const pokeUrl = pokemon.url

    //                 const request = fetch(pokeUrl)
    //                     .then(res => res.json())
    //                     .then(data => data)
    //                     .catch(err => console.log(err))

    //                     requests.push(request);
    //             }
    //                 return Promise.all(requests)
    //         })
    //         .catch(error => console.log(error));
    //     return pokePromise;
    // }

    async getPokeData() {
        const url = PokeService.BASE_URL + 
                        PokeService.POKEMON_URL + 
                        `?limit=` + this.limit + 
                        `&offset=` + this.offset;

        // const response = await fetch(url);
        // const data = await response.json();
        const data = await fetch(url).then(res => res.json());
        const results = data.results;

        const requests = []

        for (const partialPokemon of results) {

            const pokeUrl = partialPokemon.url

            const request = fetch(pokeUrl)   //non serve await perchè fetch è gestita da Promise.all
            .then(res => res.json())
            .catch(err => console.log(err));
                
            requests.push(request);
        }

        return Promise.all(requests);
    }

    nextPage() {
        if(this.offset > 1301-this.limit) {
            this.offset = 0;
        } else {
            this.offset+=this.limit;
        }
    }

    previousPage() {
        if(this.offset > 0) {
            this.offset-=this.limit;
        } else {
            this.offset = 1302-this.limit;
        }
    }

    fetchPokemonbyId(id) {

        const pokeDetailUrl = PokeService.BASE_URL + 
                              PokeService.POKEMON_URL + id;
        return fetch(pokeDetailUrl)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err));
    }

    async fetchPokemonbytype(type) {

        const pokeDetailUrl = PokeService.BASE_URL + 
                              PokeService.TYPE_URL + type;
        // const fetch(pokeDetailUrl)
        // .then(res => res.json())
        // .then(data => {data.pokemon})
        // .catch(err => console.log(err));

        const data =  await fetch(pokeDetailUrl).then(res => res.json());

        const results = data.pokemon;

        const requests = [];

        for (const element of results) {
            
            const partialPokemon = element.pokemon;

            const pokeUrl = partialPokemon.url;

            const request = fetch(pokeUrl)
                            .then(res => res.json())
                            .catch(err => console.log(err));
                            

            requests.push(request);
        }

        return Promise.all(requests);
    }


}

export default PokeService;