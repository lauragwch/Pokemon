import axios from "axios";

function fetchTypesByName (type) {
    return axios.get('https://pokeapi.co/api/v2/type/'+type)
}

function fetchTypes() {
    return axios.get('https://pokeapi.co/api/v2/type?limit=25')
}


export default {
    fetchTypesByName, fetchTypes
}