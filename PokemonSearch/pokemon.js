const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonInfo = {
    name: document.getElementById('pokemon-name'),
    id: document.getElementById('pokemon-id'),
    weight: document.getElementById('weight'),
    height: document.getElementById('height'),
    types: document.getElementById('types'),
    sprite: document.getElementById('sprite'),
    stats: {
        hp: document.getElementById('hp'),
        attack: document.getElementById('attack'),
        defense: document.getElementById('defense'),
        specialAttack: document.getElementById('special-attack'),
        specialDefense: document.getElementById('special-defense'),
        speed: document.getElementById('speed')
    }
};

const API_URL = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';

const resetDisplay = () => {
    pokemonInfo.name.textContent = '-';
    pokemonInfo.id.textContent = '#--';
    pokemonInfo.weight.textContent = 'Weight: --';
    pokemonInfo.height.textContent = 'Height: --';
    pokemonInfo.types.innerHTML = '';
    pokemonInfo.sprite.style.display = 'none';
    Object.values(pokemonInfo.stats).forEach(stat => stat.textContent = '--');
};

const displayPokemonInfo = (data) => {
    // Update basic info
    pokemonInfo.name.textContent = data.name.toUpperCase();
    pokemonInfo.id.textContent = `#${data.id}`;
    pokemonInfo.weight.textContent = `Weight: ${data.weight}`;
    pokemonInfo.height.textContent = `Height: ${data.height}`;
    
    // Update sprite
    pokemonInfo.sprite.src = data.sprites.front_default;
    pokemonInfo.sprite.style.display = 'block';
    
    // Update types
    pokemonInfo.types.innerHTML = '';
    data.types.forEach(type => {
        const typeElement = document.createElement('span');
        typeElement.textContent = type.type.name.toUpperCase();
        typeElement.className = `type ${type.type.name}`;
        pokemonInfo.types.appendChild(typeElement);
    });
    
    // Update stats
    data.stats.forEach(stat => {
        switch(stat.stat.name) {
            case 'hp':
                pokemonInfo.stats.hp.textContent = stat.base_stat;
                break;
            case 'attack':
                pokemonInfo.stats.attack.textContent = stat.base_stat;
                break;
            case 'defense':
                pokemonInfo.stats.defense.textContent = stat.base_stat;
                break;
            case 'special-attack':
                pokemonInfo.stats.specialAttack.textContent = stat.base_stat;
                break;
            case 'special-defense':
                pokemonInfo.stats.specialDefense.textContent = stat.base_stat;
                break;
            case 'speed':
                pokemonInfo.stats.speed.textContent = stat.base_stat;
                break;
        }
    });
};

const searchPokemon = async () => {
    const searchTerm = searchInput.value.toLowerCase();
    if (!searchTerm) return;

    try {
        const response = await fetch(`${API_URL}/${searchTerm}`);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        const data = await response.json();
        displayPokemonInfo(data);
    } catch (error) {
        alert('Pokémon not found');
        resetDisplay();
    }
};

searchButton.addEventListener('click', searchPokemon);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});

// Initialize with empty display
resetDisplay();