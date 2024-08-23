
const pokemonName = document.getElementById('container-pokedex');
const loadMore = document.getElementById('load-more');
const maxPokemon = 500;
let offset = 0
const limite = 10

function criarCardPokemon(pokemon) {
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.id}</span>
                <span class="name">${pokemon.name}</span>

                <div class="details">
                    <ul class="types">
                        ${pokemon.types.map(type => `<li class="${type}">  ${type}</li>`).join('')}
                    </ul>

                    <img src="${pokemon.imagem}" alt=" ${pokemon.name}">
                </div>
            </li>`
}

function loadPokemon(offset, limite) {
    pokeapi.getPokemon(offset, limite).then(pokemons => {
        const listHtml = pokemons.map(criarCardPokemon).join('');
        pokemonName.innerHTML += listHtml;
    })
}

loadPokemon(offset, limite);

loadMore.addEventListener('click', () => {
    offset += limite;
    loadPokemon(offset, limite);

    const quantidadePokemon = offset + limite;
    if (quantidadePokemon >= maxPokemon) {
        loadMore.parentElement.removeChild(loadMore);
    }
})