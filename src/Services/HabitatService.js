import axios from "axios";


function fetchHabitats() {
    return axios.get("https://pokeapi.co/api/v2/pokemon-habitat?limit=50")
}

export default {fetchHabitats}