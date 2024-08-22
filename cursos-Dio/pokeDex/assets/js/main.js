
function criarCardPokemon(pokemon) {
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>

                <div class="details">
                    <ul class="types">
                        ${pokemon.types.map(type => `<li>${type}</li>`).join('')}
                    </ul>

                    <img src="${pokemon.imagem}" alt=" ${pokemon.name}">
                </div>
            </li>`
}


pokeapi.getPokemon().then(listaPokemons => {

    const pokemonName = document.getElementById('container-pokedex');
    pokemonName.innerHTML += listaPokemons.map(criarCardPokemon).join('');
})
    .catch((error) => console.log(error)); //trata o erro
