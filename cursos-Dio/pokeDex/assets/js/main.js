
function criarCardPokemon(pokemon) {
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="details">
                    <ul class="types">
                        <li>poison</li>
                        <li>grass</li>
                    </ul>

                    <img src="assets/img/16.svg" alt=" ${pokemon.name}">
                </div>
            </li>`
}


pokeapi.getPokemon().then(listaPokemons => {

    const pokemonName = document.getElementById('container-pokedex');
    pokemonName.innerHTML += listaPokemons.map(criarCardPokemon).join('');
})
    .catch((error) => console.log(error)); //trata o erro
