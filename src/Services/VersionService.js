import axios from "axios";


function fetchVersions() {
    return axios.get('https://pokeapi.co/api/v2/version')
}

export default {fetchVersions}