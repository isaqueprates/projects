
const pokeapi = {}

pokeapi.getPokemon = (offset = 0, limite = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offset}`;
    return fetch(url).then((response) => response.json()) // retorna um json
        .then((jsonBody) => jsonBody.results) //recebe o body
        .catch((error) => console.log(error));
}