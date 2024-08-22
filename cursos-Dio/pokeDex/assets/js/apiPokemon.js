
const pokeapi = {}

function detailsPokemonConvert(details) {
    const pokemon = new Pokemon();
    pokemon.name = details.name;
    pokemon.id = details.id;

    const types = details.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.imagem = details.sprites.other.dream_world.front_default;
    
    return pokemon
}

pokeapi.detailsPokemon = (pokemon) => {
    return fetch(pokemon.url)
    .then(pokeResponse => pokeResponse.json())
    .then(detailsPokemonConvert)
}

pokeapi.getPokemon = (offset = 0, limite =15) => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offset}`;
    return fetch(url)
        .then((response) => response.json()) // retorna um json
        .then((jsonBody) => jsonBody.results) //recebe o body
        .then(pokemons => pokemons.map(pokeapi.detailsPokemon))
        .then(detailsRequest => Promise.all(detailsRequest))
        .then(pokemonsDetails => pokemonsDetails)
}