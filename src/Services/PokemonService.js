import axios from 'axios';

function fetchPokemons() {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=50000');
}

function fetchPokemonByName () {
    return axios.get('https://pokeapi.co/api/v2/pokemon/'+name)
}

export default {
    fetchPokemons, fetchPokemonByName
}