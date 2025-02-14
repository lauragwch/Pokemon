import axios from 'axios';

function fetchPokemons() {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=50000');
}

function fetchPokemonByName (name) {
    return axios.get('https://pokeapi.co/api/v2/pokemon/'+name)
}

function fetchPokemonSpeciesByName (name) {
    return axios.get('https://pokeapi.co/api/v2/pokemon-species/'+name)
}

// Crée une fonction fetchPokemonsByType qui prend un paramètre type
function fetchPokemonsByType(type){
    // Appelle axios.get avec l'URL de l'API pour récupérer les pokemons par type
    return axios.get("https://pokeapi.co/api/v2/type/"+type);
}

// Crée une fonction fetchPokemonsByGeneration qui prend un paramètre generation
function fetchPokemonsByGeneration(generation){
    // Appelle axios.get avec l'URL de l'API pour récupérer les pokemons par generation
    return axios.get("https://pokeapi.co/api/v2/generation/"+generation);
}

// Crée une fonction fetchPokemonsByVersion qui prend un paramètre generation
function fetchPokemonsByVersion(version){
    // Appelle axios.get avec l'URL de l'API pour récupérer les pokemons par generation
    return axios.get("https://pokeapi.co/api/v2/version/"+version);
}

function fetchPokemonsByGroupVersion(groupversion) {
    return axios.get("https://pokeapi.co/api/v2/version-group/"+ groupversion);
} 

// Crée une fonction fetchPokemonsByHabitat qui prend un paramètre habitat
function fetchPokemonsByHabitat(habitat){
    // Appelle axios.get avec l'URL de l'API pour récupérer les pokemons par habitat
    return axios.get("https://pokeapi.co/api/v2/pokemon-habitat/"+habitat);
}




export default {
    fetchPokemons, fetchPokemonByName, fetchPokemonSpeciesByName,
    fetchPokemonsByType, fetchPokemonsByGeneration, fetchPokemonsByVersion, fetchPokemonsByGroupVersion,
    fetchPokemonsByHabitat
}